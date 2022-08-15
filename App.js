
import React,{Component} from "react"; // importando as bibliotecas e componentes

import {
   View,
   Text,
   StyleSheet,
  } from "react-native";

  import {estilosText,estiloViews,testos,textoFicaMaiusculo} from './src/styles/estilosApp.js' /** codigo importa os estilos que definimos em estilosApp.js */


 class App extends Component{ // Criamos a nossa classe App para renderizar nosso projeto
  render(){
    return(
      <View >
          <View style={estiloViews.view1}>
              <Text style={{fontSize:20,textTransform:'uppercase',textAlign:'center',borderWidth:2, borderColor:'red',backgroundColor:'yellow'}}>Oi Mundo!!!</Text> 
              <Text style={{color:'#3fd4eb',fontSize:16,textAlign:'center',borderWidth:3,borderColor:'blue', backgroundColor:'green'}}>Esse é meu primeiro aplicativo</Text>
              <Text style={{color:'red',fontSize:16,textAlign:'center',borderWidth:4,borderColor:'green',backgroundColor:'darkblue'}}>Agora vamos estilizar nosso projeto</Text>
           </View>

{/**na  view abaixo observe que usamos colchetes dentro de style, isso é nescessario quando mais de um subgrupo de estilos, para estilizar um elemento
 * observe que ele faz parte de um grupo principal, exemplo: text1 é um subgrupo do grupo principal estilosText, entao estenda que os colchetes são usados
 * quando precisamos usar mais de um subgrupo, seja eles pertencente a um unico grupo principal ou de  grupos de estilos destintos, como no caso 
 * do estilo aplicado no texto "Oi Mundo", foi usado um subgrupo de estilos do grupo principal estiloText, e foi usado 2 subgrupo de estilos
 * do grupo de estilos principal testos, 
 */}
           <View style={estiloViews.view2}>
             <Text style={[estilosText.text1,testos.fonteText,testos.tamanhoText,textoFicaMaiusculo.textMaiusculo]} >Oi Mundo!!!</Text> 
             <Text style={[estilosText.text2,testos.tamanhoText]}>Esse é meu primeiro aplicativo</Text>
             <Text style={[estilosText.text3,testos.fonteText,testos.tamanhoText]}>Agora vamos estilizar nosso projeto</Text>
          </View>
      </View>      
    )
  }
}

export default App; // Informamos qual classe será renderizada no aplicativo