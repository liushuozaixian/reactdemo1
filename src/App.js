import React from 'react';
import './App.css';
import FilterableProductTable from './pages/FilterableProductTable/FilterableProductTable.js'
class App extends React.Component {
  render() {
    return (
      <div>
        <FilterableProductTable />
      </div>
    );
  }
}


export default App;
