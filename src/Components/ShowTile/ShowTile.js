import React from 'react';
import PropTypes from 'prop-types';
import './ShowTile.css';
import * as _ from 'lodash';

const ShowTile = ({}) => (
    <div className="showTile">
        <div>
            <img
                src="https://live.staticflickr.com/5308/5560324310_250b2236c9_z.jpg"
                style={{
                    maxWidth: 300,
                    borderRadius: 20,
                    maxHeight: 300
                }}
            />
        </div>
        <div className="boxContainer">
            <p className="showTitle">Show Name</p>
            <p className="showSummary">
                Here is where we'll be having the summary of the tv show
            </p>
            <p className="showLanguage">English</p>
            {_.times(3, (i) => (
                <p style={{ display: 'inline-block' }}>English{i}</p>
            ))}
        </div>
    </div>
);

ShowTile.propTypes = {};

export default ShowTile;
