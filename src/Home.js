import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import {
    Text,
    StyleSheet,
    View,
    FlatList,
    Modal,
    TouchableHighlight,

} from 'react-native';
import api from './services/Api';
import Animal from './Animal';
import { SafeAreaView } from 'react-native-safe-area-context';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            animais: [],
            list: [],
            isVisible: false,
            urlId: '',
            nameCategoria: 'Todos',
            selectIcon: false,
            borderList: false,
            statusProgress: 100
        };
    }

    async componentDidMount(id = this.state.urlId.toString()) {
        let urlFiltro = '/categories/' + id
        const response = await api.get(urlFiltro)

        this.setState({
            animais: response.data,
            list: response.data,
            statusProgress: response.status
        });

    }


    arrumaLista(resposta = this.state.list) {

        if (Array.isArray(resposta)) {
            for (let i = 0; i < resposta.length; i++) {

                return resposta
            }
        } else {
            const list = resposta

            return [list]
        }
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.bloco1}>
                    <Text style={styles.titleCat}>
                        Escolha uma categoria para visualizar
                    </Text>

                    <TouchableHighlight
                        onPress={() => {
                            this.setState({ isVisible: true, selectIcon: true, borderList: true })
                        }}
                        underlayColor={'pink100'}>
                        <View style={this.state.borderList ? styles.botaoList2 : styles.botaoList}>
                            <Text style={styles.textCategoria}>
                                {this.state.nameCategoria}
                            </Text>
                            <Icon
                                name={this.state.selectIcon ? 'angle-up' : 'angle-down'}
                                size={30}
                                color="white"
                            />

                            <Modal
                                animationType={'fade'}
                                transparent={true}
                                visible={this.state.isVisible}
                                onRequestClose={() => {
                                    this.setState({ isVisible: false });
                                }}>


                                <View style={styles.listCategorias}>

                                    <TouchableHighlight
                                        onPress={() => {
                                            this.componentDidMount(''),
                                                this.setState({
                                                    isVisible: false,
                                                    urlId: '',
                                                    nameCategoria: 'Todos',
                                                    selectIcon: false,
                                                    borderList: false
                                                })
                                        }}
                                        underlayColor={'pink100'}>
                                        <Text style={styles.nameList}>Todos</Text>
                                    </TouchableHighlight>
                                    <FlatList
                                        data={this.arrumaLista()}
                                        keyExtractor={item => item.id}
                                        renderItem={({ item }) => (
                                            <TouchableHighlight
                                                onPress={() => {
                                                    this.componentDidMount(item.id);
                                                    this.setState({
                                                        isVisible: false,
                                                        urlId: item.id,
                                                        nameCategoria: item.name,
                                                        selectIcon: false,
                                                        borderList: false
                                                    })
                                                }}
                                                underlayColor={'pink100'}>
                                                <Text style={styles.nameList}>
                                                    {item.name}

                                                </Text>
                                            </TouchableHighlight>
                                        )}></FlatList>
                                </View>
                            </Modal>
                        </View>
                    </TouchableHighlight>
                </View>
                <View style={styles.bloco2}>
                    <Text style={styles.title}>Resultados da pesquisa:</Text>

                    {this.state.statusProgress == 100 ?


                        <View style={styles.circularProgres}>
                            <AnimatedCircularProgress
                                size={200}
                                width={15}
                                fill={this.state.statusProgress}
                                tintColor="#b830d3"
                                backgroundColor="#ffc31e">

                            </AnimatedCircularProgress>
                        </View>
                        :
                        <FlatList
                            data={this.arrumaLista()}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) =>
                                <Animal data={item}></Animal>
                            }></FlatList>}
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fbe8ff',
    },
    bloco1: {
        backgroundColor: '#ffffff',
        height: '20%',
    },
    bloco2: {
        backgroundColor: '#fbe8ff',
        marginBottom: '60%',
    },
    title: {
        fontSize: 20,
        fontWeight: 'arial',
        color: '#b830d3',
        marginHorizontal: '5%',
        marginTop: '5%',
        marginBottom: '2%',
    },
    titleCat: {
        fontSize: 18,
        fontWeight: 'arial',
        color: 'black',
        marginHorizontal: '10%',
        marginTop: '5%',
    },
    image: {
        height: 100,
        width: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    containerAnimal: {
        marginHorizontal: '5%',
        marginVertical: '1%',
        backgroundColor: '#ffffff',
        borderRadius: 10,
        flexDirection: 'row',
    },
    nome: {
        textAlign: 'center',
        color: '#444548',
        fontSize: 14,
        margin: '5%',
    },
    botaoList: {
        height: '50%',
        width: '90%',
        backgroundColor: '#ffc31e',
        margin: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
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
    botaoList2: {
        height: '70%',
        width: '90%',
        backgroundColor: '#ffc31e',
        margin: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        borderTopEndRadius: 30,
        borderTopLeftRadius: 30,
        padding: '5%',
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
    textCategoria: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    listCategorias: {
        marginTop: '40%',
        marginHorizontal: '5%',
        backgroundColor: '#ffc31e',
        borderBottomEndRadius: 30,
        borderBottomLeftRadius: 30,
        paddingHorizontal: '10%',
        paddingVertical: '5%',
        shadowColor: '#ffc31e',
        shadowColor: '#ffc31e',
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,

        elevation: 12,
    },
    nameList: {
        margin: 1,
        borderBottomWidth: 1,
        borderColor: 'white',
        color: 'white',
        fontWeight: '500'

    },
    circularProgres: {
        marginTop: '15%',
        alignItems: 'center'
    }
});

