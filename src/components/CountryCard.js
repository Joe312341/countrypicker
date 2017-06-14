import React from 'react';
import PropTypes from 'prop-types';
import { currencyPropType, languagePropType } from '../utils/customPropTypes';

const CountryCard = ({ title, subTitle, image, languages, capitalCity, currencies, population }) => (
  <div className="thumbnail row">
    <h2 className="text-center">{title}</h2>
    <img src={image} alt="Country's Flag" className="responsive custom-image" />
    <div className="caption">
      <p className="text-center">
        Region: {subTitle} -- Population: {population} -- Capital: {capitalCity}
      </p>
      <hr />
      <div className="col-xs-6 right-border">
        {languages.map(language => (
          <div key={language.name}>
            Language: {language.name}
          </div>
        ))}
      </div>
      <div className="col-xs-6">
        {currencies.map(currency => (
          <div key={currency.name}>
            code: {currency.code} <br />
            name: {currency.name} <br />
            symbol: {currency.symbol}
          </div>
        ))}
      </div>
    </div>
  </div>
);

CountryCard.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(languagePropType).isRequired,
  capitalCity: PropTypes.string.isRequired,
  currencies: PropTypes.arrayOf(currencyPropType).isRequired,
  population: PropTypes.number.isRequired
};

export default CountryCard;
