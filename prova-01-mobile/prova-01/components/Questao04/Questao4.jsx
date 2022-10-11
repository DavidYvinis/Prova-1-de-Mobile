import { View, Text, Image, Button, StyleSheet } from "react-native"
import { useState, useEffect } from "react"

const Questao4 = ()=> {
    const [res,setRes] = useState([])
    const [pais,setPaises] = useState([])

    function comp(){
      var qtd = 0
      var i = 0
      for(var i=0;i<pais.length;i++){
        if( qtd< pais[i].population){
          qtd = pais[i].population
          posicao = i
          setRes(pais[i].name)
        }
      }
    }

    useEffect(
        ()=>{
           fetch(`https://restcountries.com/v2/region/africa?fields=name,population`)
           .then((result)=>result.json())
           .then(
              (res) =>{
                setPaises(res)
              }
           )
        }
    )

    return (
        <View style={{backgroundColor:'white', marginTop:200}}>
          <Text style={{fontSize:20}}>Paises:</Text>
          {pais.map((number) => 
          <Text style={{fontSize:14, }}>{number.name} {number.qtd}</Text>)}
            <View  style={{margin: 20}}>
            <Button title={'Mais Populoso'} onPress={comp}></Button>
            </View>
            <Text style={{fontSize:20}}>Resultado:{res}</Text>
        </View>

    )
}

export default Questao4;