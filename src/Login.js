import React from 'react'
//
import { withRouter } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import {Form} from 'semantic-ui-react';
import './Login.css';
import axios from 'axios'

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      pwd: ''
    }
  }
  handleUsername = event => {
    this.setState({
      username: event.target.value
    })
  }
  handlePw = event => {
    this.setState({
      pwd: event.target.value
    })
  }
  //  提交按钮事件
  handleSubmit = () => {
    //  使用对象的解构赋值
    const { history } = this.props
    //这解构的意思是将this.props对象里的history属性拿出来,后面可以直接使用
    console.log(this.state.username + this.state.pwd)
    axios
      .get(
        ' https://www.easy-mock.com/mock/5d09c84de0b02639f37c9e4c/example/login'
      )
      .then(res => {
        console.log(res)

        console.log('登录成功')
        //真实项目会返回一个token,返回来后我们用本地会话存储存起来
        history.push('/home')
      })
  }
  render() {
    const {username,pwd} =this.state
    return (
      <div className="login-container">
        <div className="login-title">登录</div>
        <div className="login-form">
        <Form onSubmit={this.handleSubmit}>
            <Form.Input 
              icon='user' 
              required 
              size='big' 
              iconPosition='left' 
              name='username'
              value={username}
              onChange={this.handleUsername}
              placeholder='请输入用户名...' 
            />
            <Form.Input 
              type='password' 
              icon='lock' 
              required 
              size='big' 
              iconPosition='left' 
              name='pwd'
              value={pwd}
              onChange={this.handlePw}
              placeholder='请输入密码...' 
            />
            <Form.Button positive content='登录' />
          </Form>
        </div>
       
      </div>
    )
  }
}

export default withRouter(Login)
