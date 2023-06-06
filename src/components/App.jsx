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


export const App = ({user,statistics}) => {
  return (
    <>
      <div style={styleTest}>
        <Perfil user/>
      </div>
      <div>
        <Statistics data/>
      </div>
      <div>
        <FriendList friends/>
      </div>
      <div>
        <TransactionHistory transactions/>
      </div>
    </>
  );
};
