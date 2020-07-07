import React, { Component } from 'react';
import { TouchableHighlight,StyleSheet, View, ScrollView, Text } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import { Icon, CheckBox, Button, Card } from 'react-native-elements' // 0.19.0
import "@expo/vector-icons"; // 6.3.0

import '../global.js';
import { global } from 'core-js';

import styles from '../Styles/StyleListeMagasin'

class ListeMagasin extends Component {

    constructor(props) {
        super(props);
        this.state = {
          tableHead: ['Mgasin', 'Adresse', 'Code postale'],
          widthArr: [100, 130, 60]
        }
    }

    static navigationOptions = {
      title: "Tableau des magasins"
    };

      render() {
        const state = this.state;
        const tableData = [];
        for(let i=0; i<global.magasin.length; i++) {
          const rowData = [];
          for(let j=0; j<3; j++) {
            rowData.push(global.magasin[i].nom)
            rowData.push(global.magasin[i].adresse)
            rowData.push(global.magasin[i].codepostale)
          }
          tableData.push(rowData)
        }
        return (

          <View style={{flex: 1, flexDirection: 'column'}}>
    	    <View style={styles.entêteVues}  >
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
          <View style={styles.container}>
            <View>
            </View>
            <ScrollView horizontal={true}>
              <View>
                <Table borderStyle={{borderColor: '#C1C0B9'}}>
                  <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
                </Table>
                <ScrollView style={styles.dataWrapper}>
                  <Table borderStyle={{borderColor: '#C1C0B9'}}>
                    {
                      tableData.map((rowData, index) => (
                        <Row
                          key={index}
                          data={rowData}
                          widthArr={state.widthArr}
                          style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                          textStyle={styles.text}
                        />
                      ))
                    }
                  </Table>
                </ScrollView>
              </View>
            </ScrollView>
          </View>
          </View>
        )
      }
}

export default ListeMagasin