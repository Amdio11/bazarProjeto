import React, { useState} from 'react';
import { View, Text, Image, ScrollView, SafeAreaView,TouchableOpacity, Button } from 'react-native';
import Header from './components/Header'
import TelaA from './views/TelaA'
import TelaB from './views/TelaB'
import TelaC from './views/TelaC'
import Modal from 'react-native-modal'



//export default class meuApp extends Component {
 function meuApp () {
   const [p1, setP1] = useState(false);
   const [p2, setP2] = useState(false);
   const [p3, setP3] = useState(false);
   const [p4, setP4] = useState(false);
   const [p5, setP5] = useState(false);
   const [p6, setP6] = useState(false);
   const [p7, setP7] = useState(false);
   const [p8, setP8] = useState(false);
   const [p9, setP9] = useState(false);
   
   const abrir1 = () => {
     setP1(!p1);
   };
   const abrir2 = () => {
     setP2(!p2);
   }; 
   const abrir3 = () => {
     setP3(!p3);
   };
   const abrir4 = () => {
     setP4(!p4);
   }; 
   const abrir5 = () => {
     setP5(!p5);
   };
   const abrir6 = () => {
     setP6(!p6);
   }; 
   const abrir7 = () => {
     setP7(!p7);
   };
   const abrir8 = () => {
     setP8(!p8);
   }; 
   const abrir9 = () => {
     setP9(!p9);
   }; 
  //render() {
    return(
     <ScrollView>
    <SafeAreaView>
    <Header>BAZZAR</Header>
      <View style={{backgroundColor: 'black'}}>
       <Text style={{fontSize:20, color:'red', marginLeft:10}}>Até 50% de desconto</Text>
      </View>
      
      <Button title="Abrindo" onPress={abrir1} />
      <Modal isVisible={p1}>
        <View style={{flex:1, backgroundColor:'white'}}>
          <Text>Ola</Text>
          <Text>Bem-vindo ao nosso BAZZAAR</Text>
            <Button title="Fechando modal" onPress={abrir1} />
        </View>
      </Modal> 
    
      <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor:'black'}}>
        <TouchableOpacity onPress={abrir2}>
        <Image 
          style={{width:380, height:200}}
          source={require('./images/react-06.jpg')}
        />
        </TouchableOpacity>
      </View>

      <Modal isVisible={p2}>
        <View style={{backgroundColor: 'white'}}>
          <Text>Ola</Text>
          <Text>Bem-vindo ao nosso BAZZAAR</Text>
          <Button title="Bye" onPress={abrir2} />
          </View>
      </Modal>
      
      <TelaA/>
      
      <View style={{flexDirection:'row', justifyContent:'center', backgroundColor:'black'}}>
      <View>
      <TouchableOpacity onPress={abrir3}>
      <Image 
        style={{width:100, height:100}}
        source={require('./images/react-03.jpg')}
      />
      </TouchableOpacity>
      </View>
      <Modal isVisible={p3}>
        <View style={{backgroundColor: 'white'}}>
          
          <Text>Camisetas</Text>
          <Text>variedades de</Text>
          <Text>Cores e tamanhos</Text>
          <Button title="Bye" onPress={abrir3} />
        </View>
      </Modal>
      <View>
      <TouchableOpacity onPress={abrir4}> 
      <Image 
        style={{width:100, height:100}}
        source={require('./images/react-04.jpg')}
      />
      </TouchableOpacity>
      </View>
      <Modal isVisible={p4}>
        <View style={{backgroundColor: 'white'}}>
          <Text>Acessorios feminino e masculino</Text>
          
          <Button title="Bye" onPress={abrir4} />
        </View>
      </Modal>

      <View>
      <TouchableOpacity onPress={abrir5}>
      <Image 
        style={{width:100, height:100}}
        source={require('./images/react-02.jpg')}
      />
      </TouchableOpacity>
      </View>
      <Modal isVisible={p5}>
        <View style={{backgroundColor: 'white'}}>
          <Text>Oculos de sol</Text>
          <Text>infantil e adulto</Text>
          
          <Button title="Bye" onPress={abrir5} />
        </View>
      </Modal>

      <View>
      <TouchableOpacity onPress={abrir6}>
      <Image 
        style={{width:100, height:100}}
        source={require('./images/react-01.jpg')}
      />
      </TouchableOpacity>
      </View>
      <Modal isVisible={p6}>
        <View style={{backgroundColor: 'white'}}>
          <Text>Mochilas</Text>
          <Text>Casual</Text>
          <Text>Adultos e infanto/juvenil</Text>
          
          
          <Button title="Bye" onPress={abrir6} />
        </View>
      </Modal>
      </View>

        <TelaB/>
        <View style={{flexDirection:'row', justifyContent:'center', backgroundColor:'black'}}>
        <View>
        <TouchableOpacity onPress={abrir7}>
        <Image 
        style={{width:100, height:100}}
        source={require('./images/react-05.jpg')}
      />
      </TouchableOpacity>
      </View>
      <Modal isVisible={p7}>
        <View style={{backgroundColor: 'white'}}>
          <Text>Moda</Text>
          <Text>Infanto/Juvenil</Text>
          
          
          <Button title="Bye" onPress={abrir7} />
        </View>
      </Modal>
      <View>
      <TouchableOpacity onPress={abrir8}>
      <Image 
        style={{width:100, height:100}}
        source={require('./images/react-06.jpg')}
      />
        </TouchableOpacity>
      </View>  
        <Modal isVisible={p8}>
        <View style={{backgroundColor: 'white'}}>
          <Text>Variedade</Text>
          <Text>Qualidade</Text>
          
          
          <Button title="Bye" onPress={abrir8} />
        </View>
      </Modal>
      <View>
      <TouchableOpacity onPress={abrir9}>
      <Image 
        style={{width:100, height:100}}
        source={require('./images/react-03.jpg')}
      
        />
        </TouchableOpacity>
        </View>
        <Modal isVisible={p9}>
        <View style={{backgroundColor: 'white'}}>
          <Text>Inspiração</Text>
          <Text>Novos Modelos</Text>
          <Button title="Hide modal" onPress={abrir9} />
        </View>
      </Modal>
        </View>

        <TelaC />
        
        <Text style={{fontSize: 10, justifyContent:'center', backgroundColor:'black', color: 'white'}}>nossos produtos são inspirados pelas pessoas que
          estão à nossa volta, com suas belezas e qualidades.
          Produtos de bom gosto especialmente para voce.
          Descubra our story e aproveite as promoções.</Text>
        <View style={{flexDirection:'row', justifyContent:'center', backgroundColor:'black',}}>
          <Image 
            style={{width:100, height:100}}
            source={require('./images/react-03.jpg')}
          /> 
        </View>
        <View></View>
        <Text style={{justifyContent:'center', backgroundColor:'black', color: 'white'}}></Text>
        <Text style={{justifyContent:'center', backgroundColor:'black', color: 'white'}}> Rua Eusebio 10</Text>
        <Text style={{justifyContent:'center', backgroundColor:'black', color: 'white'}}> Centro, Cidade das Águas</Text>
        <Text style={{justifyContent:'center', backgroundColor:'black', color: 'white'}}> Aberto de segunda a sexta das 10:00 as 21:00</Text>
        <Text style={{justifyContent:'center', backgroundColor:'black', color: 'yellow'}}> Desenvolvido por ®Amdio Rocha</Text>
        <Text style={{justifyContent:'center', backgroundColor:'black', color: 'yellow'}}> Todos os direitos reservados 10/Outubro/2021</Text>
        
       

    </SafeAreaView>
    </ScrollView>
    )
  }
  export default meuApp;
