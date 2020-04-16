import React from 'react';
import './Child1.css';
class Child1 extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     dataDemo: ''
  //   }
  // }
  render() {
    return (
      <div className='title'>
        我是page1的child1
      </div>
    )
  }

}

export default Child1;