import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, StyleSheet, Alert } from 'react-native';
import { Icon, CheckBox, Card, Button } from 'react-native-elements' // 0.19.0
import { Footer, Content, Left, Right } from 'native-base'
import { Table, TableWrapper, Row } from 'react-native-table-component'
import "@expo/vector-icons"; // 6.3.0
//import '../global';
//import { global } from 'core-js';
import { ScrollView } from 'react-native-gesture-handler';

import styles from './Styles/StyleFavoris'

export default class Favoris extends Component {
    constructor(props) {
        super(props);
        this.state = {
            TableHeader: ['favoris']
        }
        this.Data = [];

    }


    state = {
        checked: false,
    };
    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };
    static navigationOptions = {
        title: "Favoris"
    }



    componentDidMount() {
        this.fetchData();
    };

    fetchData() {
        fetch(global.path + 'afficherListeFavoris/' + global.id)
            .then((response) => response.json())
            .then((responseJson) => {
                if (responseJson.etat == true) {
                    const { navigate } = this.props.navigation;
                    global.favoris = responseJson.data
                    navigate("listefavoris", { screen: "listefavoris" });


                }
                else {
                    Alert.alert("aucun favoris")
                }
            })
    }



    render() {
        const state = this.state;


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
                <View style={styles.vuebar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', }}> {this.Data} Liste des produits favoris </Text>

                    </View>
                </View>

                <View style={styles.vuebar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            title="Voir les favoris"
                            backgroundColor='steelblue'
                            onPress={() => this.componentDidMount()}
                        />
                    </View>
                </View>


            </View>
        );
    }
}
