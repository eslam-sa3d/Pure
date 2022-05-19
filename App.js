
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View,FlatList ,SafeAreaView} from 'react-native';
import { container, Container,Root } from 'native-base'
import { createSwitchNavigator, createAppContainer } from "react-navigation";
import {createStackNavigator } from 'react-navigation-stack'
// import { MenuProvider } from 'react-native-popup-menu';

import AsyncStorage from '@react-native-community/async-storage';

import Splash from './src/Splash'
import Login from './src/Login'
import Home from './src/Home'
import Users from './src/Users'
import ChangePass from './src/ChangePass'
import Orders from './src/Orders'
import CreateOrder from './src/CreateOrder'
import Stat from './src/Stat'
import UserInfo from './src/UserInfo'
import Created from './src/Created'
import CreateOrderSec from './src/CreateOrderSec'
import Confirm from './src/Confirm'
import BillInfo from './src/BillInfo'
import OrderDetails from './src/OrderDetails'
import EditOrder from './src/EditOrder'





type Props = {};
class HomeScreen extends Component<Props> {
  async componentDidMount(){
    // console.disableYellowBox = true;
}
  render() {
    return (
      <Container>
         {/* <Text>dfsdfsdffsdfsdf</Text> */}
         <Splash />
         {/* <Login /> */}
        {/* <Home /> */}
        {/* <Users /> */}
        {/* <CreateOrder /> */}
        {/* <CreateOrderSec /> */}
        {/* <ChangePass     /> */}
        {/* <Orders /> */}
        {/* <UserInfo /> */}
        {/* <Stat /> */}
        {/* <EditOrder /> */}
        {/* <Users /> */}
      </Container>
    );
  }
}
const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Login:Login,
  Homee:Home,
  Users:Users,
  ChangePass:ChangePass,
  Orders:Orders,
  UserInfo:UserInfo,
  Stat:Stat,
Created:Created,
CreateOrder:CreateOrder,
CreateOrderSec:CreateOrderSec,
Confirm:Confirm,
EditOrder:EditOrder,
BillInfo:BillInfo,
OrderDetails:OrderDetails,

 


}, {


    defaultNavigationOptions: {
      header: null
    },
  });


const Navigation=createAppContainer(AppNavigator);

export default class App extends Component<Props> {
  render() {
    return (
      // <MenuProvider>
<Root>
  <SafeAreaView style={{backgroundColor:'#062593'}} />
      <Navigation />
      </Root>
// </MenuProvider>
    );
  }
}
