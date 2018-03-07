import React, {Component} from 'react';
import './FacilitiesFilter.css';

export class FacilitiesListItem extends Component {
    constructor(props) {
        super(props);

        this.onChangeFilter = this.onChangeFilter.bind(this);
    }

    onChangeFilter(e) {
        const {facilityFilter, onChange} = this.props;
        if (onChange) {
            onChange({
                ...facilityFilter,
                checked: e.target.checked
            })
        }
    }

    render() {
        const {facilityFilter, id} = this.props;

        return (
            <li>
                <label htmlFor={'filter-' + id}>
                    <span>{facilityFilter.description}</span> ({facilityFilter.count})
                </label>
                <input type="checkbox" name="fac-featureFilter-9" id={'filter-' + id}
                       className="filter-input" onChange={this.onChangeFilter}/>
            </li>
        );
    }
}

class FacilitiesList extends Component {
    constructor(props) {
        super(props);

        this.onFilterSelected = this.onFilterSelected.bind(this);
    }

    onFilterSelected(updatedFilter) {
        const {onFilterSelected, facilityFilters} = this.props;
        if (onFilterSelected) {
            onFilterSelected({
                ...facilityFilters,
                [updatedFilter.description]: updatedFilter
            });
        }
    };

    render() {
        const {facilityFilters} = this.props;

        if (!facilityFilters || Object.values(facilityFilters).length <= 0) {
            return null;
        }

        const renderedFacilityFilters = Object.keys(facilityFilters).map((facilityFilterKey) => {
            return <FacilitiesListItem id={facilityFilterKey}
                                       key={facilityFilterKey + '-filter'}
                                       facilityFilter={facilityFilters[facilityFilterKey]}
                                       onChange={this.onFilterSelected}/>
        });
        return (
            <section className="facilities-filter">
                <h3>Facilities</h3>
                <div className="filter__content fac-filters__content show">
                    <ul className="filter-items">
                        {renderedFacilityFilters}
                    </ul>
                </div>
            </section>
        );
    }
}

export default FacilitiesList;
