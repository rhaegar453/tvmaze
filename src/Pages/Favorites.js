import React from 'react';
import { connect } from 'react-redux';
import {
    getFavoritesSelector,
    getLoadingSelector,
    getShowsSelector
} from '../redux-utils/selectors/index';
import {
    getShows as getShowsA,
    removeFavoriteAction
} from '../redux-utils/actions/index';

const Favorite = ({ loading, favorites }) => (
    <div className="container">
        <h1>This is the Favorites Component</h1>
    </div>
);

const mapStateToProps = (state) => ({
    favorites: getFavoritesSelector(state),
    loading: getLoadingSelector(state),
    shows: getShowsSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    getShows: () => dispatch(getShowsA()),
    removeFavorite: (data) => dispatch(removeFavoriteAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
