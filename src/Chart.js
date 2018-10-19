import React, {Component} from 'react';
import {Radar} from 'react-chartjs-2';
import PropTypes from 'prop-types'

class Chart extends Component {

    render() {
        return (
            <div className="Chart">
                <Radar data={this.props.data} options={this.props.options} width={300} height={300}/>
            </div>
        );
    }
}

Chart.propTypes = {
    data: PropTypes.object.isRequired,
    options: PropTypes.object.isRequired
};

export default Chart;