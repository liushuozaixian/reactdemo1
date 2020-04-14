import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.dealFilterTextChange = this.dealFilterTextChange.bind(this)
  // }
  render() {
    return (
      <div>
        <input type="text" placeholder="Search..." value={this.props.filterText} onChange={this.dealFilterTextChange} />
        <input type="checkbox" checked={this.props.inStockOnly} onChange={this.dealInStockOnlyChange} />是否只查看有货商品
      </div>
    )
  }
  dealFilterTextChange = (event) => {
    console.log('dealFilterTextChange')
    console.log(event.target.value)
    this.props.onFilterTextChange(event.target.value)
  }
  dealInStockOnlyChange = (event) => {
    // console.log('dealInStockOnlyChange')
    // console.log(event)
    event.persist()
    console.log(event)
    console.log(event.target)
    this.props.onInStockOnlyChange(event.target.checked)
  }

}

export default SearchBar;