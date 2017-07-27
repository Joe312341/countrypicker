/**
 * filters an array of country objects by a search string
 * ignores case
 * @param {Object[]} arrayOfCountries
 * @param {string} searchFieldInput
 * @return {Boolean}
 */
export const filterCountries = (arrayOfCountries, searchFieldInput) => {
  return arrayOfCountries.filter((country) => {
    if (searchFieldInput === '' || country.name.toLowerCase().includes(searchFieldInput)) {
      return true;
    }
    return false;
  });
};

/**
 * checks if an object is empty
 * @param {Object} object
 * @return {boolean}
 */
export const objectIsEmpty = (object) => {
  return Object.keys(object).length === 0 && object.constructor === Object;
};
