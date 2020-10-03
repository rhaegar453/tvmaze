import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Favorite from './Pages/Favorites';
import Main from './Pages/Main';

const App = () => (
    <div>
        <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/favorite" component={Favorite} />
        </Switch>
    </div>
);

export default App;
