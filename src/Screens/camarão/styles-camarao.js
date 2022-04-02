import { StyleSheet } from 'react-native';

const styled= StyleSheet.create({
    Container: {
        flex:1,
        padding: 10,
        backgroundColor: '#cccccc',
    },
    boxTitle: {
        backgroundColor: '#000044',
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        marginTop: 30,
        borderRadius: 6,
    },
    textTitle: {
        fontWeight: 'bold',
        fontSize: 30,
        color: '#dddddd',
    },
    box: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
    },
    bottomFraude:{
        backgroundColor: '#ab0909',
        marginTop: 35,       
        justifyContent: 'center',
        alignItems: 'center',
        height: 65,
        width: 180,
        borderRadius: 6,  
    },
    textFraude: {
        color: '#ffffff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    boxContent: {
        marginTop: 16,
        flexDirection: 'row',
    },
    image: {
        height: 145,
        width: 145,
    },
    textContent: {
        flex: 1,
        marginLeft: 15,
        fontSize: 16,
    },
})

export default styled;