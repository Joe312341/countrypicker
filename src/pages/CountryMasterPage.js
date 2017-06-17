import React from 'react';
import PropTypes from 'prop-types';

import CountryListItem from '../components/CountryListItem';

const CountryMasterPage = ({ countries, selectCountry }) => (
  <div className="list-group list-scrollable">
    {countries.map(country => (
      <CountryListItem
        key={country.name}
        title={country.name}
        icon={country.flag}
        subTitle={country.region}
        handleOnClick={() => selectCountry(country.name)}
      />
      )
    )}
  </div>
);

CountryMasterPage.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectCountry: PropTypes.func.isRequired
};

export default CountryMasterPage;
