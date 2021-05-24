import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { CSVLink, CSVDownload } from "react-csv";
import FastenerList from './FastenerList';
import aggregateFasteners from '../utils/aggregateFasteners';

const ExpenseDashboardPage = (props) => {

    return (
        <div className="container">

            <div className="double-button">

                <CSVLink
                    className="button"
                    filename={"Spiral-fasteners_list.csv"}
                    data={props.fastenerCsvData}
                    onClick={() => {
                        return props.fastenerCount !== 0;
                        // 👍🏻 False = Stop downloading
                    }}
                >
                    Download as CSV
                </CSVLink>


                <Link to="/create" className="button">
                    Add Fastener
                </Link>

            </div>


            <FastenerList />

        </div>
    )
}

const mapStateToProps = (state) => (
    {
        fastenerCount: state.fasteners,
        fastenerCsvData: aggregateFasteners(state.fasteners)
    }

)

export default connect(mapStateToProps)(ExpenseDashboardPage);