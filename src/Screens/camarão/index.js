import React from 'react';

import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles-camarao';

export default function Camarao({navigation}) {   
        return(
            <View style={styles.Container}>
                <ScrollView>
                    <View style={styles.boxTitle}>
                        <Text style={styles.textTitle}>CAMARÃO CINZA</Text>
                    </View>
                    <View style={styles.boxContent}>
                        <Image style={styles.image}
                            source={require('../../Assets/camarão/camaraoCinza.jpg')} /> 
                        <Text style={styles.textContent}>
                            Conhecido como camarão da pata branca, tem grande tolerância à variações e à extremos de salinidade. O 
                            machos atingem a maturidade sexual medindo em média 17 cm e pesando em torno de 20 g e as fêmeas
                             medindo cerca de 23 cm e com peso de 28 g
                        </Text>
                    </View> 
                    <View style={styles.boxTitle}>
                        <Text style={styles.textTitle}>CAMARÃO ROSA</Text>
                    </View> 
                    <View style={styles.boxContent}>
                        <Image style={styles.image}
                            source={require('../../Assets/camarão/camaraoRosa.jpg')} />                        
                        <Text style={styles.textContent}>
                            Conhecido vulgarmente como camarão lixo,  camarão vermelho  ou cabeçudo, 
                            apresenta a costa ventral quase reta ou ligeiramente curva
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate("Link")}>
                        <View style={styles.box}>
                            <View style={styles.bottomFraude}>
                                <Text style={styles.textFraude}>
                                    FRAUDE
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </ScrollView>  

            </View>
        );
} 