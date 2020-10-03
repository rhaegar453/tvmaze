/* eslint-disable operator-linebreak */
import React from 'react';
import PropTypes from 'prop-types';
import './FavoriteItem.css';
import Pill from '../Pill/Pill';

const FavoriteItem = ({
    title,
    type,
    removeFavorite,
    summary,
    genres,
    image,
    id
}) => {
    console.log(image);
    const transformed =
        summary.length > 200 ? `${summary.slice(0, 200)}...` : summary;
    return (
        <div className="favoriteItem centeredCss">
            <div className="col-md-9" style={{ display: 'inline-block' }}>
                <h4 style={{ display: 'flex', alignItems: 'center' }}>
                    {title}
                    <Pill
                        text={type}
                        style={{ marginLeft: 20 }}
                        color="#FB9E13"
                    />
                </h4>
                <p className="summaryPara">{transformed}</p>
                <div
                    className="row "
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        paddingLeft: 20
                    }}
                >
                    <div className="genres">
                        {genres.map((item) => (
                            <Pill text={item} color="#532EE3" />
                        ))}
                    </div>
                    <div style={{ marginTop: 5 }}>
                        <button
                            className="btn-remove btn"
                            type="button"
                            onClick={() => removeFavorite(id)}
                        >
                            Remove Favorite
                        </button>
                    </div>
                </div>
            </div>
            <div className="col-md-3" style={{ display: 'inline-block' }}>
                <div className="centeredCss">
                    <img src={image} className="favoriteImage" />
                </div>
            </div>
        </div>
    );
};

FavoriteItem.propTypes = {
    title: PropTypes.string,
    type: PropTypes.string,
    removeFavorite: PropTypes.string,
    summary: PropTypes.string,
    genres: PropTypes.array,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
};

FavoriteItem.defaultProps = {
    title: '',
    type: '',
    summary: '',
    genres: [],
    removeFavorite: () => console.log('Clicked on remove favorites')
};

export default FavoriteItem;
