/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ShowTile.css';
import { pure } from 'recompose';
import Pill from '../Pill/Pill';
import RoundButton from '../RoundButton/RoundButton';
import { images } from '../../utils/images';
import { ModalButton } from '../Modal/Modal';

const HoveredMenu = ({ onClick }) => (
    <div className="hoverMenu">
        <div>
            <ModalButton
                className="btn btn-primary"
                modalId="modal"
                onClick={onClick}
            >
                View Details
            </ModalButton>
        </div>
    </div>
);

HoveredMenu.propTypes = {
    onClick: PropTypes.func.isRequired
};

const ShowTile = ({
    id,
    name,
    image,
    genres,
    status,
    type,
    summary,
    language,
    makeFavorite,
    removeFavorite,
    isFavorite,
    openDetails
}) => {
    const manipulateTex = summary.length > 80 ? summary.slice(0, 80) : summary;
    const [hasHovered, setHovered] = useState(false);
    return (
        <div
            className="showTile"
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div style={{ position: 'absolute', left: 5, top: 5, zIndex: 800 }}>
                {!isFavorite ? (
                    <RoundButton
                        icon={images.icons.Heart}
                        color="#22B893"
                        onClick={() => makeFavorite(id)}
                    />
                ) : (
                    <RoundButton
                        icon={images.icons.Unfavorite}
                        color="#E37474"
                        onClick={() => removeFavorite(id)}
                    />
                )}
            </div>
            <div style={{ maxHeight: 300, overflow: 'hidden' }}>
                <img src={image} className="image" />
                {hasHovered ? (
                    <HoveredMenu onClick={() => openDetails(id)} />
                ) : null}
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
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    makeFavorite: PropTypes.func.isRequired,
    removeFavorite: PropTypes.func.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    openDetails: PropTypes.func.isRequired
};

export default pure(ShowTile);
