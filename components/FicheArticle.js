import React, { Component } from 'react';
import { TouchableHighlight, Text, View, TextInput, StyleSheet,Alert} from 'react-native';
import { Icon, CheckBox ,Card} from 'react-native-elements' // 0.19.0
import {Footer, Content, Left, Right} from 'native-base'
import {Table,TableWrapper,Row} from 'react-native-table-component'
import "@expo/vector-icons"; // 6.3.0
//import '../global';
//import { global } from 'core-js';
import { ScrollView } from 'react-native-gesture-handler';

//importer les styles 
import styles from './Styles/StyleFicheArticle'

export default class FicheArticle extends Component {
 constructor(props) {
   super(props);
   this.state={
     TableHeader:['magasin','address','prix']
   }
  
  
 }
 static navigationOptions = {
   title: "Fiche article"
 }



 render() {
   const state=this.state;
   const Data=[];
   let i=0;
   while (i<global.capture.length)
  {
   
    Data.push(global.capture[i]);
   i++;
 }
 
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
        
       <View style={styles.scrollbar}>
         
          <ScrollView>
        
         <Card
         title={global.article.libelle}
        
         >
       
       <View style={{ flex: 1, flexDirection: 'row' }}>
         <View style={{ flex: 1, flexDirection: 'column' }}>
         <Card
           image={require('../Image/card.gif')}
           imageStyle={{ height:100,width:100,justifyContent: 'center',alignItems: 'center',}}
         >
         </Card>
         </View>
         <Text> </Text>
         <View style={{ flex: 1, flexDirection: 'column' }}>
         <Text style={{ fontFamily: 'serif',fontSize: 20,fontStyle:'italic' }} >Marque:</Text>
         <Text style={{ fontFamily: 'serif',color:'gray' }}>{global.article.marque}</Text>
         <Text style={{ fontFamily: 'serif',fontSize: 20,fontStyle:'italic' }}>Référence:</Text>
         <Text style={{ fontFamily: 'serif',color:'gray' }}>{global.article.codebarres}</Text>
         <Text style={{ fontFamily: 'serif',fontSize: 20,fontStyle:'italic' }}>Taille:</Text>
         <Text style={{ fontFamily: 'serif',color:'gray' }}>{global.article.taille}</Text>
         <Text style={{ fontFamily: 'serif',fontSize: 20,fontStyle:'italic' }}>Poids:</Text>
         <Text style={{ fontFamily: 'serif',color:'gray' }}>{global.article.poids}</Text>
         <Text style={{ fontFamily: 'serif',fontSize: 20,fontStyle:'italic' }}>Couleur:</Text>
         <Text style={{ fontFamily: 'serif',color:'gray' }}>{global.article.couleur}</Text>
         <Text style={{ fontFamily: 'serif',fontSize: 20,fontStyle:'italic' }}>Type:</Text>
         <Text style={{ fontFamily: 'serif',color:'gray' }}>{global.article.type}</Text>
         </View>
        
       </View>
        
       <View style={{ flex: 1, flexDirection: 'row' }}>
           
       <View style={{ flex: 1, flexDirection: 'column' }}>
         <Card
          
         >
         <Text style={{ fontFamily: 'serif',fontSize: 20,fontStyle:'italic' }} >
            Description:
         </Text>
         <Text style={{ fontFamily: 'serif',color:'gray' }}>
         {global.article.description}
         </Text>
         </Card>

         </View>
         
         </View>
         </Card>
         <Card title='Les meilleurs prix'>
       <Table  borderStyle={{borderColor: '#C1C0B9'}} >
         <Row data={state.TableHeader} style={styles.header} textStyle={styles.text}/>
       </Table  >
     
       <Table borderStyle={{borderColor: '#C1C0B9'}} >
               {
                 Data.map((rowData, index) => (
                   <Row
                     key={index}
                     data={rowData}
                     style={[styles.row, index%2 && {backgroundColor: '#F7F6E7'}]}
                     textStyle={styles.text}
                    
                   />
                 ))
               }
       </Table>
      
       </Card>
      
     </ScrollView>
   </View>
 
     

        <Footer style={styles.styleFooter}>
          <Content>
            <Left style= {{width: '50%', height: '40%', justifyContent: 'center', alignContent: 'center'}}>
              <Icon
                name='favorite'
                reverse
                type='heart'
                color='yellow'
                onPress={() => Alert.alert("ajouter au favoris effectuer")} />
            </Left>
          </Content>

          <Content>
            <Right style= {{width: '50%', height: '40%', justifyContent: 'center', alignContent: 'center'}}>
              <Icon
                name='line-chart'
                reverse
                type='font-awesome'
                color='red'
                onPress={() => navigate("CompPrixDate", { screen: "CompPrixDate" })}
              />
            </Right>
          </Content>
        </Footer>

      
      
     </View>


   );
 }
}