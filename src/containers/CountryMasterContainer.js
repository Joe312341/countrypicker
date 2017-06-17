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
  componentWillMount() {
    this.props.actions.requestAllCountries();
  }
  render() {
    return (
      <div>
        { this.props.countries.length > 0 ?
          <CountryMasterPage
            countries={this.props.countries}
            selectCountry={this.props.actions.selectCountry}
          />
          :
          <div>Loading Countries...</div>
        }
      </div>
    );
  }
}

CountryMasterContainer.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  countries: state.countryReducer.countries
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, actions), dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(CountryMasterContainer);
