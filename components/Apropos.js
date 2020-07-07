import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, StyleSheet } from 'react-native';
import { Icon, Button } from 'react-native-elements' // 0.19.0
import "@expo/vector-icons"; // 6.3.0
//import { Constants } from 'expo';

//importer les styles
import styles from '../Styles/StyleAPropos'

export default class Apropos extends Component {


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

            <View style={{flex: 1, flexDirection: 'column'}}>


                <View style={styles.Header}  >
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



                <View style={styles.View}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', }}> Article scanné </Text>
                    </View>
                </View>

                <View style={styles.View}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                    </View>
                </View>

                <View style={styles.View}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}> Ce produit n'existe pas,
   	  		</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', }}>  voulez-vous l'ajouter?
   	  		</Text>
                    </View>
                </View>

                <View style={styles.View}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    </View>
                </View>

                <View style={styles.View}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                    </View>
                </View>


                <View style={styles.View}  >
                    <View style={{ width: '50%', height: '20%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
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