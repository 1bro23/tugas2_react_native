import React, {Component} from "react";
import {View,Text,TextInput} from "react-native";

export default class Barang extends Component{
  constructor(props){
    super(props)
    this.state={
      state1:"",
      state2:""
    }
  };
  fungsi1=(event)=>{return(this.setState({state1:event}))};
  fungsi2=(event)=>{return(this.setState({state2:event}))};
  render(){
    return(
      <View>
        <TextInput placeholder="Masukkan Nama Barang" onChangeText={this.fungsi1} value={this.state.state1} />
        <TextInput placeholder="Masukkan Jumlah" value={this.state.state2} onChangeText={this.fungsi2} keyboardType="numeric"/>
        <Text>{this.props.namabelanja}</Text>
        <Text>Nama Barang : {this.state.state1}</Text>
        <Text>Jumlah Barang : {this.state.state2}</Text>
      </View>
    )
  }
}
