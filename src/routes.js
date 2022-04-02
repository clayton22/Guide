import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import home from "./Screens/Home";
//freshwater fish
import peixeAguaDoce from "./Screens/peixes/aguaDoce/indexDoce";
  //Fish tambaqui
  import tambaqui from "./Screens/peixes/aguaDoce/espécie/tambaqui";
  import linkTam from "./Screens/peixes/aguaDoce/espécie/links/tambatinga"
//saltwater fish
import peixeAguaSalgada from "./Screens/peixes/aguaSalgada/index";

//shrimp
import camarão from "./Screens/camarão/index";
import link from "./Screens/camarão/fraude/link";
//FacialTeste
import facial from "./Screens/Facial"
const Stack = createNativeStackNavigator();
export default function Guide() {
  return(
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen  name="Home" component={home} />
        <Stack.Screen name="aguaDoce" component={peixeAguaDoce} />
        <Stack.Screen name="aguaSalgada" component={peixeAguaSalgada} />
        <Stack.Screen name="camarão" component={camarão} />
        <Stack.Screen name="Link" component={link} />

        <Stack.Screen name="Tambaqui" component={tambaqui} />
        <Stack.Screen name="LinkTam" component={linkTam} />

        <Stack.Screen name="Facial" component={facial} />
       
      </Stack.Navigator>
  );
};