import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => {
  
  let component = null;

  beforeEach(() =>{
    component = renderComponent(App);
  });


  it('show a comment box', () => {
    expect(component.find('.commentBox')).to.exist;
  });
});
