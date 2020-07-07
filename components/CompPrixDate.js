import React, { Component } from 'react'
import { StyleSheet, TextInput, Text, View, TouchableHighlight, Alert, Picker } from 'react-native'

//npm install --save react-native-elements
import { Icon, Button, Image } from 'react-native-elements'

//npm install --save 'react-base'
import { Container, Content, Header, Left, Right, Body } from 'native-base'

//npm install react-native-datepicker --save
import DatePicker from 'react-native-datepicker'

import styles from './Styles/StyleCompParDate'

class CompPrixDate extends Component {

  constructor(props) {
    super(props)
    this.state = {
      text: '',
      date1: '',
      date2: '',
      idStore: '',
      storeChoice: '',
      stores: {
        storesName: []
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }

  static navigationOptions = {
    title: "Evolution du prix par dates"
  };


  handleChange(date) {
    this.setState({
      date1: date
    });
  }
  handleChange1(date) {
    this.setState({
      date2: date
    });
  }

  handleChangeIdStore(id) {
    this.setState({
      idStore: id
    });
  }

  updateStore = (storeChoice) => {
    this.setState({
      storeChoice: storeChoice,
      idStore: parseInt(storeChoice.substring(0, 3))
    })
  }


  componentDidMount() {
    this.fetchData();
  };

  fetchData() {
    fetch(global.path + 'getListeMagasins')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          stores: responseJson.magasin
        })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  _handleCompPrixDate = async => {
    const { navigate } = this.props.navigation;
    global.dateDeb = this.state.date1
    global.dateFin = this.state.date2
    global.nameStore = this.state.storeChoice
    //global.idStore = this.state.idStore
    fetch(global.path + 'getComparaisonDate/' + global.article.id + '/' + this.state.idStore + '/' + global.dateDeb + '/' + global.dateFin)
      .then((response) => response.json())
      .then((responseJson) => {
        //Alert.alert('prix'+ global.compare[0].prix)
        if (responseJson.etat === 'true') {
          global.compare = responseJson.data;
          navigate("ComparaisonDate", { screen: "ComparaisonDate" });
        }
        else {
          Alert.alert('Aucune capture de cet article entre ces deux dates');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const { navigate } = this.props.navigation
    const srvItem = [];
    for (var i = 0; i < this.state.stores.length; i++) {
      const id_store = this.state.stores[i].idMagasin.toString()
      const name_store = this.state.stores[i].nomMagasin
      const addr_store = this.state.stores[i].adresseMagasin + ' ' + this.state.stores[i].cpMagasin
      const store = [id_store, name_store, addr_store]
      srvItem.push(<Picker.Item key={i} label={store[0].toString() + ' ' + store[1].toString() + ' ' + store[2].toString()} value={store[0].toString() + ' ' + store[1].toString() + ' ' + store[2].toString()} />);
    }

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={styles.styleHeader}  >
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
            <View style={styles.styleIcone} >
              <TouchableHighlight
                onPress={() => this.props.navigation.navigate('DrawerOpen')}
              >
                <Icon
                  name='more-vert'
                  type='MaterialIcons'
                  color='white'
                  backgroundColor='steelblue'
                />
              </TouchableHighlight>
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
              <TouchableHighlight
                onPress={() => navigate("Scanne", { screen: "Scanne" })}
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
      <View style={styles.styleBody}>
        <View style={{ flex: 1, flexDirection: 'column', width: '100%', height: '50%' }}>
          <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
            <Text>Choisissez un magasin</Text>
            <Picker
              selectedValue={this.state.storeChoice}
              onValueChange={this.updateStore}>

              {srvItem}

            </Picker>
          </View>
          <Right style={{ flex: 1, flexDirection: 'column', width: '80%', height: '100%'}}>
            <View style={{ flex: 1, flexDirection: 'row', width: '100%', height: '100%' }}>
              <DatePicker
                style={{ width: '80%', height: 200 }}
                date={this.state.date1}
                mode="date"
                placeholder="first date"
                format="YYYY-MM-DD"
                minDate="2018-04-01"
                maxDate="2030-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ date1: date }) }}
                selected={this.state.date1}
                onChange={this.handleChange = (value) => { this.setState({}) }}
              />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', width: '100%', height: '100%', marginTop: 20 }}>
              <DatePicker
                style={{ width: '80%', height: 200 }}
                date={this.state.date2}
                mode="date"
                placeholder="seconde date"
                format="YYYY-MM-DD"
                minDate="2018-04-02"
                maxDate="2030-01-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: 'absolute',
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={(date) => { this.setState({ date2: date }) }}
                selected={this.state.date2}
                onChange={this.handleChange1}
              />
            </View>
          </Right>
        </View>
        <View style={{ flex: 1, flexDirection: 'row', width: '100%', height: '50%', justifyContent: 'center'}}>

        </View>
        <View style={{ flex: 1, flexDirection: 'row', width: '100%', height: '50%', justifyContent: 'center', marginBottom: 30 }}>
          <Button
            title="Voir l'évolution du prix"
            backgroundColor='steelblue'
            onPress={() => this._handleCompPrixDate()}
          />
        </View>
      </View>
      </View >
  
    )
  }

}

export default CompPrixDate


