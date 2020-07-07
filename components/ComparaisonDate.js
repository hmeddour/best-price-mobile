import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'react-native-elements' // 0.19.0
import "@expo/vector-icons"; // 6.3.0
import { Table, TableWrapper, Row } from 'react-native-table-component';

import styles from './Styles/StyleCompListe'

class ComparaisonDate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Date', 'Prix'],
      widthArr: [100, 100]
    }
  }

  static navigationOptions = {
    title: "Tableau des prix par dates"
  };

  render() {
    const state = this.state;
    const tableData = [];
    for (let i = 0; i < global.compare.length; i++) {
      const rowData = [];
      for (let j = 0; j < 2; j++) {
        var dateTime = global.compare[i].date.date;
        var dateRes = dateTime.substring(0, 10);
        rowData.push(dateRes)
        rowData.push(global.compare[i].prix + '€')
      }
      tableData.push(rowData)
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
          </View>
        </View>
        <View style={styles.container}>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderColor: '#C1C0B9' }}>
                  {
                    tableData.map((rowData, index) => (
                      <Row
                        key={index}
                        data={rowData}
                        widthArr={state.widthArr}
                        style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
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

export default ComparaisonDate
