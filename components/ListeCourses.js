import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, StyleSheet, Alert,FlatList } from 'react-native';
import { Icon, Button, Card } from 'react-native-elements' // 0.19.0
import "@expo/vector-icons"; // 6.3.0
//import { Constants } from 'expo';


export default class Liste_courses extends Component {


  state = {
    checked: false,
    listeCourses: '',
  };
  _handleTextChange = inputValue => {
    this.setState({ inputValue });
  };
<<<<<<< .mine
||||||| .r68
  static navigationOptions = {
    title: "Listes de courses"
  }
=======
  static navigationOptions = {
    title: "Liste courses",
    drawerIcon: (
      <Icon   
        name='shopping-bag'
        type='font-awesome'
        color='black'
      />
    ),
   }
   
   
>>>>>>> .r71


static navigationOptions = {
  title: "Liste courses",
  drawerIcon: (
    <Icon    
      name='shopping-bag'
      type='font-awesome'
      color='black'
    />
  ),
}

  componentDidMount() {
    this.fetchData();
  }

  async fetchData() {
    fetch(global.path + '/afficherListeCourses/4')
      .then((response) => response.json())
      .then((responseJson) => {
        let i = 0;
        
       
          this.state.listeCourses.push(reponseJson.liste[0]);
          

        Alert.alert('produit favoris:' + this.state.listeCourses[0].id + this.state.listeCourses[1].id)
      })
      .catch((error) => {
        console.error(error);
      });

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
              <Text style={styles.titleText} >
                LOGO
                                 </Text>
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
      
          <View style={styles.principalbar}>
          <Text> {this.state.listeCourses[0].id}</Text> 
            <Card containerStyle={{width:'94%',height:'70%'}} title='Listes de courses' >
           
              <FlatList
                data={this.state.listeCourses[0]}
                renderItem={({ item }) => <Text>{item[0].Nom}, {item[0].id},{item[0].id} </Text>}
                keyExtractor={(item, index1, index) => index}
              />
        
            </Card>
          


          </View> 





          <View style={styles.bbar}  >
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon
                  name='trash'
                  type='font-awesome'
                  color='white'
                  size={50}
                  onPress={() => console.log('hello')}
                />
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Icon
                  name='plus'
                  type='font-awesome'
                  color='white'
                  size={50}
                  onPress={() => console.log('hello')}
                />
              </View>
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
    height: '15%',
    backgroundColor: 'steelblue'
  },

  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  vuebar: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  principalbar: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
     flex:1,
     flexDirection: 'row'
  },





});