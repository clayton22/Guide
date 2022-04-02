import React from  'react';

import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import styles from './styles-especie';

export default function pescadaAmarela({navigation}) {
    return(
        <View style={styles.container}>
            
            <View style={styles.boxTitle}>
                <Text style={styles.textTitle}>Pescada Amarela</Text>
            </View>
            <View style={styles.boxContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.boxImage}>
                    <Image  style={styles.image}
                    source={require('../../../../assets/salgado/PescadaAmarela/PescadaAmarela.png')}/>
                </View>
                <View style={styles.boxImage}>
                   <Image style={styles.image}
                   source={require('../../../../assets/salgado/PescadaAmarela/Filé.png')} />
                </View>
                <View style={styles.boxImage}>
                    <Text>Página</Text>
                </View>                
                </ScrollView> 
            </View>
            <View style={styles.boxFraude}>
                <Text style={styles.textFraude}>
                Substituição da espécie:
                </Text>
            </View> 
            
            <View style={styles.boxContainer}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity>
                    <View style={styles.boxImage}>
                        <Text style={styles.textImage}>Surubim</Text>
                        <Image  style={styles.image}
                        source={require('../../../../assets/salgado/PescadaAmarela/PescadaAmarela.png')}/>
                    </View>
                </TouchableOpacity>
                <View style={styles.boxImage}>
                <Text style={styles.textImage}>Pacu</Text>
                   <Image style={styles.image}
                   source={require('../../../../assets/doce/Tambaqui/Tambaqui1.png')} />
                </View>
                <View style={styles.boxImage}>
                    <Text>Página</Text>
                </View>                
                </ScrollView> 
            </View>
            <View style={styles.boxMais}>
                <TouchableOpacity>
                    <Text style={styles.textMais}>Mais</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};