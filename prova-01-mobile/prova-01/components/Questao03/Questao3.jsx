import {View,Text,Button,TextInput} from "react-native"
import {useState, useEffect} from "react"

const Questao3 = ()=> {

    const [id,setId] = useState(0)
    const [poke,setPokemon] = useState([])

    function mais(){
      setId(id + 20)
    }

    useEffect(
        ()=>{
           fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${id}`)
           .then((res)=>res.json())
           .then(
              (resultado) =>{
                setPokemon(resultado.results)
              }
           )
        }
    )

    return (
        <View style={{backgroundColor:'white', marginTop:20}}>
          <Text style={{
            fontSize:25,display:"flex" , justifyContent:'center'}}  >Pokemons:</Text>
            { poke.map((number) => <Text style={{
            fontSize:16,display:"flex" , justifyContent:'center'}} >{number.name}</Text>)}
            <View  style={{margin: 20}}>
            <Button title={'+10 pokemons'} onPress={mais}></Button>
            </View>
        </View>
    )
}

export default Questao3