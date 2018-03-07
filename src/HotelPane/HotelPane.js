import React, {Component} from 'react';
import './HotelPane.css';
import Rating from '../Rating/Rating.js';
import FacilitiesList from '../FacilitiesList/FacilitiesList.js';

class HotelPane extends Component {
    render() {
        const {hotel} = this.props;
        return (
            <div className="hotel-pane">
                <div className="hotel-details">
                    <h4 title={hotel.Name}>{hotel.Name}</h4>
                    <Rating className="hotel-rating" rating={hotel.StarRating}/>
                </div>
                <FacilitiesList facilities={hotel.Facilities}/>
            </div>
        );
    }
}

export default HotelPane;
