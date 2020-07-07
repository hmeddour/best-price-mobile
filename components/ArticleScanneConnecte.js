import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements' // 0.19.0
import "@expo/vector-icons"; // 6.3.0
//import { Constants } from 'expo';


export default class Ajouter_scanne_connecte extends Component {


    state = {
        checked: false,
    };
    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };
    static navigationOptions = {
        title: "Article_scanne"
    }
    render() {
        const { navigate } = this.props.navigation
        return (



            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>


                <View style={styles.tbar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>


                        <View style={{ width: '20%', height: '100%', backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }} >

                            <Icon

                                name='more-vert'
                                type='MaterialIcons'
                                color='white'
                                backgroundColor='steelblue'
                                onPress={() => this.props.navigation.navigate('DrawerOpen')} />

                        </View>
                        <View style={{ width: '40%', height: '100%', backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }} >

                        </View>
                        <View style={{ width: '20%', height: '100%', backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }} >

                            <TouchableHighlight
                                onPress={() => navigate("Connexion", { screen: "Connexion" })}
                            >
                                <Icon
                                    name='user'
                                    type='font-awesome'
                                    color='white'
                                />
                            </TouchableHighlight>




                        </View>
                        <View style={{ width: '20%', height: '100%', backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }} >
                            <Icon

                                name='barcode'
                                type='font-awesome'
                                color='white'
                                onPress={() => navigate("Scanne", { screen: "Scanne" })} />
                        </View>
                    </View>


                </View>

                <View style={styles.bbar} >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                        <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }} >
                            <Icon

                                name='sliders'
                                type='font-awesome'
                                color='white'
                                onPress={() => console.log('hello')} />
                        </View>
                        <View style={{ width: '60%', height: '100%', backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }} >
                            <TextInput
                                value={this.state.inputValue}
                                placeholder="Recherche"
                                onChangeText={this._handleTextChange}
                                style={{ width: '100%', height: '60%', padding: 8, backgroundColor: 'white' }}

                            />
                        </View>
                        <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }} >
                            <Icon

                                name='search'
                                type='font-awesome'
                                color='white'

                                onPress={() => console.log('hello')} />
                        </View>
                    </View>





                </View>


                <View style={styles.vuebar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', }}> Article scanné </Text>
                    </View>
                </View>

                <View style={styles.vuebar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                    </View>
                </View>

                <View style={styles.vuebar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}> Ce produit n'existe pas,
   	  		</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}>  voulez-vous l'ajouter?
   	  		</Text>
                    </View>
                </View>

                <View style={styles.vuebar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    </View>
                </View>

                <View style={styles.vuebar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                    </View>
                </View>


                <View style={styles.vuebar}  >
                    <View style={{ width: '50%', height: '20', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            title="    Oui    "
                            color='white'
                            accessibilityLabel="connexion"
                            backgroundColor="steelblue"
                            width='40%'
                            height='20%'
                        />
                    </View>
                </View>

            </View>


        );
    }
}







const styles = StyleSheet.create({



    tbar: {
        width: '100%',
        height: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'steelblue'
    },

    bbar: {
        width: '100%',
        height: '8%',
        backgroundColor: 'steelblue'
    },



    vuebar: {
        width: '100%',
        height: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },





});