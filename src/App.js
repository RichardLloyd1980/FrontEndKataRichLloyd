import React, {Component} from 'react';
import logo from './logo.svg';
import HotelList from './HotelList/HotelList.js';
import FacilitiesFilter from './FacilitiesFilter/FacilitiesFilter.js';
import Sort,
{
    defaultSort,
    recommendedSortType,
    highToLowStarPredicate,
    lowToHighStarPredicate,
    ascending as ascendingSortType
} from './Sort/Sort.js';
import './App.css';

const hotels = [
    {
        "Name": "hotelone",
        "StarRating": 4,
        "Facilities": ["car park", "pool"]
    },
    {
        "Name": "hoteltwo",
        "StarRating": 5,
        "Facilities": ["car park", "gym"]
    },
    {
        "Name": "hotelthree",
        "StarRating": 1,
        "Facilities": []
    }
];

class App extends Component {

    constructor(props) {
        super(props);

        const facilityFilters = {};
        Object.values(hotels).forEach((hotel) => {
            hotel.Facilities.forEach((facility) => {
                facilityFilters[facility] = {
                    description: facility,
                    count: facilityFilters[facility] ? facilityFilters[facility].count + 1 : 1,
                    checked: false
                };
            });
        });

        this.state = {
            facilityFilters,
            sortData: defaultSort
        };

        this.updateFilters = this.updateFilters.bind(this);
        this.updateSort = this.updateSort.bind(this);
        this.filterHotels = this.filterHotels.bind(this);
        this.sortHotels = this.sortHotels.bind(this);
        this.hasFilters = this.hasFilters.bind(this);
    }

    updateFilters(facilityFilters) {
        this.setState({
            ...this.state,
            facilityFilters
        });
    }

    updateSort(sortData) {
        this.setState({
            ...this.state,
            sortData
        });
    }

    hasFilters() {
        return !!this.state.facilityFilters && !!Object.values(this.state.facilityFilters).find((filter) => {
            return filter.checked === true;
        });
    }

    filterHotels() {
        const clonedHotels = hotels.slice();
        if (this.hasFilters() === false) {
            return clonedHotels;
        }

        return clonedHotels.filter((hotel) => {
            const foundFacility = hotel.Facilities.find((facility) => {
                return this.state.facilityFilters[facility].checked === true;
            });
            return !!foundFacility;
        });
    }

    sortHotels(hotels) {
        if (!this.state.sortData || this.state.sortData.type === recommendedSortType) {
            return hotels;
        }
        hotels.sort(this.state.sortData.direction === ascendingSortType ?
            lowToHighStarPredicate :
            highToLowStarPredicate);
        return hotels;
    }

    render() {
        const {facilityFilters} = this.state;

        const filteredHotels = this.filterHotels();
        const renderedHotels = this.sortHotels(filteredHotels);

        return (
            <div className="app">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                </header>
                <div className="app-content">
                    <div className="app-row">
                        <div className="app-left">
                            <h2 className="filters">Filters</h2>
                            <FacilitiesFilter facilityFilters={facilityFilters}
                                              onFilterSelected={this.updateFilters}/>
                        </div>
                        <div>
                            <Sort sortData={this.state.sortData} onSelectSort={this.updateSort}/>
                            <HotelList hotels={renderedHotels}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;