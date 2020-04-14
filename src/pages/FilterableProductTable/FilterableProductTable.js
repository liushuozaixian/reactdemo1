import React from 'react';
import './FilterableProductTable.css';
import SearchBar from '../../components/SearchBar/SearchBar'
import ProductTable from '../../components/ProductTable/ProductTable'
console.log('????')
class FilterableProductTable extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     dataDemo: ''
  //   }
  // }
  constructor(props) {
    super(props);
    this.state = {
      date: [
        { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
        { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
        { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
        { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
        { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
        { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
      ],
      filterText: 'oo',
      inStockOnly: false
    }
  }
  onFilterTextChange=(value) => {
    console.log('???????=======================')
    this.setState(
      {
        filterText: value
      }
    )
  }
  onInStockOnlyChange=(value) => {
    console.log('+__+_+_+_+_+_+_+_+_+')
    console.log(value)
    this.setState({
      inStockOnly: value
    })
  }
  render() {
    return (
      <div>
        <SearchBar onFilterTextChange={this.onFilterTextChange} onInStockOnlyChange={this.onInStockOnlyChange} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}></SearchBar>
        <ProductTable data={this.state.date} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}></ProductTable>
      </div>
    )
  }

}

export default FilterableProductTable;