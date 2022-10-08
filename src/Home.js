import React, { Component, } from "react";
import { 
    Text, 
    StyleSheet,
    View,
    FlatList,
    } 
    from 'react-native'
import api from "./services/Api";
import Animal from "./Animal";

export default class Home extends Component {

    // constructor(props){
    //     super(props);
    //     this.state = {
    //         animais: []
    //     }
    // }

    // async componenteDidMount(){
    //      api.get('/categories')
    //     .then(res => res.json())
    //     .then(res => {
    //         this.setState({
    //             animais: res
                
    //         })
    //     })
        
        
    // }


    state = {
        animais: []
    };

    componentDidMount() {
        fetch('https://619e80d71ac52a0017ba43ea.mockapi.io/api/v1/categories')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    animais: res
                });
            });
    }

    

render(){
     //console.warn(this.state.animais)
    return (
        
        <View style={styles.container}>
            <Text>{this.animais?.name}</Text>
            <FlatList
                data={this.state.animais}
                keyExtractor={item => item.id}
                renderItem={({item}) =><Animal data={item}></Animal>}
            >
            </FlatList>
            
        </View>
    )
}
    
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
       
    }
})