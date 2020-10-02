import React from 'react';
import PropTypes from 'prop-types';
import './ShowTile.css';
import * as _ from 'lodash';
import Pill from '../Pill/Pill';

const genres = ['Drama', 'Comedy', 'Family'];

const ShowTile = () => (
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
            <div style={{ display: 'flex' }}>
                <p className="showTitle">Show Name</p>
                <Pill
                    text="Reality"
                    color="#FB9E13"
                    style={{ marginLeft: 10 }}
                />
            </div>
            <p className="showSummary">
                Here is where we'll be having the summary of the tv show
            </p>
            <p className="showLanguage">English</p>
            {genres.map((item) => (
                <Pill text={item} color="#532EE3" />
            ))}
        </div>
    </div>
);

ShowTile.propTypes = {};

export default ShowTile;
