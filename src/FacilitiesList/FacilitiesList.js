import React, {Component} from 'react';
import './FacilitiesList.css';

class FacilitiesList extends Component {

    render() {
        const { facilities } = this.props;

        if (!facilities || facilities.length <= 0) {
            return null;
        }

        const renderedFacilities = facilities.map((facility, key) =>
            <li key={key} className="facilities-item">{facility}</li>
        );
        return (
            <div className="facilities-list">
                <h5 className="facilities-list-title">Facilities</h5>
                <ul className="facilities-items">
                    {renderedFacilities}
                </ul>
            </div>
        );
    }
}

export default FacilitiesList;
