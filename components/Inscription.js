import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Button, Keyboard } from 'react-native';
import "@expo/vector-icons"; // 6.2.2

import styles from './Styles/StyleInscription'

export default class Inscription extends Component {
	static navigationOptions = {
        title: "Inscription"
    };
    state = {
		nom: '',
		prenom:'',
		password: '',
		login:'',
		addresse:'',

        
    }
	
	componentDidMount () {
		this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
		this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);
	  }
	
	  componentWillUnmount () {
		this.keyboardDidShowListener.remove();
		this.keyboardDidHideListener.remove();
	  }
	
	  _keyboardDidShow () {
		alert('Keyboard Shown');
	  }
	
	  _keyboardDidHide () {
		alert('Keyboard Hidden');
	  }

    handlePress = async () => {
        const { navigate } = this.props.navigation;
        var url=global.path+'addUser/'+this.state.nom+'/'+this.state.prenom+'/'+this.state.login+'/'+this.state.password+'/'+this.state.addresse;
        var url1= new Request(url);
    
        fetch(url1)
    
    
          .then((response) => response.json())
          .then((responseJson) => {
            if(responseJson.etat=='true'){
                global.nom = responseJson.nom;
                global.prenom = responseJson.prenom;
                global.email = responseJson.email;
                global.addresse = responseJson.addresse;                              
                navigate("Profil", { screen: "Profil" });
            }
            else{
              Alert.alert("mail ou pwd incorrect");
            }
            
          })
          .catch((error) => {
            console.error(error);
          });
      }

	render() {

		return (
			// Try setting `flexDirection` to `column`.


			<View style={{ flex: 1, flexDirection: 'row' }}>
				<View style={{ flex: 1, flexDirection: 'column', }}>

					<View style={styles.tbar}  >
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
							<Text style={styles.titleText}>Nom</Text>
						</View>
					</View>
					<View style={styles.tbar}  >

						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
							<TextInput
								onSubmitEditing= {Keyboard.dismiss}
								underlineColorAndroid= 'transparent'
								style={styles.textField}
								onChangeText={(nom) => this.setState({ nom })}
								value={this.state.nom}
							/>
						</View>
					</View>
					<View style={styles.tbar}  >
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
							<Text style={styles.titleText}>Prénom</Text>
						</View>
					</View>
					<View style={styles.tbar}  >
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
							<TextInput
								onSubmitEditing= {Keyboard.dismiss}
								underlineColorAndroid= 'transparent'
								style={styles.textField}
								onChangeText={(prenom) => this.setState({ prenom })}
								value={this.state.prenom}
							/>
						</View>
					</View>

					<View style={styles.tbar}  >
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
							<Text style={styles.titleText}>Adresse</Text>
						</View>
					</View>
					<View style={styles.tbar}  >
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
							<TextInput
								onSubmitEditing= {Keyboard.dismiss}
								underlineColorAndroid= 'transparent'
								style={styles.textField}
								onChangeText={(addresse) => this.setState({ addresse })}
								value={this.state.addresse}
							/>
						</View>
					</View>

					<View style={styles.tbar}  >
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
							<Text style={styles.titleText}>LogIn</Text>
						</View>
					</View>
					<View style={styles.tbar}  >
						<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
							<TextInput
								onSubmitEditing= {Keyboard.dismiss}
								underlineColorAndroid= 'transparent'
								style={styles.textField}
								onChangeText={(login) => this.setState({ login })}
								value={this.state.login}
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
								onSubmitEditing= {Keyboard.dismiss}
								underlineColorAndroid= 'transparent'
								style={styles.textField}
								secureTextEntry= { true }
								onChangeText={(password) => this.setState({ password })}
								value={this.state.password}
							/>
						</View>
					</View>

					<View style={styles.bbar}  >
						<View>
							<Button
								title="Inscription"
								color='steelblue'
								accessibilityLabel="Learn more about this purple button"
								onPress={this.handlePress.bind(this)}
							/>
						</View>
					</View>


				</View>
			</View>
		);
	}
}