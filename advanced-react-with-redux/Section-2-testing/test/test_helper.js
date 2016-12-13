import jsdom from 'jsdom'; //emulate DOM inside a terminal
import _$ from 'jquery'; // if we used $ it would try to access the DOM right away
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';

    // 1. Set up testing environment to run like a browser in command line
    // we assign jsdom's emulated DOM to global.document. global in node is the same as window in the browser, i.e. global scope,
    // so when jquery boots up it will get fake references to document, thinking it runs inside a browser
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.window = global.document.defaultView;

const $ = _$(global.window); // jqury, just be responsible for this piece of DOM that we are giving you

// 2. Build 'renderComponent' helper that should render a given react class
function renderComponent(ComponentClass, props={}, state={}) {
  const componentInstance =  TestUtils.renderIntoDocument(
       <Provider store={createStore(reducers, state)}>
         <ComponentClass {...props} />
       </Provider>
     );

  //ReactDOM.findDOMNode(componentInstance); -> this produces html
  return $(ReactDOM.findDOMNode(componentInstance));
};

// 3. Build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
};

// 4. Set up chai-jquery
chaiJquery(chai, chai.util, $);


export {renderComponent, expect};
