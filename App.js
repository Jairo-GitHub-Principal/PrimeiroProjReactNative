
import React,{Component} from "react"; // importando as bibliotecas e componentes

import {
   View,
   Text 
  } from "react-native";


 class App extends Component{ // Criamos a nossa classe App para renderizar nosso projeto
  render(){
    return(
      <View>
        <Text style={{fontSize:20,textTransform:'uppercase',textAlign:'center'}}>Oi Mundo!!!</Text> 
        <Text style={{color:'#3fd4eb',fontSize:16,textAlign:'center'}}>Esse é meu primeiro aplicativo</Text>
        <Text style={{color:'red',fontSize:16,textAlign:'center'}}>Agora vamos estilizar nosso projeto</Text>
      </View>
    )
  }
}

export default App; // Informamos qual classe será renderizada no aplicativo