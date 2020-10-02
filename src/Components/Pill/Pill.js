import React from 'react';
import PropTypes from 'prop-types';
import './Pill.css';

const Pill = ({ text, color, textColor, style }) => (
    <div className="pill" style={{ backgroundColor: color, ...style }}>
        <span style={{ color: textColor }}>{text}</span>
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

export default Pill;
