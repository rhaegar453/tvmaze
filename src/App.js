import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import { connect } from 'react-redux';
import Lottie from 'react-lottie';
import ShowTile from './Components/ShowTile/ShowTile';
import { images } from './utils/images';
import { getShows as getShowsA } from './redux-utils/actions/index';
import { getLoadingSelector, getShowsSelector } from './redux-utils/selectors';

const App = ({ getShows, shows, loading }) => {
    const lottieConfig = {
        loop: true,
        autoplay: true,
        animationData: images.lottie.Loading
    };
    useEffect(() => {
        getShows();
    }, []);
    return (
        <div>
            <div className="container">
                {loading ? (
                    <Lottie options={lottieConfig} height={400} />
                ) : (
                    <div>
                        {shows.map((item) => (
                            <ShowTile
                                name={item.name}
                                genres={item.genres}
                                image={item.image.medium}
                                language={item.language}
                                status={item.status}
                                summary={item.summary}
                                type={item.type}
                                key={item.id}
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
    loading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => ({
    shows: getShowsSelector(state),
    loading: getLoadingSelector(state)
});

const mapDispatchToProps = (dispatch) => ({
    getShows: () => dispatch(getShowsA())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
