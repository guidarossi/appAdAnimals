import React from 'react';
import {
    ImageBackground,
    Text,
    View,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Button,
} from 'react-native';

export default ({ navigation }) => {
    return (
        <SafeAreaView style={styles.principal}>
            <View style={styles.bloco1}>
                <ImageBackground
                    source={require('./assets/ico.png')}
                    style={styles.logo}></ImageBackground>
                <Text style={styles.title}>LOGIN</Text>
            </View>
            <View style={styles.bloco2}>
                <Text style={styles.textInput}>EMAIL</Text>
                <TextInput
                    style={styles.form}
                    placeholderTextColor={'grey'}
                    placeholder="user@exemplo.com.br"></TextInput>
                <Text style={styles.textInput}>SENHA</Text>
                <TextInput
                    style={styles.form}
                    placeholderTextColor={'grey'}
                    placeholder="**************"></TextInput>
                <Button
                    onPress={() => navigation.navigate('Home')}
                    color={'purple'}
                    title="ENTRAR"></Button>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    principal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2f2f2',
    },
    bloco1: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '30%',
    },
    bloco2: {
        backgroundColor: '#f2f2f2',
        width: '80%',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'black',
    },
    form: {
        borderColor: 'black',
        borderBottomWidth: 0.2,
        flexDirection: 'row',
        width: '100%',
        marginBottom: 30,
        color: 'black'
    },
    textInput: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        color: 'purple',
        marginLeft: 4,
    },
});
