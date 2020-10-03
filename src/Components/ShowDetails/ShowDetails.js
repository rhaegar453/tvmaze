import React from 'react';
import PropTypes from 'prop-types';
import Pill from '../Pill/Pill';
import './ShowDetails.css';

const ShowDetails = ({
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
    network
}) => (
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
                    <p>
                        Rating : <span>{rating}</span>
                    </p>
                    <p>
                        Network : <span>{network}</span>
                    </p>
                </div>
            </div>
            <div
                className="col-md-6"
                style={{ display: 'flex', justifyContent: 'center' }}
            >
                <img src={image} className="image" />
            </div>
        </div>

        <div className="buttonContainer">
            <div>
                <button className="btn btn-primary" type="button">
                    Visit Official Site
                </button>
            </div>
            <div>
                <button className="btn btn-primary" type="button">
                    Make Favorite
                </button>
            </div>
        </div>
    </div>
);

ShowDetails.propTypes = {};

export default ShowDetails;
