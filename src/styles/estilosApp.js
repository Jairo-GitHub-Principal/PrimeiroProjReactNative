
import { StyleSheet } from "react-native"


var estilosText = StyleSheet.create({ // variavel criada para armazenar os styles que sera criado para aplicar nos componentes é o mesmo que criar as tags styles, 
    // no elemento html, e na folha de estilo definir varias propriedades para aquela classe, note que aqui dentro desta variavel, 
    // seria nossa folha de estilo ou nosso arquivo .css, onde usaremos o seletor da classe e aplicaremos na mesma as diversas propriedades que nos
    // interessar  para estilizar um componente


text1:{color:'green',textAlign:'center',borderWidth:2,borderColor:'brown',backgroundColor:'orange'},
text2:{color:'blue',textAlign:'center',borderWidth:2,borderColor:'black',backgroundColor:'pink'},
text3:{color:'red',textAlign:'center',borderWidth:2,borderColor:'#DC143C',backgroundColor:'#7CFC00'},

})

/* observe que no implementação do grupo de estilos abaixo estamos usando const para o tipo de varivel, que é o mais comun para esse 
tipo de implementação, no grupo de  estilos acima usamos var,  usamos var isso foi so pra mostrar que podemos usar tipos diferentes de variaveis 
para esse fim, mais o mais indicado para essa finalida é const*/
const estiloViews = StyleSheet.create({
view1:{margin:20, padding:10, backgroundColor:'black'},
view2:{borderWidth:2,borderColor:'black', padding:30,backgroundColor:'#C71585' }
})

let testos = StyleSheet.create({
tamanhoText:{fontSize:20},
fonteText:{fontFamily:'Open Sans', fontWeight:'bold'}

})

const textoFicaMaiusculo = StyleSheet.create({
textMaiusculo:{textTransform:'uppercase'}
})


// para exportar um grupo de estilos usamos o seguinte codigo: "expot default estilosText " mais como queremos exportar mais de um grupo,
// usaremos o seguinte codigo:

export{estilosText,estiloViews,testos,textoFicaMaiusculo}