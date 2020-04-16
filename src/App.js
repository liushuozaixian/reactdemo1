import React from 'react';
import './App.css';
// import FilterableProductTable from './pages/FilterableProductTable/FilterableProductTable.js'
import Router1 from './router/router1.js'
class App extends React.Component {
  render() {
    return (
      <div>
        {/* <FilterableProductTable /> */}
        {<Router1></Router1>}
      </div>
    );
  }
}


export default App;
