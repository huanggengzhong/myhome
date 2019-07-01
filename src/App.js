import React, { Component } from 'react'
// 导入路由

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter,
  Switch
} from 'react-router-dom'

import './App.css'

import Login from './Login'

import axios from 'axios'
import Main from "./modules/main"

// axios拦截器的使用
//请求前的拦截器
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

// 请求后的拦截器
axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    // return response;
    return response.data //这里我加了data,这样可以直接可以省略一层回来的data.
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error)
  }
)



class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route  path="/" exact component={Login} />
          <Route path="/home" component={Main} />
          <Route path="/show" component={Show} />
          <Redirect to='/'/>
        </Switch>
      </Router>
    )
  }
}

// const Login=()=>{
//   return(
//     <div>Login</div>
//   ) 
// }
// const Home=()=>{
//   return (
//     <div>
//       Home
//     </div>
//   )
// }
const Show =()=>{
  return (
    <div>SHow</div>
  )
}
export default App
