import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Modal,
  TouchableHighlight,
  SafeAreaView
} from 'react-native';

export default class Animal extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false, };
  }

  render() {
    url = 'http://loremflickr.com/640/480/';
    nameAnimal = this.props.data.name;
    formatName = nameAnimal.replace(/ /g, ',');

    return (
      <TouchableHighlight
        onPress={() => {
          this.setState({ isVisible: true });
        }}
        underlayColor={'pink100'}>
        <SafeAreaView style={styles.container}>
          <Modal
            animationType={'fade'}
            transparent={true}
            visible={this.state.isVisible}
            onRequestClose={() => {
              this.setState({ isVisible: false });
            }}>
            <View style={styles.modal}>
              <View style={styles.modalContainer}>
                <Image
                  style={styles.imageModal}
                  source={{ uri: url + formatName }}></Image>
                <Text style={styles.nomeModal}>{this.props.data.name}</Text>

                <View>
                  <Text style={styles.textoModal}>Idade: 2</Text>
                  <Text style={styles.textoModal}>
                    Telefone: (48) 9 9999-9999
                  </Text>
                  <Text style={styles.textoModal}>
                    Email: exemplo@gmail.com
                  </Text>
                  <Text style={styles.textoModal}>Descrição:</Text>
                </View>
              </View>

              <View style={styles.modalButtons}>
                <TouchableHighlight
                  onPress={() => {
                    this.setState({ isVisible: false });
                  }}
                  underlayColor={'pink100'}>
                  <View style={styles.button2}>
                    <Text style={styles.buttonText}>ADOTAR</Text>
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => {
                    this.setState({ isVisible: false });
                  }}
                  underlayColor={'pink100'}>
                  <View style={styles.button1}>
                    <Text style={styles.buttonText}>VOLTAR</Text>
                  </View>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>

          <Image style={styles.image} source={{ uri: url + formatName }}></Image>
          <Text style={styles.nome}>{this.props.data.name}</Text>
        </SafeAreaView>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '5%',
    marginVertical: '1%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    flexDirection: 'row',
  },
  nome: {
    textAlign: 'center',
    color: 'black',
    fontSize: 14,
    margin: '3%',
    fontWeight: '500'
  },
  nomeModal: {
    color: 'black',
    fontSize: 16,
    margin: '5%',
    fontWeight: 'bold',
    textAlignVertical: 'top',
  },
  textoModal: {
    color: 'black',
    fontSize: 12,
    margin: '1%',
    fontWeight: '700',
    textAlignVertical: 'top',
  },
  image: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  imageModal: {
    height: '50%',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: '#000',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',

  },
  modalButtons: {
    height: '10%',
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'purple',
    borderBottomEndRadius: 20,
    borderBottomLeftRadius: 20,


  },
  modalContainer: {
    backgroundColor: '#fbe8ff',
    alignItems: 'center',
    height: '60%',
    width: '70%',
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,

  },
  button1: {
    height: 50,
    backgroundColor: 'purple',
    borderBottomEndRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: '15%'
  },
  button2: {
    height: 50,
    backgroundColor: 'purple',
    borderBottomStartRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: '15%'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    margin: '5%',
    fontWeight: 'bold',
    textAlignVertical: 'top',
  },
});

