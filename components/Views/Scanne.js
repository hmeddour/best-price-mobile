import React, { Component } from 'react';
import { View, StyleSheet, Alert, TouchableHighlight,TextInput, Image } from 'react-native';
import { Constants, BarCodeScanner, Permissions } from 'expo';
import { Icon } from 'react-native-elements' // 0.19.0
import "@expo/vector-icons"; // 6.3.0

import '../../global.js';
import { global } from 'core-js';

import styles from '../Styles/StyleScanne'

export default class Scanne extends Component {
 state = {
   hasCameraPermission: null,
  };

 state = {
  type: 1,
  nom:'',

};

static navigationOptions = {
  title: "Scanner",
  drawerIcon: (
    <Icon    
      name='camera'
      type='font-awesome'
      color='black'
    />
  ),
}

 componentDidMount() {
   this._requestCameraPermission();
 }

 _requestCameraPermission = async () => {
   const { status } = await Permissions.askAsync(Permissions.CAMERA);
   this.setState({
     hasCameraPermission: status === 'granted',
   });
 };

 switch_carte_produit(){
   if(this.state.type===1){
   Alert.alert("scanner et ajouter votre carte de fidelité");
  }
  else{
   Alert.alert("scanner le produit");
  }
  this.state.type=-this.state.type;
}

 _handleBarCodeRead = data => {
   const { navigate } = this.props.navigation;
 if(this.state.type===1) {

   fetch(global.path +'getArticleByRef/'+JSON.parse(data.data))
    .then((response) => response.json())
    .then((responseJson) => {
     if(responseJson.etat=='true'){
       global.article=responseJson;
       fetch(global.path+'getListeCapture/'+ global.article.id )
       .then((response) => response.json())
       .then((responseJson) => {          
         let i=0;
         global.capture=[];
         while (i<responseJson.data.length)
        {
                    const row=[];
                    row.push(responseJson.data[i].magasin);
                    row.push(responseJson.data[i].adresse);
                    row.push(responseJson.data[i].prix);
                    global.capture.push(row);
             i++;        
                   }
        })
       .catch((error) =>{
         console.error(error);
       });
       navigate("FicheArticle", { screen: "FicheArticle" });       
     }
      else{
        if(global.id != '') {
          navigate("AjoutArticle", { screen: "AjoutArticle" });
        }
        else{
          Alert.alert("Cet article n'existe pas Veuillez vous connecter pour l'ajouter")
        }
      }
    })
    .catch((error) =>{
      console.error(error);
    });
  }else{
    
    fetch(global.path+'ajouterCarte/'+ global.id +'/' + this.state.nom +'/'+JSON.parse(data.data));
    Alert.alert("votre carte a été ajouté avec succès avec le code : "+JSON.parse(data.data));
  
    
  }
  
 
   };


 render() {
   const { navigate } = this.props.navigation
   return (


     <View style={styles.container}>

       <BarCodeScanner
         onBarCodeRead={this._handleBarCodeRead}
         style={{ height: '110%', width: '100%' }}
       
       
       >
        
         <View
           style={{
             flex: 2,
             flexDirection: 'row',

           }}

         >
           
           <View style={{ width: '5%', height: '10%', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
           <TouchableHighlight
                            onPress={() =>this.props.navigation.navigate('DrawerOpen')}
                        >
             <Icon

               name='pencil'
               type='font-awesome'
               color='white'
               onPress={() =>{
                 global.codebarre='';
                 navigate("AjoutArticle", { screen: "AjoutArticle" })
               } } />
            </TouchableHighlight>
           </View>
           <View style={{ width: '50%', height: '10%', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

           </View>
           <View style={{ width: '5%', height: '10%', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
           <TouchableHighlight
                            onPress={() =>this.props.navigation.navigate('DrawerOpen')}
                        >
             <Icon

               name='flash'
               type='font-awesome'
               color='white'
              
               />
            </TouchableHighlight>
           </View>
           <View style={{ width: '50%', height: '10%', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

           </View>
         
         <View  style={{ width: '5%', height: '10%', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
         <TouchableHighlight
            onPress={ ()=> this.switch_carte_produit()}
                        >
             <Icon

               name='switch'
               type='entypo'
               color='white'
              
               />
            </TouchableHighlight>
            </View>
            

<View style={{ width: '5%', height: '10%', flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
  <TextInput
    underlineColorAndroid= 'transparent'
    style={styles.textField}
    onChangeText={(nom) => this.setState({ nom })}
    value={this.state.nom}
  />

</View>
            </View>
       </BarCodeScanner>



     </View>
   );
 }
}


