import { StyleSheet } from 'react-native'
import { Constants, BarCodeScanner, Permissions } from 'expo';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
      },
})