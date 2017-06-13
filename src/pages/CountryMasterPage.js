import React from 'react';
import PropTypes from 'prop-types';

import CountryListItem from '../components/CountryListItem';

const CountryMasterPage = ({ countries }) => (
  <div className="list-group">
    {countries.map(country => (
      <CountryListItem
        key={country.name}
        title={country.name}
        icon={country.flag}
        subTitle={country.region}
      />
      )
    )}
  </div>
);

CountryMasterPage.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CountryMasterPage;
