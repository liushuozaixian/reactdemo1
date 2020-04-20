import React from 'react';
import './Page2RouterCom.css';
import ChildCommon from '../../components/ChildCommon/ChildCommon'
import {
  Route,
  Link
} from 'react-router-dom'
class Page2RouterCom extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     dataDemo: ''
  //   }
  // }
  render() {
    console.log('DSGGGGGGGG')
    console.log(this.props.parentPath)
    return (
      <div>
        <div className='title'>
          我是page2的RouterCom组件
        </div>
        <div>
          <Link to={`${this.props.parentPath}/child1`}>page2的child1</Link>
        </div>
        <div>
          <Link to={`${this.props.parentPath}/child2`}>page2的child2</Link>
        </div>
        <div className="line"></div>
        <Route path={`${this.props.parentPath}/:child`} render={(props)=> {
          console.log('?????????????????')
          console.log(props)
          return (
            <ChildCommon parentPath={this.props.parentPath} path={props.match.url}></ChildCommon>
          )
        }}></Route>
      </div>
    )
  }

}

export default Page2RouterCom;