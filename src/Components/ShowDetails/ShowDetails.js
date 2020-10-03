/* eslint-disable react/jsx-curly-newline */
import React from 'react';
import PropTypes from 'prop-types';
import Pill from '../Pill/Pill';
import './ShowDetails.css';

const ShowDetails = ({
    id,
    title,
    summary,
    image,
    type,
    language,
    genre,
    status,
    runtime,
    lastPremiered,
    schedule,
    rating,
    network,
    url,
    isFavorite,
    addFavorite,
    removeFavorite
}) => {
    const openUrl = () => {
        window.open(url);
    };
    return (
        <div className="showDetails container">
            <h2 className="detailsTitle">{title}</h2>
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md-6">
                    <p className="summaryText">{summary}</p>
                    <hr />
                    <div className="info">
                        <p>
                            Type : <span>{type}</span>
                        </p>
                        <p>
                            Language : <span>{language}</span>
                        </p>
                        <p>
                            Genre :{' '}
                            <span>
                                {genre.map((item) => (
                                    <Pill
                                        text={item}
                                        color="#532EE3"
                                        textColor="white"
                                    />
                                ))}
                            </span>
                        </p>
                        <p>
                            Status : <span>{status}</span>
                        </p>
                        <p>
                            Runtime : <span>{runtime} minutes</span>
                        </p>
                        <p>
                            Last Premiered : <span>{lastPremiered}</span>
                        </p>
                        <p>
                            Schedule : <span>{JSON.stringify(schedule)}</span>
                        </p>
                        {rating ? (
                            <p>
                                Rating : <span>{rating}</span>
                            </p>
                        ) : null}
                        <p>
                            Network : <span>{network}</span>
                        </p>
                    </div>
                </div>
                <div
                    className="col-md-6"
                    style={{ display: 'flex', justifyContent: 'center' }}
                >
                    <div>
                        <img src={image} className="image" />
                        <div className="buttonContainer">
                            <div>
                                <button
                                    className="btn btn-primary"
                                    type="button"
                                    onClick={openUrl}
                                >
                                    Visit Official Site
                                </button>
                            </div>
                            <div>
                                {!isFavorite ? (
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={() => addFavorite(id, 'add')}
                                    >
                                        Make Favorite
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-primary"
                                        type="button"
                                        onClick={() =>
                                            removeFavorite(id, 'remove')
                                        }
                                    >
                                        Remove Favorite
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

ShowDetails.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    type: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    runtime: PropTypes.string.isRequired,
    lastPremiered: PropTypes.string.isRequired,
    schedule: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    network: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
    addFavorite: PropTypes.func.isRequired,
    removeFavorite: PropTypes.func.isRequired
};

export default ShowDetails;
