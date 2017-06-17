import React from 'react';
import PropTypes from 'prop-types';

const CountryListItem = ({ title, subTitle, icon, handleOnClick }) => (
  <a href="#" className="list-group-item" onClick={handleOnClick}>
    <h4 className="list-group-item-heading">{title}</h4>
    <p className="list-group-item-text">{subTitle}</p>
  </a>
);

CountryListItem.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  icon: PropTypes.string,
  handleOnClick: PropTypes.func.isRequired
};

CountryListItem.defaultProps = {
  icon: 'default image'
};

export default CountryListItem;
