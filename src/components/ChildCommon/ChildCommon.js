import React from 'react'
import { Link } from 'react-router-dom'
import './ChildCommon.css'
class ChildCommon extends React.Component {
  render() {
    // parentPath: "/page2"
    // path: "/page2/child1"
    console.log('page2的子组件的子路由')
    console.log(this.props)
    return (
      <div>
        <Link to="/page1">去往page1</Link>
        <div>
          <div className="childcommon">我是page2的子组件的子路由</div>
          <div className="childcommon">我是page2的子组件的子路由我的父路由路径是{this.props.parentPath}</div>
          <div className="childcommon">我是page2的子组件的子路由我的路由路径是{this.props.path}</div>
        </div>
      </div>
    )
  }
}
export default ChildCommon