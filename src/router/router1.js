import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Page1 from '../pages/Page1/Page1'
import Page2 from '../pages/Page2/Page2'
import FilterableProductTable from '../pages/FilterableProductTable/FilterableProductTable'
class Router1 extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/page3" render={(props)=> {document.title = "what我是商品清单列表页"; return (<FilterableProductTable></FilterableProductTable>)}}></Route>
          <Route path="/page2" component={Page2}></Route>
          <Route path="/" component={Page1}></Route>
        </Switch>
      </Router>
    )
  }
}

export default Router1;
