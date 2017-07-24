export const filterCountries = (arrayOfCountries, searchFieldInput) => {
  return arrayOfCountries.filter((country) => {
    if (searchFieldInput === '' || country.name.toLowerCase().includes(searchFieldInput)) {
      return true;
    }
    return false;
  });
};

export const objectIsEmpty = (object) => {
  return Object.keys(object).length === 0 && object.constructor === Object;
};
