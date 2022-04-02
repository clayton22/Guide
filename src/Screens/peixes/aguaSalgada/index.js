import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image } from 'react-native';

import styles from './styles-salgada';

export default function PeixesAguaSalgada({navigation}) {  
        return(            
            <View style={styles.Container}> 
                <ScrollView>                 
                    <View style={styles.boxContener}>                    
                        <View style={styles.boxtitle}>                            
                            <Text style={styles.nomeTitle}>PESCADA AMARELA</Text>
                        </View>
                        <View style={styles.boxCaracteristicas}>
                                <Text style={styles.titleFeature}>CARACTERÍSTICAS:</Text>
                        </View>                      
                        <View style={styles.boxImage}>
                            <TouchableOpacity onPress={() => navigation.navigate('PesAmarela')}>
                                <Image style={styles.image}
                                source={require('../../../Assets/salgado/PescadaAmarela.png')} />
                            </TouchableOpacity> 
                            <View style={styles.boxFeature}>                              
                                <Text style={styles.textFeature}>
                                    Coloração Amarelada, um tanto dourada. Boca terminal ampla, com
                                    nadadeiras de raios duros e moles. Peso médio de comercialozação 20 Kg.
                                </Text>
                            </View>
                        </View>      
                    </View>
                    <View style={styles.boxContener}> 
                        <View style={styles.boxtitle}>
                            <Text style={styles.nomeTitle}>PARGO</Text>
                        </View>
                        <View style={styles.boxCaracteristicas}>
                            <Text style={styles.titleFeature}>CARACTERÍSTICAS:</Text>
                        </View>
                        <View style={styles.boxImage}>
                            <TouchableOpacity onPress={() => navigation.navigate('Pargo')}>
                                <Image style={styles.image}
                                source={require('../../../Assets/salgado/Pargo.png')} />
                            </TouchableOpacity>
                            <View style={styles.boxFeature}>
                                <Text style={styles.textFeature}>
                                    Coloração avermelhada com corpo arredondado e verticalmente achatado, além de dentes caninos. 
                                    Peso médio de comercialização Kg 1,2g,                           
                                    </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.boxContener}> 
                        <View style={styles.boxtitle}>
                            <Text style={styles.nomeTitle}>SERRA</Text>
                        </View>
                        <View style={styles.boxCaracteristicas}>
                            <Text style={styles.titleFeature}>CARACTERÍSTICAS:</Text>
                        </View>
                        <View style={styles.boxImage}>
                            <TouchableOpacity onPress={() => navigation.navigate('Pargo')}>
                                <Image style={styles.image}
                                source={require('../../../Assets/salgado/Pargo.png')} />
                            </TouchableOpacity>
                            <View style={styles.boxFeature}>
                                <Text style={styles.textFeature}>
                                    Coloração avermelhada com corpo arredondado e verticalmente achatado, além de dentes caninos. 
                                    Peso médio de comercialização Kg 1,2g,                           
                                    </Text>
                            </View>
                        </View>
                    </View>
            </ScrollView>  
            </View>                
            
        );
}