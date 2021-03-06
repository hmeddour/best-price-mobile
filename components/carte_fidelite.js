import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, StyleSheet, ScrollView, Alert } from 'react-native';
import { Icon, Button } from 'react-native-elements' // 0.19.0
import { Footer } from 'native-base'
import "@expo/vector-icons"; // 6.3.0
//import { Constants } from 'expo';
import { CardList } from 'react-native-card-list';
import Barcode from 'react-native-barcode-builder';

//impoirter les styles 
import styles from './Styles/StyleCarteFidelite'

const cards = [
    {
        id: "0",
        title: "Cartes fidelites",
        picture: require('../Image/card.gif'),
        content: <Text>Starry Night</Text>,

    },


]
export default class carte_fidelite extends Component {
    state = {
        listeCartes: [],

    };

    static navigationOptions = {
        title: "Mes cartes de fidélité",
        drawerIcon: (
          <Icon    
            name='credit-card'
            type='Entypo'
            color='black'
          />
        ),
      }

    _handleTextChange = inputValue => {
        this.setState({ inputValue });
    };
    componentWillMount() {
        fetch(global.path + 'getListeCartesFidelite/' + global.id)
            .then((response) => response.json())
            .then((responseJson) => {
                let i = 0;
                while (i < responseJson.data.length) {
                    const rowData = [];
                    rowData.push(responseJson.data[i].id);
                    rowData.push(responseJson.data[i].codebarres);
                    rowData.push(responseJson.data[i].enseigne);
                    rowData.push(responseJson.data[i].logo);
                    this.state.listeCartes.push(rowData);
                    i++;
                }
                i = 0;
                while (i < this.state.listeCartes.length) {
                    cards.push({
                        id: this.state.listeCartes[i][0],
                        title: this.state.listeCartes[i][2],
                        picture: source = { uri: global.path + 'bundles/app/enseigne/' + this.state.listeCartes[i][3] },
                        content: <Barcode value={this.state.listeCartes[i][1]} format="CODE128" />,

                    },
                    )
                    i++;
                }

            })
            .catch((error) => {
                console.error(error);
            });
    }

<<<<<<< .mine
||||||| .r68

    static navigationOptions = {
        title: "Carte fidelites"
    }
=======

    static navigationOptions = {
        title: "Mes cartes de fidélité",
        drawerIcon: (
          <Icon   
            name='credit-card'
            type='Entypo'
            color='black'
          />
        ),
    }
>>>>>>> .r71
 
 
    render() {
        const { navigate } = this.props.navigation
        return (

            <View style={{flex: 1,}}>

                <View style={{flex: 1,flexDirection: 'column',}}>


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
                        <ScrollView>
                            <View style={styles.container}>
                                <CardList cards={cards} />

                            </View>
                        </ScrollView>


                    </View>

                </View>

                <Footer style={styles.Footer}>
                    <Icon
                        name='plus'
                        type='font-awesome'
                        color='white'
                        containerStyle={{ backgroundColor: 'steelblue', height: 50 }}
                        onPress={() => navigate("Scanne", {screen: "Scanne"}) } >

                    </Icon>
                </Footer>

            </View>

        );
    }
}
