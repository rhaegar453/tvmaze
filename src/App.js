import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import ShowTile from './Components/ShowTile/ShowTile';
import './App.css';
import RoundButton from './Components/RoundButton/RoundButton';
import { images } from './utils/images';

const App = () => {
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState([]);
    useEffect(() => {
        setLoading(true);
        axios.get('http://api.tvmaze.com/shows?page=1').then((data) => {
            console.log(data.data);
            setShows(data.data);
            setLoading(false);
        });
    }, []);
    return (
        <div>
            <div className="container">
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
        </div>
    );
};

App.propTypes = {};

export default App;
