import React from 'react';
import './ProductCategoryRow.css';
class ProductCategoryRow extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     dataDemo: ''
  //   }
  // }
  render() {
    return (
      <div className='title'>
        <div>种类是:</div>
        <div>{this.props.category}</div>
      </div>
    )
  }

}

export default ProductCategoryRow;