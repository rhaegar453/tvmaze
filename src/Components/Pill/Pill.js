import React from 'react';
import PropTypes from 'prop-types';
import './Pill.css';
import { pure } from 'recompose';

const Pill = ({ text, color, textColor = 'white', style }) => (
    <div className="pill" style={{ backgroundColor: color, ...style }}>
        <div>
            <span style={{ color: textColor }}>{text}</span>
        </div>
    </div>
);

Pill.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    style: PropTypes.object
};

Pill.defaultProps = {
    textColor: 'white',
    style: {}
};

export default pure(Pill);
