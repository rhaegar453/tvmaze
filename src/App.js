import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import Lottie from 'react-lottie';
import { pure } from 'recompose';
import ShowTile from './Components/ShowTile/ShowTile';
import { images } from './utils/images';

import {
    getShows as getShowsA,
    makeFavoriteAction,
    removeFavoriteAction
} from './redux-utils/actions/index';
import { getLoadingSelector, getShowsSelector } from './redux-utils/selectors';
import Modal, { ModalButton } from './Components/Modal/Modal';
import ShowDetails from './Components/ShowDetails/ShowDetails';

const App = ({ getShows, shows, loading, makeFavorite, removeFavorite }) => {
    const lottieConfig = {
        loop: true,
        autoplay: true,
        animationData: images.lottie.Loading
    };
    useEffect(() => {
        getShows();
    }, []);

    const first = shows.length > 0 ? shows[0] : null;
    console.log('This is the first ', first);
    return (
        <div>
            {first && first.id ? (
                <ShowDetails
                    title={first.name}
                    genre={first.genres}
                    summary={first.summary}
                    image={first.image.medium}
                    language={first.language}
                    lastPremiered={first.premiered}
                    network={first.network.name}
                    rating={first.rating.average}
                    runtime={first.runtime}
                    schedule={first.schedule.time}
                    status={first.status}
                    type={first.type}
                />
            ) : null}
            <div className="container">
                {loading ? (
                    <Lottie options={lottieConfig} height={400} />
                ) : (
                    <div>
                        {shows.map((item) => (
                            <ShowTile
                                id={item.id}
                                name={item.name}
                                genres={item.genres}
                                image={item.image.medium}
                                language={item.language}
                                status={item.status}
                                summary={item.summary}
                                type={item.type}
                                key={item.id}
                                makeFavorite={(data) => {
                                    makeFavorite(data);
                                }}
                                removeFavorite={(data) => {
                                    removeFavorite(data);
                                }}
                                isFavorite={item.isFavorite}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

App.propTypes = {
    getShows: PropTypes.func.isRequired,
    shows: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    makeFavorite: PropTypes.func.isRequired,
    removeFavorite: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    shows: getShowsSelector(state),
    loading: getLoadingSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    getShows: () => dispatch(getShowsA()),
    makeFavorite: (data) => dispatch(makeFavoriteAction(data)),
    removeFavorite: (data) => dispatch(removeFavoriteAction(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
