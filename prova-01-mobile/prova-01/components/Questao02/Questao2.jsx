import {Text, View, Button, TextInput} from 'react-native';
import {useState} from 'react'

const Questao2 = () => {
  const [a, setA1] = useState(0)
  const [b, setB1] = useState(0)
  const [resp, setResp] = useState(0)

  function soma(){
    let x = parseInt(a)
    let y = parseInt(b)
    setResp(x+y)
  }

  function sub(){
    let x = parseInt(a)
    let y = parseInt(b)
    setResp(x-y)
  }

  function mult(){
    let x = parseInt(a)
    let y = parseInt(b)
    setResp(x*y)
  }

    function div(){
    let x = parseInt(a)
    let y = parseInt(b)
    setResp(x/y)
  }


  return (
    <View>
     <View style={{flex:1, flexDirection:'row', alignContent:'center'}}>
        <View style={{margin:8}}>
          <TextInput style={{backgroundColor:'white'}}
            placeholder={"A1"}
            onChangeText= {(txt)=> setA1(txt)}
          />
         </View> 

        <View style={{margin:8}}>
          <TextInput style={{backgroundColor:'white'}}
            placeholder={"B1"}
            onChangeText= {(txt)=> setB1(txt)}
          />
         </View>    
     </View>
       <View style={{flex:1, flexDirection:'row', alignContent:'center'}}>

      <View style={{margin:4}}>
        <Button title = "+" onPress={soma}/>
      </View>

      <View style={{margin:4}}>
        <Button title = "-" onPress={sub}/>
      </View>

      <View style={{margin:4}}>
        <Button title = "*" onPress={mult}/>
      </View>
    
      <View style={{margin:4}}>
        <Button title = "/" onPress={div}/>
      </View>

      <View>
        <Text>Resultado: {resp}</Text>
      </View>
      
    </View>


    </View>
     
  );
}

export default Questao2;