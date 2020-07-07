import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    
    styleEntete: {
        flexDirection: 'column',
        width: '100%',
        height: '25%',
      },
    
      styleHeader : {
        width: '100%',
        height: '35%',
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
    
      styleBody: {
        flexDirection: 'column',
        width: '100%',
        height: '75%',
      },
    
      date1: {
        flex: 1,
        flexDirection: 'row',
    
        
      },
      date2: {
        flex: 1,
        flexDirection: 'row',
      },
    
      styleButton: {
        justifyContent: 'center', 
        top: '5%',
        right: '5%',
      },
    
      text: {
        fontSize: 30,
        color: 'red'
     }
})