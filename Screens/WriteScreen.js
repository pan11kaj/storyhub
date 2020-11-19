import React from 'react';
import { StyleSheet, Text, View,TextInput ,TouchableOpacity} from 'react-native';
import db from '../CONFIG';
import firebase from 'firebase';
export default class WriteScreen extends React.Component{
    constructor(){
        super();
        this.state={
            storyTitle :'',writting:'',author:''
        }
    }
handleWriting = ()=>{
    var writes
   db.collection("Writers").doc(this.state.storyTitle).get()
   .then((doc)=>{
      console.log(doc.data())
   })
}


 render(){
     return(
         <View>
         <TextInput
         style={style.inputs}
         placeholder="Story Title"
         value={this.state.storyTitle}
         />
    <TextInput
         style={style.inputs}
         placeholder="Author"
         value={this.state.author}
         />
             <TextInput
         style={style.input2}
         placeholder="Write your stroy"
         value={this.state.writting}
         />
         <TouchableOpacity style={{backgroundColor:'red',width:80,justifyContent:'center'}}><Text style={{color:'white',textAlign:'center'}}>Submit</Text></TouchableOpacity>
         </View>
     )
 }   
}
const style = StyleSheet.create({
  inputs:{
 justifyContent:'center',
width:140,
borderWidth:2,borderColor:'blue'
  },
  input2:{
    justifyContent:'center',
    width:100,
    height:200,
    borderWidth:2
  }  
})