import React from 'react';
import PropTypes from 'prop-types';
import { currencyPropType, languagePropType } from '../utils/customPropTypes';

const CountryCard = ({ title, subTitle, image, languages, capitalCity, currencies, population }) => (
  <div className="thumbnail row card-background">
    <h2 className="text-center">{title}</h2>
    <img src={image} alt="Country's Flag" className="responsive custom-image-size" />
    <div className="caption">
      <p className="text-center">
        Region: {subTitle} -- Population: {population} -- Capital: {capitalCity}
      </p>
      <hr />
      <div className="col-xs-6">
        <p className="text-center">Languages</p>
        {languages.map(language => (
          <div key={language.name}>
            {language.name}
          </div>
        ))}
      </div>
      <div className="col-xs-6 left-border">
        <p className="text-center">Currencies</p>
        {currencies.map((currency, i) => (
          <div key={currency.name}>
            code: {currency.code} <br />
            name: {currency.name} <br />
            symbol: {currency.symbol}
            {i !== currencies.length - 1 && <hr />}
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
