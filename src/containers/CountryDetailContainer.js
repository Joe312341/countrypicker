import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// components / actions / utils
import CountryDetailPage from '../pages/CountryDetailPage';
import * as actions from '../actions';
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, actions), dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(CountryDetailContainer);
