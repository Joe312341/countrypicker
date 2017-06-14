import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CountryMasterPage from '../pages/CountryMasterPage';
import * as actions from '../actions';

class CountryMasterContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <CountryMasterPage countries={this.props.countries} />
    );
  }
}

CountryMasterContainer.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = state => ({
  countries: state.countryReducer.countries
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, actions), dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(CountryMasterContainer);
