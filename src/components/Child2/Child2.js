import React from 'react';
import './Child2.css';
class Child2 extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     dataDemo: ''
  //   }
  // }
  render() {
    console.log('我是Child2.js')
    console.log(this.props)
    return (
      <div className='title'>
        我是page1的child2
      </div>
    )
  }

}

export default Child2;