import React, {Component} from 'react';
import './Rating.css';

export const hotelRatings = [
    'Hovel',
    'Poor',
    'Satisfactory',
    'Good',
    'Very Good',
    'Excellent'
];

class Rating extends Component {
    static getRatingText(rating) {
        if (Number.isInteger(rating) === false) {
            return '';
        }

        if (rating < 0) {
            return hotelRatings[0];
        } else if (rating >= hotelRatings.length) {
            return hotelRatings[hotelRatings.length - 1];
        }

        return hotelRatings[rating];
    }

    render() {
        const {rating} = this.props;
        const numericRating = parseInt(rating, 10);

        const renderedBlobs = [];
        for (let i = 0; i < hotelRatings.length; i++) {
            if (i <= rating) {
                renderedBlobs.push(<li key={i} className="rating-item rating-rated"></li>);
            } else {
                renderedBlobs.push(<li key={i} className="rating-item"></li>);
            }
        }
        return (
            <div className="rating-area">
                <label className="rating-word">{Rating.getRatingText(numericRating)}</label>
                <ul className="rating-icons">
                    {renderedBlobs}
                </ul>
            </div>
        );
    }
}

export default Rating;
