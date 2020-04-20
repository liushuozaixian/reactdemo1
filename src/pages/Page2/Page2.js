import React from 'react';
import './Page2.css';
import Page2RouterCom from '../../components/Page2RouterCom/Page2RouterCom'
class Page2 extends React.Component {

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
    console.log('我是页面2的测试参数')
    console.log(this.props)
    return (
      <div>
        <div>
          我是page2页面
        </div>
        <div className="line"></div>
        <Page2RouterCom parentPath={this.props.match.url}></Page2RouterCom>
      </div>

    )
  }

}

export default Page2;