import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// components / actions / utils
import CountryMasterPage from '../pages/CountryMasterPage';
import * as actions from '../actions';
import { filterCountries } from '../utils/helperFunctions';

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
            countries={filterCountries(this.props.countries, this.props.searchFieldInput)}
            selectCountry={this.props.actions.selectCountry}
            searchFieldInput={this.props.searchFieldInput}
            changeSearchFieldInput={this.props.actions.changeSearchFieldInput}
            activeCountryLI={this.props.activeCountryLI}
            setActiveCountryListItem={this.props.actions.setActiveCountryListItem}
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
  actions: PropTypes.object.isRequired,
  searchFieldInput: PropTypes.string.isRequired,
  activeCountryLI: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  countries: state.countryReducer.countries,
  searchFieldInput: state.countryReducer.searchFieldInput,
  activeCountryLI: state.countryReducer.activeCountryLI
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, actions), dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(CountryMasterContainer);
