import React from 'react';
import PropTypes from 'prop-types';

import CountryListItem from '../components/CountryListItem';

const CountryMasterPage = ({
  countries, selectCountry, activeCountryLI, searchFieldInput,
  changeSearchFieldInput, setActiveCountryListItem }) => (
    <div>
      <div className="input-group">
        <span className="input-group-btn">
          <button className="btn btn-default" type="button">Go!</button>
        </span>
        <input
          type="text"
          className="form-control"
          value={searchFieldInput}
          placeholder="client-search for countries"
          onChange={e => changeSearchFieldInput(e.target.value)}
        />
      </div>
      { countries.length > 0 ?
        <div className="list-group list-scrollable">
          {countries.map(country => (
            <CountryListItem
              key={country.name}
              title={country.name}
              subTitle={country.region}
              active={activeCountryLI === country.name}
              handleOnClick={
                () => {
                  selectCountry(country.name);
                  setActiveCountryListItem(country.name);
                }}
            />
            )
          )}
        </div> :
        <div>No Countries match the search :(</div>
      }
    </div>
);

CountryMasterPage.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectCountry: PropTypes.func.isRequired,
  searchFieldInput: PropTypes.string.isRequired,
  changeSearchFieldInput: PropTypes.func.isRequired,
  activeCountryLI: PropTypes.string.isRequired,
  setActiveCountryListItem: PropTypes.func.isRequired
};

export default CountryMasterPage;
