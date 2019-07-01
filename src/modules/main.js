import React, { Component } from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Grid,Icon} from 'semantic-ui-react'
import './main.css'
import {
  Route,
  Link
} from 'react-router-dom';

import Home from './home/home.js';
import Chat from './chat/chat.js';
import Info from './info/info.js';
import My from './my/my.js';

//声明一个Menu组件
class Menu extends Component{
  render(){
    const {to,current,menuName,iconName}=this.props
    return (
      <Route 
      path={to}
      exact={current}
      children={({ match }) => (
       
         <Link to={to}>
        <div className={`placeholder ${match?'active':''}`}>
        <Icon name={iconName}/>
          <div>{menuName}</div>
        </div>
        </Link>  
      )}
      /> 
    )
  }

}

// const Home=function(){
//   return <div>首页</div>
// }
// const Info=function(){
//   return <div>资讯</div>
// }
// const Chat=function(){
//   return <div>聊天</div>
// }
// const My=function(){
//   return <div>我的</div>
// }

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div>
        <div className="main-content">
       
        <Route exact path="/home" component={Home} />
        <Route path="/home/info" component={Info} />
        <Route path="/home/chat" component={Chat} />
        <Route path="/home/my" component={My} />
       
        </div>
        <div className="main-menu">
          <Grid centered padded>
            <Grid.Row columns={4} divided>
            
              <Grid.Column>
              <Menu to='/home' current={true} menuName="主页" iconName='user secret'></Menu>
              
              </Grid.Column>
              <Grid.Column>
              <Menu to='/home/info' menuName="资讯" iconName='window restore'></Menu>
                
              </Grid.Column>
              <Grid.Column>
              <Menu to='/home/chat' menuName="微聊" iconName='microchip'></Menu>
                
              </Grid.Column>
              <Grid.Column>
              <Menu to='/home/my' menuName="我的" iconName='window maximize'></Menu>
                
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Main
