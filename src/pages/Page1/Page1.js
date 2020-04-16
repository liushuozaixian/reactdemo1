import React from 'react';
import { Link } from 'react-router-dom';
import './Page1.css';
class Page1 extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     date: [
  //       { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
  //       { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
  //       { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
  //       { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
  //       { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
  //       { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
  //     ],
  //     filterText: 'oo',
  //     inStockOnly: false
  //   }
  // }
  render() {
    return (
      <div>
        我是page1页面
       <div>
          <Link to="/page2">去往page2页面</Link>
        </div>
        <div>
          <Link to="/page3">去往page3页面</Link>
        </div>
        <div className="line"></div>
        <div>
          <Link to="/page1/child1">展示此页面的child1</Link>
        </div>
        <div>
          <Link to="/page1/child2">展示此页面的child2</Link>
        </div>
        <div className="line"></div>
      </div>
    )
  }

}

export default Page1;