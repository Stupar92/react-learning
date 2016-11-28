import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app.js';
import PostsIndex from './components/postsIndex';
import PostsNew from './components/postsNew';
import PostsShow from './components/postsShow';

/*IndexRoute will be shown with '/' path. Without it we would have trouble showing the initial state (and what will happen when we swith to child)*/
export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
        <Route path="posts/new" component={PostsNew} />
        <Route path="posts/:id" component={PostsShow} />
    </Route>
);

//  <Route path="posts/:id" component={PostsShow} /> will be mapped to this.props.params.id