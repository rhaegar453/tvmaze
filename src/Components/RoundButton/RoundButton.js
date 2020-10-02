/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import './RoundButton.css';
import { pure } from 'recompose';

const RoundButton = ({ icon, color, onClick }) => (
    <div
        className="roundButton"
        type="button"
        style={{ backgroundColor: color }}
        onClick={onClick}
    >
        <div className="iconContainer">
            <img src={icon} />
        </div>
    </div>
);

RoundButton.propTypes = {
    icon: PropTypes.any.isRequired,
    color: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
};

export default pure(RoundButton);
