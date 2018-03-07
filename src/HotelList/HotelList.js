import React, { Component } from 'react';
import HotelPane from '../HotelPane/HotelPane.js';
import './HotelList.css';

class HotelList extends Component {
    render() {
        const { hotels } = this.props;

        if (!hotels || hotels.length <= 0) {
            return (
                <div className="hotel-list">
                    There were no hotels found matching your criteria, please search again.
                </div>
            );
        }

        const renderedHotels = hotels.map((hotel, key) => {
            return <div key={key} className="hotel-list-item"><HotelPane hotel={hotel}/></div>;
        });

        return (
            <div className="hotel-list">
                {renderedHotels}
            </div>
        );
    }
}

export default HotelList;

