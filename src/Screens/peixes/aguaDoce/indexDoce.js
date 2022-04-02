import React from 'react';
import { View, Text, ScrollView, TouchableOpacity,Image, SafeAreaView} from 'react-native';

import styles from './styles-aguaDoce';

export default function page2({navigation}) {
  return(
    <View style={styles.Container}>
      <ScrollView style={{padding: 10,}}> 
      <SafeAreaView> 
        <View style={styles.boxContener}> 
        <Text style={styles.nameTitle}>TAMBAQUI</Text>     
          <View style={styles.boxCaracteristicas}>
            <Text style={styles.titleFeature}>CARACTERÍSTICAS:</Text>
          </View>                     
          <View style={styles.boxImage}>
            <TouchableOpacity onPress={() => navigation.navigate('Tambaqui')}>
              <Image style={styles.image}
                source={require('../../../Assets/doce/Tambaqui.png')} /> 
            </TouchableOpacity>
            <View style={styles.boxFeature}>
              <Text style={styles.textFeature}>
                Peixe de escamas com corpo romboidal. Dentes grandes, coloração parda, na metade superior 
                e preta na inferior. Peso médio para comeciazação 2.8 Kg.
              </Text>
            </View>
          </View>                       
        </View>
        
        <View style={styles.boxContener}> 
          <View style={styles.boxtitle}>
            <Text style={styles.nameTitle}>PIRARUCU</Text>
          </View>
          <View style={styles.boxCaracteristicas}>
            <Text style={styles.titleFeature}>CARACTERÍSTICAS:</Text>
          </View>
          <View style={styles.boxImage}>
            <TouchableOpacity onPress={() => navigation.navigate('Facial')}>
              <Image style={styles.image}
              source={require('../../../Assets/doce/Pirarucu.png')} />
            </TouchableOpacity>
            <View style={styles.boxFeature}>
              <Text style={styles.textFeature}>
              Coloração escuram, tem forma cilíndrica e é coberto de escams largas e fortes, com cabeça alongada, achatada e pequena.
              Peso médio de comecialização 35 Kg.
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.boxContener}> 
          <View style={styles.boxtitle}>
            <Text style={styles.nameTitle}>SURUBIM</Text>
          </View>
          <View style={styles.boxCaracteristicas}>
            <Text style={styles.titleFeature}>CARACTERÍSTICAS:</Text>
          </View>
          <View style={styles.boxImage}>
            <TouchableOpacity onPress={() => navigation.navigate('Surubim')}>
              <Image style={styles.image}
              source={require('../../../Assets/doce/Surubim.png')} />
            </TouchableOpacity>
            <View style={styles.boxFeature}>
              <Text style={styles.textFeature}>
              Coloração acinzentada, com manchas arredondadas pretas como se fossem pintas e dorso branco. 
              Cabeça grande e achatada. Peso médio de comercialização 2 kg.
              </Text>
            </View> 
          </View>
        </View>

        <View style={styles.boxContener}> 
          <View style={styles.boxtitle}>
            <Text style={styles.nameTitle}>SURUBIM</Text>
          </View>
          <View style={styles.boxCaracteristicas}>
            <Text style={styles.titleFeature}>CARACTERÍSTICAS:</Text>
          </View>
          <View style={styles.boxImage}>
            <TouchableOpacity onPress={() => navigation.navigate('Surubim')}>
              <Image style={styles.image}
              source={require('../../../Assets/doce/Surubim.png')} />
            </TouchableOpacity>
            <View style={styles.boxFeature}>
              <Text style={styles.textFeature}>
              Coloração acinzentada, com manchas arredondadas pretas como se fossem pintas e dorso branco. 
              Cabeça grande e achatada. Peso médio de comercialização 2 kg.
              </Text>
            </View> 
          </View>
        </View>
        </SafeAreaView>
      </ScrollView>
     
    </View>
  );
}