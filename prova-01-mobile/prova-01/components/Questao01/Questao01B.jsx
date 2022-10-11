import {Text, View} from 'react-native';

const Questao01B = (props) => {
  const lista = ['Projeto 4', 'Design e Inovação', 'Mobile', 'Desenho 2']

  return (
    <View>
    {lista.map((disciplina) => (
      <ul>{disciplina}</ul>
    ))}
    
    </View>
  );
};

export default Questao01B;