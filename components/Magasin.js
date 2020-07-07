import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, StyleSheet, Alert, Picker } from 'react-native';
import { Container } from 'native-base'
import { Icon, CheckBox, Button, Card } from 'react-native-elements' // 0.19.0
import "@expo/vector-icons"; // 6.3.0

import '../global.js';
import { global } from 'core-js';

import { ScrollView } from 'react-native-gesture-handler';

//npm install react-native-datepicker --save
import DatePicker from 'react-native-datepicker'

import styles from '../Styles/StyleMagasin'

class Magasin extends Component {

<<<<<<< .mine
  constructor(props) {
    super(props);

    this.state = {
      distances: ['500 mètres', '1000 mètres', '1500 mètres', '2000 mètres', '2500 mètres', '3000 mètres', '3500 mètres', '4000 mètres', '4500 mètres', '5000 mètres'],
      rayon: 0,
      latitude: null,
      longitude: null,

      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };
||||||| .r68
    constructor(props) {
        super(props);
    
        this.state = {
          distances: ['500 mètres', '1000 mètres', '1500 mètres', '2000 mètres', '2500 mètres', '3000 mètres', '3500 mètres', '4000 mètres', '4500 mètres', '5000 mètres'],
          rayon: 0,
          latitude: null,
          longitude: null,
          
          loading: false,
          data: [],
          page: 1,
          seed: 1,
          error: null,
          refreshing: false
        };
      }
      
      static navigationOptions = {
        title: "Magasin"
    };
=======
    constructor(props) {
        super(props);
    
        this.state = {
          distances: ['1 mn','2 mn','3 mn','4 mn','5 mn', '10 mn', '15 mn', '20 mn', '25 mn', '30 mn'],
          rayon: 0,
          latitude: null,
          longitude: null,
          
          loading: false,
          data: [],
          page: 1,
          seed: 1,
          error: null,
          refreshing: false
        };
      }
      
      static navigationOptions = {
        title: "Magasins",
        drawerIcon: (
          <Icon
            name='store'
            type='MaterialCommunityIcons'
            color='black'
          />
        ),
      }
     
     
>>>>>>> .r71
  }

  static navigationOptions = {
    title: "Magasins",
    drawerIcon: (
      <Icon
        name='store'
        type='MaterialCommunityIcons'
        color='black'
      />
    ),
  }


  updateDistance = (rayon) => {
    this.setState({
      rayon: rayon,
    })
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }
  _handleMagasin = data => {
    const { navigate } = this.props.navigation;

    fetch(global.path + 'getListeMagasin/' + this.state.latitude + '/' + this.state.longitude + '/' + parseInt(this.state.rayon))
      .then((response) => response.json())
      .then((responseJson) => {
        global.magasin = responseJson.magasin
        //Alert.alert('magasin : '+global.magasin[0].id);
        //navigate("ListeMagasin", { screen: "ListeMagasin" });
        navigate("ListeMagasin", { screen: "ListeMagasin" })

      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { navigate } = this.props.navigation
    const distancesItems = [];
    for (let i = 0; i < this.state.distances.length; i++) {
      const distance = this.state.distances[i];
      distancesItems.push(<Picker.Item key={i} value={distance} label={distance} />)
    }

    return (

      <View style={{ flex: 1 }}>
        <View style={styles.styleEntete}>
          <View style={styles.styleHeader}  >
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <View style={styles.styleIcone} >
                <Icon
                  name='more-vert'
                  type='MaterialIcons'
                  color='white'
                  backgroundColor='steelblue'
                  onPress={() => this.props.navigation.navigate('DrawerOpen')} />
              </View>
              <View style={{ width: '40%', height: '100%', backgroundColor: 'steelblue', justifyContent: 'center', alignItems: 'center' }} >
              </View>
              <View style={styles.styleIcone} >
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
              <View style={styles.styleIcone} >
                <Icon
                  name='barcode'
                  type='font-awesome'
                  color='white'
                  onPress={() => navigate("Scanne", { screen: "Scanne" })} />
              </View>
            </View>
<<<<<<< .mine
||||||| .r68
            <View>
              <Picker
                selectedValue= {this.state.rayon} 
                onValueChange =  {this.updateDistance}>
                
                {distancesItems}

              </Picker>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 15}}>Rayon séléctonné : </Text>
              <Card style={{width: 50, height: 20}}>
                <Text>{parseInt(this.state.rayon)} mètres </Text>
              </Card>
            </View>
            <View>
              <Text style={{marginLeft: 10}}>latitude : {this.state.latitude}  longitude : {this.state.longitude}</Text>
            </View>
=======
            <View>
              <Picker
                selectedValue= {this.state.rayon} 
                onValueChange =  {this.updateDistance}>
                
                {distancesItems}

              </Picker>
            </View>
            <View style={{alignItems: 'center'}}>
              <Text style={{fontSize: 15}}>Rayon séléctonné : </Text>
              <Card style={{width: 50, height: 20}}>
                <Text>{parseInt(this.state.rayon)} minutes </Text>
              </Card>
            </View>
            <View>
              <Text style={{marginLeft: 10}}>latitude : {this.state.latitude}  longitude : {this.state.longitude}</Text>
            </View>
>>>>>>> .r71
          </View>
        </View>
        <View style={styles.styleBody}>
          <View style={{ flex: 1, flexDirection: 'row', width: '100%', height: '50%' }}>
            <View style={{ flex: 1, flexDirection: 'column', width: '100%', height: '50%' }}>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 20 }}>Choisir un rayon</Text>
              </View>
              <View>
                <Picker
                  selectedValue={this.state.rayon}
                  onValueChange={this.updateDistance}>

                  {distancesItems}

                </Picker>
              </View>
              <View style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: 15 }}>Rayon séléctonné : </Text>
                <Card style={{ width: 50, height: 20 }}>
                  <Text>{parseInt(this.state.rayon)} mètres </Text>
                </Card>
              </View>
              <View>
                <Text style={{ marginLeft: 10 }}>latitude : {this.state.latitude}  longitude : {this.state.longitude}</Text>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: 'row', width: '100%', height: '50%', justifyContent: 'center' }}>
            <Button
              title="Voir les magasins à proximité"
              backgroundColor='steelblue'
              onPress={() => this._handleMagasin()}
            />
          </View>
        </View>
      </View>
    );
  }
}
export default Magasin