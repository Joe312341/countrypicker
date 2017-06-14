import React from 'react';

// components
import CountryMasterContainer from '../containers/CountryMasterContainer';
import CountryDetailContainer from '../containers/CountryDetailContainer';

const App = () => (
  <div className="container">
    <div className="col-xs-6">
      <CountryMasterContainer />
    </div>
    <div className="col-xs-6">
      <CountryDetailContainer />
    </div>
  </div>


);

export default App;
