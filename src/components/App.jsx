//importacion del componente Perfil
import { Perfil } from 'components/Perfil/Perfil';
//Importación del componente Statistics
import { Statistics } from 'components/Statistics/Statistics';
//Importación del componente FriendList
import { FriendList } from 'components/FriendList/FriendList';
//Importación del componente TransactionHistory
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';


const styleTest = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#010101',
}

// Se llama como props la varible data que posee todos los atributos del
// user.Json. 
export const App = ({data, percentage, avatar, amount}) => {
  return (
    <>
      <div style={styleTest}>
        {/* En la etiqueta perfil se declara una variable avatar que guardará
        los props y se llamaran en el componente Perfil */}
        <Perfil avatar={data}/> 
      </div>
      <div>
        <Statistics data ={percentage}/>
      </div>
      <div>
        <FriendList friend ={avatar}/>
      </div>
      <div>
        <TransactionHistory transaction = {amount}/>
      </div>
    </>
  );
};
