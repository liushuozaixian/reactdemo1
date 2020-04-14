import React from 'react';
import './ProductRow.css';
class ProductRow extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     dataDemo: ''
  //   }
  // }
  render() {
    var product = this.props.product
    var name = product.stocked === true ? <span style={{ color: 'red' }}>
      {product.name}
    </span> : product.name
    return (
      <div className='title'>
        <div>我是:{name}</div>
        <div>{this.props.product.price}</div>
      </div>
    )
  }

}

export default ProductRow;