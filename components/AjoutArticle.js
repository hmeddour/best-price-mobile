import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, StyleSheet, Alert } from 'react-native';
import { Icon, CheckBox } from 'react-native-elements' // 0.19.0
import "@expo/vector-icons"; // 6.3.0
import { ScrollView } from 'react-native-gesture-handler';

import '../../global.js';
import { global } from 'core-js';


//import {keyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

//importer les styles
import styles from './Styles/StyleAjoutArticle'

export default class Ajouter_article extends Component {


  state = {
    checked: false,
    libelle: '',
    codebarre: JSON.parse(data.data),
    marque: '',
    type: '',
    description: '',
    note: '',
    poids: '',
    couleur: '',
    taille: '',
    magasin: '',
    prix: '',
  };

  static navigationOptions = {
    title: "Ajouter_article"
  }


  handlePress = data => {
    const { navigate } = this.props.navigation;
    var url = global.path + '/ajouterArticle/' + this.state.libelle + '/' + this.state.codebarre + '/' + this.state.marque
      + '/' + this.state.type + '/' + this.state.description + '/' + this.state.note
      + '/' + this.state.poids + '/' + this.state.couleur + '/' + this.state.taille
      + '/' + this.state.prix + '/' + this.state.magasin + '/' + global.id;
    var url1 = new Request(url);
    fetch(url1)
      .then((response) => response.json())
      .then((responseJson) => {
        if (responseJson.etat == 'true') {
          Alert.alert("L'article " + this.state.libelle + " est enregistré!")
          navigate("Scanne", { screen: "Scanne" });
        }

      })
      .catch((error) => {
        console.error(error);
      });

  };



  render() {
    const { navigate } = this.props.navigation
    return (

      <View style={{ flex: 1, flexDirection: 'column', }}>
        <View style={styles.styleHeader}  >
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


        <View style={styles.viewTitle}>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={styles.titleText}>Ajouter un article </Text>
          </View>
        </View>
        <ScrollView style={{ height: '100%' }}>
          <View style={{ flex: 1, flexDirection: 'row', height: 70, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: '40%' }}>Article          </Text>
            <TextInput
              style={styles.textField}
              underlineColorAndroid='transparent'
              onChangeText={(libelle) => this.setState({ libelle })}
              value={this.state.libelle}
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'row', height: 70, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: '40%' }}>Code barres  </Text>
            <TextInput
              style={styles.textField}
              underlineColorAndroid='transparent'
              onChangeText={(codebarre) => this.setState({ codebarre })}
              value={this.state.codebarre}
            />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 70, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: '40%' }}>type  </Text>
            <TextInput
              style={styles.textField}
              underlineColorAndroid='transparent'
              onChangeText={(type) => this.setState({ type })}
              value={this.state.type}
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'row', height: 70, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: '40%' }}>taille  </Text>
            <TextInput
              style={styles.textField}
              underlineColorAndroid='transparent'
              onChangeText={(taille) => this.setState({ taille })}
              value={this.state.taille}
            />
          </View>



          <View style={{ flex: 1, flexDirection: 'row', height: 70, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: '40%' }}>Marque        </Text>
            <TextInput
              style={styles.textField}
              underlineColorAndroid='transparent'
              onChangeText={(marque) => this.setState({ marque })}
              value={this.state.marque}
            />
          </View>



          <View style={{ flex: 1, flexDirection: 'row', height: 70, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: '40%' }}>Prix                </Text>
            <TextInput
              style={styles.textField}
              underlineColorAndroid='transparent'
              onChangeText={(prix) => this.setState({ prix })}
              value={this.state.prix}
            />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 70, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: '40%' }}>Magasin      </Text>
            <TextInput
              style={styles.textField}
              underlineColorAndroid='transparent'
              onChangeText={(magasin) => this.setState({ magasin })}
              value={this.state.magasin}
            />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 150, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: '40%' }}>Description  </Text>
            <TextInput
              style={styles.textField2}
              multiline={true}
              underlineColorAndroid='transparent'
              onChangeText={(description) => this.setState({ description })}
              value={this.state.description}
            />
          </View>


          <View style={{ flex: 1, flexDirection: 'row', height: 70, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: '40%' }}>Poids  </Text>
            <TextInput
              style={styles.textField}
              underlineColorAndroid='transparent'
              onChangeText={(poids) => this.setState({ poids })}
              value={this.state.poids}
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'row', height: 70, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: '40%' }}>Couleur  </Text>
            <TextInput
              style={styles.textField}
              underlineColorAndroid='transparent'
              onChangeText={(couleur) => this.setState({ couleur })}
              value={this.state.couleur}
            />
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 70, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', width: '40%' }}>note  </Text>
            <TextInput
              style={styles.textField}
              underlineColorAndroid='transparent'
              onChangeText={(note) => this.setState({ note })}
              value={this.state.note}
            />
          </View>

        </ScrollView>

        <View style={styles.styleFooter}  >
          <View style={{ width: '50%', height: '50%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <TouchableHighlight>
              <Icon
                name='plus'
                reverse
                type='font-awesome'
                color='black'
                onPress={this.handlePress} 
              />
            </TouchableHighlight>
          </View>
        </View>



      </View>


    );
  }
}
