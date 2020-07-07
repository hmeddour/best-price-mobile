import React , {Component} from 'react';
import {TouchableHighlight,View,TextInput,StyleSheet,Text, Image,Alert } from 'react-native';
//npm install react-native-elements
import { Icon} from 'react-native-elements' // 0.19.0
import "@expo/vector-icons"; // 6.3.0

import '../global.js';
import { global } from 'core-js';

export default class Accueil extends Component {

  _handleTextChange = inputValue => {
	this.setState({ inputValue });
  };

  static navigationOptions = {
    title: "Profil"
  }
 handlePress = async () => {
        const { navigate } = this.props.navigation;
        fetch(global.path+'getListeCartesFidelite/4')
            .then((response) => response.json())
            .then((responseJson) => {
                global.listeCartes = responseJson;
                navigate("carte_fidelite", { screen: "carte_fidelite" })

            })
            .catch((error) => {
                console.error(error);
            });
    }
  render() {
    const { navigate } = this.props.navigation
    return (
        
        //l'entếte
        <View style={{flex: 1, flexDirection: 'column'}}>
    	    <View style={styles.entêteVues}  >
   	            <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>    
                    <View style={styles.styleIcone} >   
                      <Icon
                        name='more-vert'
                        type='MaterialIcons'
                        color='white'
                        backgroundColor='steelblue'
                        onPress={() =>this.props.navigation.navigate('DrawerOpen')}/>
                    </View>
                    <View style={{width: '40%', height: '100%',backgroundColor: 'steelblue',justifyContent: 'center',alignItems: 'center'}} >
              	    </View>     
                    <View style={styles.styleIcone} >
                            <Icon
                                name='credit-card-alt'
                                type='font-awesome'
                                color='white'
                                onPress={this.handlePress.bind(this)}
                            />     
                    </View> 
                    <View style={styles.styleIcone} >
                        <Icon    
                            name='barcode'
                            type='font-awesome'
                            color='white'
                            onPress={() => navigate("Scanne", {screen: "Scanne"})} />
                    </View> 
                </View>
     	    </View>

            <View style={styles.entêteVues} >
    	        <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                    <View style={styles.styleIcone} >
                       <Icon
                            name='sliders'
                            type='font-awesome'
                            color='white'
                            onPress={() => console.log('hello')} />
                    </View>   
                    <View style={{width: '60%', height: '100%',backgroundColor: 'steelblue',justifyContent: 'center',alignItems: 'center'}} >
                        <TextInput
                            //value={this.state.inputValue}
                            underlineColorAndroid= 'transparent'
                        	placeholder= "Recherche"
                        	onChangeText={this._handleTextChange}
                        	style={{ width: '100%', height: '80%', padding: 8,backgroundColor: 'white'}}
                      	/>    
              	    </View>  
                    <View style={styles.styleIcone} >
                        <Icon
                            name='search'
                            type='font-awesome'
                            color='white'
                            //fonction de recherche produit
                            onPress={() => console.log('hello')} />
                    </View>   
                </View>
   	        </View>	
    <View>

        <View style={styles.vuebar}  >
                 <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 30, fontWeight: 'bold', }}> Profil </Text>
                 </View>
        </View>

        <View style={styles.vuebar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}> {global.nom}
   	  		            </Text>
                    </View>
        </View>

        <View style={styles.vuebar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>  {global.prenom}
   	  		            </Text>
                    </View>
        </View>

        <View style={styles.vuebar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>  {global.email}
   	  		            </Text>
                    </View>
        </View>

        <View style={styles.vuebar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>  {global.tel}
   	  		            </Text>
                    </View>
        </View>
        <View style={styles.vuebar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>  {global.addresse}
   	  		            </Text>
                    </View>
        </View>
        <View style={styles.vuebar}  >
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold', }}>  {global.note}
   	  		            </Text>
                    </View>
        </View>

    </View>


</View> 
        


    );
  }
}


const styles = StyleSheet.create({
  
  entêteVues : {
	width: '100%',
	height: '8%',
	justifyContent: 'center',
	alignItems: 'center',
	backgroundColor: 'steelblue'
  }, 

  styleIcone: {
    width: '20%', 
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'

  },

  vuebar: {
    width: '100%',
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
},


});