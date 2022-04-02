import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({    
    Container:{
        flex: 1,
        backgroundColor: '#999999',
        padding: 8, 
             
    },
    boxContener:{
        height: 160,
        backgroundColor: '#F0F0FF',       
        borderWidth: 0.5,
        borderColor: '#0505A5',
        marginBottom: 1,
        borderRadius: 6,  
        marginTop: 20,  
        //alignItems: "center"   
       
        
    },
    boxImage: {       
        padding: 2,
        alignSelf: 'baseline',
        marginLeft: 6,    
        borderRadius: 8,
        flexDirection: 'row',
        flex: 1,
    },
    image:{           
        width: 94,
        height: 90,
        marginTop: 1,  
        borderRadius: 6,              
    },
    boxtitle:{
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    nameTitle: {
        fontSize: 16,        
        fontWeight: 'bold',
        marginTop: 6, 
        marginLeft: 8,   
    },
    boxCaracteristicas: {
        alignSelf: 'baseline',
    },
    boxFeature:{  
        flex: 1,        
    },
    titleFeature:{
        marginLeft: 10,
        fontSize: 14,
    },
    textFeature:{
        marginLeft: 8,
        alignItems: 'flex-end',
        fontSize: 15,
    },
    boxSearch: {
        flexDirection: 'row',
    },
    inputSearch: {
        flex: 3,
        borderWidth: 0.8,
        borderRadius: 14, 
        borderColor: '#b9b9b9',
    },
    buttonSearch: {
        flex: 1,
        borderWidth: 0,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'baseline',       
        marginLeft: 10,
    },
    imageSearch: {
        height: 45,
        width: 45,
    },
    
});
export default styles;