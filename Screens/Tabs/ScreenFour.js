import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default class ScreenFour extends React.Component {

    testFunction() {
        console.log(this.props.navigation.state.params.data);
    }
    render() {
        return (
            <ImageBackground source={require('../image.png')} style={{ width: '100%', height: '100%' }}>
                <Button
                    onPress={() =>
                        this.testFunction()
                    }
                    icon={{ name: 'code' }}
                    backgroundColor='#03A9F4'
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                    title='TEST' />
                <View style={styles.container}>


                    <View style={[{ width: "90%", margin: 10, fontFamily: "monospace", fontStyle: "italic", textAlign: 'center', justifyContent: 'center', alignItems: 'center' }]}>
                        <Text style={styles.headerText}><Text style={{ color: 'red' }}>Tell</Text>MeWhere</Text>
                    </View>
                    <Text style={{ textAlign: 'left', paddingTop: 0, marginTop: 0 }}>Developed by:</Text>
                    <Text>Mouad Lasri</Text>
                    <Text>Zineb Bouayad</Text>
                    <Text style={{ margin: 10 }}>Supervised by: Dr. Bouchaib Falah</Text>
                    <View style={[{ width: "90%", margin: 10, marginTop: 40 }]}>
                        <Button title="Log out" onPress={() => this.props.navigation.navigate('WelcomeScreen')} />
                    </View>
                </View>
            </ImageBackground>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'Roboto',
        fontSize: 50,
        color: '#000',
        paddingLeft: 15,
        fontStyle: 'italic',
        marginBottom: 30
    }

});
