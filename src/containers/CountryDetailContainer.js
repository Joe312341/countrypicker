import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// components / utils
import CountryDetailPage from '../pages/CountryDetailPage';
import { countryPropType } from '../utils/customPropTypes';
import { objectIsEmpty } from '../utils/helperFunctions';

class CountryDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        {
          objectIsEmpty(this.props.selectedCountry) ?
            <div>Select a country to get more information!</div> :
            <CountryDetailPage selectedCountry={this.props.selectedCountry} />
        }
      </div>
    );
  }
}

CountryDetailContainer.propTypes = {
  selectedCountry: PropTypes.oneOfType([
    countryPropType,
    PropTypes.object
  ]).isRequired
};

const mapStateToProps = state => ({
  selectedCountry: state.countryReducer.selectedCountry
});

export default connect(mapStateToProps, null)(CountryDetailContainer);
