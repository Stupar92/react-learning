import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/postsIndex';

/*IndexRoute will be shown with '/' path. Without it we would have trouble showing the initial state (and what will happen when we swith to child)*/
export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostsIndex} />
    </Route>
);