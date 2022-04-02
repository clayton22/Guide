import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 8,
    },
    boxTitle: {
        marginTop: 10,
        backgroundColor: '#000044',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 6,        
    },
    textTitle: {
        color: '#FFFFFF',
        fontSize: 34,
        
    },
    boxContainer: {
       flexDirection: 'row',
        flex:1,
        padding: 8,
        maxHeight: '35%',
        
    },
    boxImage: {
        marginTop: 5,
        height: '92%',
        width: 340,
        maxWidth: '100%',
        borderRadius: 10,
        marginRight: 20,
        alignItems: 'center',
        borderColor:  '#000044',
        borderWidth: 0.6,
        

    },
    image: {
        height: '100%',
        width: '75%',
    },
    boxFraude: {
        marginTop: 10,
        marginBottom: 10,
    },
    textFraude: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Fire Colde',
    },
    textImage: {
        fontSize: 20,
    },
    boxMais: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3%',
    },
    textMais: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'red',

    },
});

export default styles;