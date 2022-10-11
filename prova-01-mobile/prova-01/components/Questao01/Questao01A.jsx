import {Text, View} from 'react-native';

const Questao01A = (props) => {
  return (
    <View>
    <Text>Nome: David Yvinis</Text>
    <Text>Sobrenome: Martins de Queiroz</Text>
    <Text>Curso: DD</Text>
    {props.children}
    </View>
  );
};

export default Questao01A;