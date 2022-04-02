import React from 'react';
import {View,Text,TouchableOpacity,StatusBar,Image,ScrollView,} from 'react-native';
import styles from './styles-page1';

export default function page1 ({navigation}){   
        StatusBar.setBackgroundColor('#000000');
        return(
            <ScrollView style={{backgroundColor: '#000000'}}>
            <View style={styles.ContainerView}>
                <Image style={styles.titleImage} source={require('../Assets/Guide.png')} />
            </View>                   
                <View style={styles.boxsView}>
                    <TouchableOpacity onPress={() => navigation.navigate("aguaDoce")}>
                        <Text style={styles.itensText}>PEIXES DE ÁGUA DOCE</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxsView}>
                    <TouchableOpacity onPress={() => navigation.navigate("aguaSalgada")}>
                        <Text style={styles.itensText}>PEIXES DE ÁGUA SALGADA</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.boxsView}>
                    <TouchableOpacity onPress={() => navigation.navigate("camarão")}>
                        <Text style={styles.itensText}>CAMARÕES</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    
}