import React from 'react';
import { connect } from 'react-redux';

// components / utils
import CountryDetailPage from '../pages/CountryDetailPage';
import { countryPropType } from '../utils/customPropTypes';

class CountryDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <CountryDetailPage selectedCountry={this.props.selectedCountry} />
    );
  }
}

CountryDetailContainer.propTypes = {
  selectedCountry: countryPropType.isRequired
};

const mapStateToProps = state => ({
  selectedCountry: state.countryReducer.selectedCountry
});

export default connect(mapStateToProps, null)(CountryDetailContainer);
