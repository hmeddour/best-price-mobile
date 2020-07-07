import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet,ActivityIndicator, Button, Alert,TouchableHighlight,ScrollView,Image } from 'react-native';
import "@expo/vector-icons"; // 6.2.2

import '../global.js';
import { global } from 'core-js';

import {Card} from 'react-native-elements';
//npm install react-native-elements
import { Icon} from 'react-native-elements' // 0.19.0

//import { global } from 'core-js';
import styles from './Styles/StyleConnexion'

export default class Connexion extends Component {
 
 
   static navigationOptions = {
       title: "Mon Compte"
   };
   state = {
       Username: '',
       password: '',
      
   }
   _logout = async () => {
       global.id='';
       this.setState({dummy: 1})
   }
   handlePress = async () => {
      if(this.state.Username.length<5 || this.state.password.length<5 )
      {
       Alert.alert("veuillez remplir les deux champs!");
      }
      else {const { navigate } = this.props.navigation;
       var url=global.path+'checkUser/'+this.state.Username+'/'+this.state.password;
       var url1= new Request(url);
  
       fetch(url1)
  
  
         .then((response) => response.json())
         .then((responseJson) => {
           if(responseJson.etat=='true'){
               global.nom = responseJson.nom;
               global.prenom = responseJson.prenom;
               global.email = responseJson.email;
               global.id = responseJson.id;
               global.tel = responseJson.tel;
               global.note = responseJson.note;
               global.addresse = responseJson.addresse;                             
               this.setState({dummy: 1})
              // navigate("connexion", { screen: "connexion" });
           }
           else{
             Alert.alert("mail ou pwd incorrect");
           }
          
         })
         .catch((error) => {
           console.error(error);
         });
       }
     
       }

      
   render() {
       if(global.id==='')
       {
       const { navigate } = this.props.navigation
      
       return (

           <View style={{ flex: 1, flexDirection: 'row' }}>
               <View style={{ flex: 1, flexDirection: 'column' }}>
                   <View style={styles.tbar} >
                   </View>
                   <View style={styles.tbar}  >
                       <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                       <Text style={styles.titleText}>
                               LogIn                                        
                              
                           </Text>
                       </View>
                   </View>
                   <View style={styles.tbar}  >
                       <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                           <TextInput
                               placeholder= "6 caractéres ..."
                               underlineColorAndroid='transparent'
                               style={styles.textField}
                               keyboardType="email-address"
                               onChangeText={(Username) => this.setState({ Username})}
                               value={this.state.Username}
                              
                           />
                       </View>
                   </View>
                   <View style={styles.tbar}  >
                       <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                           <Text style={styles.titleText}>Mot de passe</Text>
                       </View>
                   </View>
                   <View style={styles.tbar}  >
                       <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                           <TextInput
                              
                               laceholder= "6 caractéres ..."
                               underlineColorAndroid='transparent'
                               style={styles.textField}
                               secureTextEntry = { true }
                               onChangeText={(password) => this.setState({ password })}
                               value={this.state.password}
                           />
                       </View>
                   </View>

                   <View style={styles.bbar}  >
                       <View>
                           <Button
                               title="Se connecter"
                               color='steelblue'
                               accessibilityLabel="connexion"
                               onPress={this.handlePress.bind(this)}

                                              
                              
                           />
                       </View>
                   </View>
                   <View style={styles.bbar}  >
                       <View>
                           <Button
                               title="  S'inscrire  "
                               color='steelblue'
                               accessibilityLabel="Inscription"
                               onPress={() => navigate("Inscription", { screen: "Inscription" })}
                           />
                       </View>
                   </View>
                   <View style={styles.tbar}  >
                   </View>
               </View>
           </View>
       );
   }

else
{  return (
      
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
                   <TouchableHighlight
                       onPress={() => navigate("Connexion", {screen: "Connexion"})}
                   >
                       <Icon
                           name='credit-card-alt'
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

 
   <ScrollView>
       <Card
        title='Profil'
       
       >    
          <Card containerStyle={{backgroundColor:'#801010'}}>
          <View style={{flexDirection: 'row' }}  > 
           <View style={{flexDirection: 'column' }}  > 
               <Image style={{width: 100, height: 100,borderRadius:100, borderColor:'rgba(0,0,0,0.2)',}}
                   source={{uri: 'http://192.168.43.29:8000/bundles/app/enseigne/auchan.png'}}
               />
            </View>            
               <View style={{ flex: 1, flexDirection: 'column',  }}>
                  
                   <Text style={{ fontSize: 20, fontWeight: 'bold',color:'white',margin:10 }}>{global.email}</Text>
                 
                  
               </View>
           </View>
          
               <View style={{ flex: 1, flexDirection: 'row',  }}>  
                   <Text style={{ fontSize: 18, fontWeight: 'bold',color:'white',margin:5 }}>Nom: {global.nom}</Text>
               </View>   
               <View style={{ flex: 1, flexDirection: 'row',  }}> 
                   <Text style={{ fontSize: 18, fontWeight: 'bold',color:'white',margin:5 }}>Prenom: {global.prenom}</Text>
               </View>
               <View style={{ flex: 1, flexDirection: 'row',  }}> 
                   <Text style={{ fontSize: 18, fontWeight: 'bold',color:'white',margin:5 }}>Adresse: {global.addresse}</Text>
               </View>   
             
           </Card> 
           <View style={{flexDirection: 'row',width:10 }} >
           </View>
           <View style={{flexDirection: 'row' }} >
               <View style={{flexDirection: 'column',width:'50%', }}>
                   <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                   <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                       <Icon
                               name='sign-out'
                               type='font-awesome'
                               color='steelblue'
                               reverse
                               size={30}
                               onPress={this._logout.bind(this)}
                       />
                   </View>
                   </View>
               </View>
               <View style={{flexDirection: 'column',width:'50%', }}>
                   <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                   <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>
                       <Icon
                               name='refresh'
                               type='font-awesome'
                               color='steelblue'
                               reverse
                               size={30}
                               onPress={() => console.log('hello')}
                       />
                   </View>
                   </View>
               </View>
          </View>
      
     
     
     
       </Card>

              
 

  
   </ScrollView>
</View>


</View>
  


);



}

}
}

  



