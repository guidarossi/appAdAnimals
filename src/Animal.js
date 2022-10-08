import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import base64 from 'react-native-base64'

export default class Animal extends Component {


    
    render(){

 let url = this.props.data.img
// console.log(typeof url)
        
//             fetch(url)
//                 .then(res => res.status)
//                 .then(res => {
//                     console.log(url)
//                     console.log(typeof res + 'A')
//                     console.log(res)
//                     this.setState({
                        
//                     });
//                 });
        

         
        // console.log(base64.encode(this.props.data.img))
         
         console.log(url)
         console.log( base64.encode(url))
        return(
            <View>
                <Text style={styles.nome}>{this.props.data.name}</Text>
                <Text style={styles.nome}>{this.props.data.id}</Text>

                <Text style={styles.nome}>---------------------------------{`>`}</Text>
                <Text style={styles.nome}>{base64.encode(this.props.data.img)}</Text>
                <Text style={styles.nome}>---------------------------------{`>`}</Text>
                <Text style={styles.nome}>{this.props.data.img}</Text>
                
                <View>
                    <Image
                style={{height: 100, width:100}}
                source={{uri:this.props.data.img}}></Image>
                </View>
            </View>
        )
    }
    
}

const styles = StyleSheet.create({

    container: {

    },
    nome: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    }
})