import React from  'react';

import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity, Animatedm, ImageBackground, Animated } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

import styles from './styles-especie';

export default function tambaqui({navigation}) {
    const imageOri = [
      {
        url:'https://panoramadaaquicultura.com.br/wp-content/uploads/2021/01/CAPA_TAMBAQUI4.jpg'
      },
      {
        url:'https://brasilagosto.org/wp-content/uploads/2019/06/pargo.jpg'
      },
    ];
    const imageFraude = [
      {
        url: 'https://s.cornershopapp.com/product-images/2704630.jpg?versionId=QiY6TCO9.uupJe.vmCCGjMj0d_7NPD44'
      }
    ]
    return(
      <SafeAreaView style={styles.container}>    
        <View style={styles.boxTitle}>
            <Text style={styles.textTitle}>Tambaqui</Text>
        </View>
        <View style={styles.boxContainer}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={{maxWidth: "100%", width: 370,}}>
                <ImageViewer style={styles.imageView} 
                imageUrls={imageOri} />
            </View>
            </ScrollView> 
        </View>

        <View style={styles.boxFraude}>
            <Text style={styles.textFraude}>
            Substituição da espécie:
            </Text>
        </View> 
        
        <View style={styles.boxContainer}>
            <ScrollView horizontal={true}>
                <View style={styles.boxImage}>
                    <Text style={styles.textImage}>Tambatinga</Text>
                    <ImageViewer style={styles.imageView} 
                    imageUrls={imageFraude} />
                </View>
            <View style={styles.boxImage}>
            <Text style={styles.textImage}>Pacu</Text>
                <ImageViewer style={styles.imageView} 
                imageUrls={imageFraude} />
            </View>
            <View style={styles.boxImage}>
                <Text style={styles.textImage}>Página</Text>
                <ImageViewer style={styles.imageView} 
                imageUrls={imageFraude} />
            </View>                
            </ScrollView> 
        </View>
        <View style={styles.boxMais}>
            <TouchableOpacity onPress={() => navigation.navigate("LinkTam")}>
                <Text style={styles.textMais}>Mais</Text>
            </TouchableOpacity>
        </View>
      </SafeAreaView>
);
};