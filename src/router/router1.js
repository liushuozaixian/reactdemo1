import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Page1 from '../pages/Page1/Page1'
import Page2 from '../pages/Page2/Page2'
import Child1 from '../components/Child1/Child1'
import Child2 from '../components/Child2/Child2'
import FilterableProductTable from '../pages/FilterableProductTable/FilterableProductTable'
class Router1 extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/page3" render={(props) => { document.title = "what我是商品清单列表页"; return (<FilterableProductTable></FilterableProductTable>) }}></Route>
          <Route path="/page2" component={Page2}></Route>
          <Route path="/page1" component={Page1}></Route>
          <Redirect from="/" to="/page1" ></Redirect>
        </Switch>
        <Switch>
          <Route path="/page1/child1" component={Child1}></Route>
          <Route path="/page1/child2" component={Child2}></Route>
          <Redirect from="/page1" to="/page1/child1" ></Redirect>
        </Switch>
      </Router>
    )
  }
}

export default Router1;
