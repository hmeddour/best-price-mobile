import React, { Component } from 'react';
import { Text, StyleSheet, View, ListView, TextInput, ActivityIndicator, Alert, TouchableHighlight } from 'react-native';
import { Icon} from 'react-native-elements' // 0.19.0
import "@expo/vector-icons"; // 6.3.0

export default class Search extends Component {
 constructor(props) {
   super(props);
   this.state = {
     isLoading: true,
     text: '',
  
   }
   this.arrayholder = [] ;
 }

 static navigationOptions = {
  title: "Chercher article",
  drawerIcon: (
    <Icon   
      name='search'
      type='font-awesome'
      color='black'
    />
  ),
 }
 
 
 componentDidMount(text) {
   if(this.state.Text!='')
   {return fetch(global.path+'getArticleByNom/hbjhbjh')
     .then((response) => response.json())
     .then((responseJson) => {
       let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
       this.setState({
         isLoading: false,
         dataSource: ds.cloneWithRows(responseJson),
       }, function() {
         // In this block you can do something with new state.
         this.arrayholder = responseJson ;
       });
     })
     .catch((error) => {
       console.error(error);
     });}else this.arrayholder = [];
    
 }
 GetListViewItem (article_id) {
   const { navigate } = this.props.navigation
   fetch(global.path + 'getArticleById/' + article_id)
    .then((response) => response.json())
    .then((responseJson) => {
    
       global.article = responseJson;
       fetch(global.path + 'getListeCapture/' + article_id)
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
         .catch((error) => {
           console.error(error);
         });    
     
       navigate("FicheArticle", { screen: "FicheArticle" });  

    
    })
    .catch((error) =>{
      console.error(error);
    });







  }
   SearchFilterFunction(text){
   if(text!='')

   {fetch(global.path+'getArticleByNom/'+text)
   .then((response) => response.json())
   .then((responseJson) => {
     let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
     this.setState({
       isLoading: false,
       dataSource: ds.cloneWithRows(responseJson),
     }, function() {

       // In this block you can do something with new state.
       this.arrayholder = responseJson ;

     });
   })
   .catch((error) => {
     console.error(error);
   });}else this.arrayholder = [];




    const newData = this.arrayholder.filter(function(item){
        const itemData = item.libelle.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
    })
    this.setState({
        dataSource: this.state.dataSource.cloneWithRows(newData),
        text: text
    })
}
 ListViewItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }
 render() {
    const { navigate } = this.props.navigation
   if (this.state.isLoading) {
     return (
       <View style={{flex: 1, paddingTop: 20}}>
         <ActivityIndicator />
       </View>
     );
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
  	
     <View style={styles.MainContainer}>
     <TextInput
      style={styles.TextInputStyleClass}
      value={this.state.text}
      onChangeText={(text) => this.SearchFilterFunction(text)}
     
      underlineColorAndroid='transparent'
      placeholder="Search Here"
       />
       <ListView
         dataSource={this.state.dataSource}
         renderSeparator= {this.ListViewItemSeparator}
         renderRow={(rowData) => <Text style={styles.rowViewContainer}
         onPress={this.GetListViewItem.bind(this,rowData.id)} >{rowData.libelle}</Text>}
         enableEmptySections={true}
         style={{marginTop: 10}}
       />
     </View>
     </View>
   );
 }
}