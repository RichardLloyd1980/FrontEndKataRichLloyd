import React, {Component} from 'react';
import './Sort.css';

export const descending = 'descending';
export const ascending = 'ascending';

export const starRatingSortType = 'starRating';
export const recommendedSortType = 'recommended';

export const defaultSort = {
    type: recommendedSortType,
    direction: descending
};

export const highToLowStarPredicate = (hotelA, hotelB) => {
    return hotelA.StarRating < hotelB.StarRating;
};

export const lowToHighStarPredicate = (hotelA, hotelB) => {
    return hotelA.StarRating > hotelB.StarRating;
};

export

class Rating extends Component {
    constructor(props) {
        super(props);

        this.sortByRecommended = this.sortByRecommended.bind(this);
        this.sortByStarRating = this.sortByStarRating.bind(this);
        this.createLowHighSpan = this.createLowHighSpan.bind(this);
        this.getStarRatingSortState = this.getStarRatingSortState.bind(this);
    }

    sortByRecommended() {
        const { onSelectSort } = this.props;
        if(onSelectSort) {
            onSelectSort({
                type: recommendedSortType,
                direction: descending
            })
        }
    }

    getStarRatingSortState () {
        const { type, direction } = this.props.sortData;

        if (type !== starRatingSortType) {
            return {
                type: starRatingSortType,
                direction: descending
            };
        }

        if (direction === descending) {
            return {
                type: starRatingSortType,
                direction: ascending
            };
        }

        return defaultSort;
    }

    sortByStarRating() {
        const { onSelectSort } = this.props;
        if(onSelectSort) {
            onSelectSort(this.getStarRatingSortState())
        }
    }

    createLowHighSpan (sortData) {
        if (!sortData || sortData.type !== starRatingSortType) {
            return null;
        }

        return sortData.direction === descending ?
            <span> - High to low</span> :
            <span> - Low to high</span>
    }

    render() {
        const { sortData } = this.props;

        return (
            <div className="sort-bar">
                <h2 className="sort-header">Sort By:</h2>
                <button onClick={this.sortByRecommended}>
                    <span>Recommended</span>
                </button>
                <button onClick={this.sortByStarRating}>
                    <span>Star rating</span>
                    {this.createLowHighSpan(sortData)}
                </button>
            </div>
        );
    }
}

export default Rating;
