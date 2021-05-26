import React from 'react';
import { connect } from 'react-redux';
import { setFastenerTypeFilter, setSortBy } from '../actions/filters';

class FastenerFilters extends React.Component {

    onFastenerTypeChange = (e) => {
        const fastenerType = e.target.value;
        this.props.setFastenerTypeFilter(fastenerType);
    };

    onSortChange = (e) => {
        const sortBy = e.target.value;
        this.props.setSortBy(sortBy);
    };

    render() {
        return (
            <div className="inputs-group">
                <select
                    className="select"
                    value={this.props.filters.fastenerType}
                    onChange={this.onFastenerTypeChange}
                >
                    <option value="" defaultValue>
                        --- Filter by ---
                    </option>
                    <option value="screw">Screw</option>
                    <option value="pin">Pin</option>
                </select>

                <select
                    className="select"
                    value={this.props.filters.sortBy}
                    onChange={this.onSortChange}
                >
                    <option value="" defaultValue>
                        --- Sort by ---
                    </option>
                    <option value="size">Size</option>
                    <option value="appearance">Appearance</option>
                    <option value="material">Material</option>
                </select>
            </div>
        )

    }
}

const mapStateToProps = (state) => (
    {
        filters: state.filters
    }
);

const mapDispatchToProps = (dispatch) => ({
    setFastenerTypeFilter: (fastenerType) => dispatch(setFastenerTypeFilter(fastenerType)),
    setSortBy: (sortBy) => dispatch(setSortBy(sortBy))
});

export default connect(mapStateToProps, mapDispatchToProps)(FastenerFilters);