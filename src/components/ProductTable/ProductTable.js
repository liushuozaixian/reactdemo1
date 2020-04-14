import React from 'react';
import './ProductTable.css';
import ProductCategoryRow from '../ProductCategoryRow/ProductCategoryRow'
import ProductRow from '../ProductRow/ProductRow'
class ProductTable extends React.Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    var filterText = this.props.filterText;
    var inStockOnly = this.props.inStockOnly;
    var middleArr = []
    var lastKine = null
    this.props.data.forEach((product, index) => {
      if (product.name.indexOf(filterText) === -1) {
        return
      }
      if (inStockOnly && !product.stocked) {
        return
      }
      if (product.category !== lastKine) {
        middleArr.push(<ProductCategoryRow key={product.name + '1'} category={product.category}></ProductCategoryRow>)
      }
      middleArr.push(<ProductRow key={product.name} product={product}></ProductRow>)
      lastKine = product.category
    })
    console.log('DSGGG:', middleArr)
    return (
      <div>
        <div className='title'>
          <div>种类</div>
          <div>价格</div>
        </div>
        {middleArr}
      </div>
    )
  }

}

export default ProductTable;