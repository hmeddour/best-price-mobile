import React , {Component} from 'react';
import {TouchableHighlight,View,TextInput, Image } from 'react-native';
//npm install react-native-elements
import { Icon} from 'react-native-elements' // 0.19.0
import "@expo/vector-icons"; // 6.3.0

//importer les styles
import styles from './Styles/StyleAcceuil'

export default class Accueil extends Component {

  _handleTextChange = inputValue => {
	this.setState({ inputValue });
  };

  static navigationOptions = {
<<<<<<< .mine
    title: "Accueil",
    drawerIcon: (
        <Icon    
            name='home'
            type='font-awesome'
            color='black'
        />
    ),
||||||| .r68
    title: "Accueil"
=======
    title: "Accueil",
    drawerIcon: (
        <Icon   
            name='home'
            type='font-awesome'
            color='black'
        />
    ),
>>>>>>> .r71
  }
 
 

  render() {
    const { navigate } = this.props.navigation
    return (
        <View style={{flex: 1, flexDirection: 'column'}}>
    	    <View style={styles.styleHeader}  >
   	            <View style={{flex: 1, flexDirection: 'row',justifyContent: 'center',alignItems: 'center'}}>    
                    <View style={styles.styleIcone} > 
                        <TouchableHighlight
                            onPress={() =>this.props.navigation.navigate('DrawerOpen')}
                        >  
                            <Icon
                                name='more-vert'
                                type='MaterialIcons'
                                color='white'
                                backgroundColor='steelblue'
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={{width: '40%', height: '100%',backgroundColor: 'steelblue',justifyContent: 'center',alignItems: 'center'}} >
              	    </View>     
                    <View style={styles.styleIcone} >
                        <TouchableHighlight
                            onPress={() => navigate("Connexion", {screen: "Connexion"})}
                        >
                            <Icon
                                name='user'
                                type='font-awesome'
                                color='white'
                            />
                        </TouchableHighlight>       
                    </View> 
                    <View style={styles.styleIcone} >
                        <TouchableHighlight
                             onPress={() => navigate("Scanne", {screen: "Scanne"})} 
                        >
                            <Icon    
                                name='barcode'
                                type='font-awesome'
                                color='white'
                            />
                        </TouchableHighlight>
                    </View> 
                </View>
     	    </View>
   	    </View>	
    );
  }
}
