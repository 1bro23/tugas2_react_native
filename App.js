import React,{Component} from "react";
import {View,Text} from "react-native";
import Barang from "./Component/Barang";

export default class app extends Component{
  render(){
    return(
      <View>
        <Text>TUGAS 2 REACT NATIVE</Text>
        <Barang namabelanja="================ Total Belanja ================"/>
      </View>
      )
  }
}
