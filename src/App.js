/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Favorite from './Pages/Favorites';
import Main from './Pages/Main';
import { images } from './utils/images';

const App = ({ history }) => {
    console.log(history);
    const goToPath = (path) => {
        history.push(path);
    };
    const { pathname } = history.location;
    const isFavoritePath = pathname.includes('favorite');

    return (
        <div className="container">
            <div className="headerContainer ">
                <img
                    src={images.icons.Logo}
                    className="logoImage"
                    onClick={() => goToPath('/')}
                />
                <button
                    className="btn btn-primary"
                    type="button"
                    onClick={() => goToPath(isFavoritePath ? '/' : '/favorite')}
                >
                    {isFavoritePath ? 'Go to Shows' : 'Go to Favorites'}
                </button>
            </div>
            <div style={{ height: '90vh', overflow: 'scroll' }}>
                <Switch>
                    <Route path="/" component={Main} exact />
                    <Route path="/favorite" component={Favorite} />
                </Switch>
            </div>
        </div>
    );
};

App.propTypes = {
    history: PropTypes.any.isRequired
};

export default withRouter(App);
