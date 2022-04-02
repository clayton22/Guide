import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 8,
        backgroundColor: '#000000',
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
        maxHeight: '39%',
    },
    imageView: {
        width: "100%",
    },
    boxImage: {
        marginTop: 4,
        height: "100%",
        width: 340,
        maxWidth: '100%',
        borderRadius: 10,
        marginRight: 20,
        alignItems: 'center',
        backgroundColor: '#258235',
    },
    boxFraude: {
        marginTop: '1%',
        marginBottom: '1%',
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
        marginTop: '1%',
    },
    textMais: {
        fontSize: 21,
        fontWeight: 'bold',
        color: 'red',

    },
});

export default styles;