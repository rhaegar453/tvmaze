import React from 'react';
import PropTypes from 'prop-types';
import './ShowTile.css';
import Pill from '../Pill/Pill';

const ShowTile = ({ name, image, genres, status, type, summary, language }) => {
    const manipulateTex = summary.length > 80 ? summary.slice(0, 80) : summary;
    return (
        <div className="showTile">
            <div>
                <img src={image} className="image" />
            </div>
            <div className="statusButton">
                <Pill text={status} color="#36EBBF" textColor="#3F3D56" />
            </div>
            <div className="boxContainer">
                <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <p className="showTitle">{name}</p>
                    <div>
                        <Pill
                            text={type}
                            color="#FB9E13"
                            style={{ marginLeft: 10 }}
                        />
                    </div>
                </div>
                <p className="showSummary">{manipulateTex}</p>
                <p className="showLanguage">{language}</p>
                {genres.map((item) => (
                    <Pill text={item} color="#532EE3" textColor="white" />
                ))}
            </div>
        </div>
    );
};

ShowTile.propTypes = {
    image: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    language: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};

export default ShowTile;
