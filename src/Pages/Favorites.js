import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    getFavoritesSelector,
    getLoadingSelector,
    getShowsSelector
} from '../redux-utils/selectors/index';
import {
    getShows as getShowsA,
    removeFavoriteAction
} from '../redux-utils/actions/index';
import FavoriteItem from '../Components/FavoriteItem/FavoriteItem';

const Favorite = ({ favorites, removeFavorite }) => {
    const removeFavoriteA = (data) => {
        removeFavorite(data);
    };
    return (
        <div className="container">
            <div>
                {favorites.length > 0 ? (
                    <div className="favoritesContainer">
                        {favorites.map((item) => (
                            <FavoriteItem
                                genres={item.genres}
                                key={item.id}
                                summary={item.summary}
                                image={item.image.medium}
                                title={item.name}
                                type={item.type}
                                id={item.id}
                                removeFavorite={removeFavoriteA}
                            />
                        ))}
                    </div>
                ) : (
                    <h2 style={{ color: 'white' }}>No Favorites Selected</h2>
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => ({
    favorites: getFavoritesSelector(state),
    loading: getLoadingSelector(state),
    shows: getShowsSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    getShows: () => dispatch(getShowsA()),
    removeFavorite: (data) => dispatch(removeFavoriteAction(data))
});

Favorite.propTypes = {
    favorites: PropTypes.array.isRequired,
    removeFavorite: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
