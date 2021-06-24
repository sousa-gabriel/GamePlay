//usado para funções que são usadas em varios lugares no mesmo app
//comando para instalar uma lib para lidar com a SVG (expo install react-native-svg)
// comando para instalar uma lib que faz os SVG serem um componente (yarn add --dev react-native-svg-transformer)
// usar o site como exemplo para configurar https://www.npmjs.com/package/react-native-svg-transformer

import RankedSvg from '../assets/ranked.svg';
import DueloSvg from '../assets/duel.svg';
import FunSvg from '../assets/fun.svg';
import TrainingSvg from '../assets/training.svg';

export const categories =[
    {id:'1', title:'Ranqueada', icon: RankedSvg},
    {id:'2', title:'Duelo 1x1', icon: DueloSvg},
    {id:'3', title:'Diversão', icon: FunSvg},
    {id:'4', title:'Treino', icon: TrainingSvg}
]