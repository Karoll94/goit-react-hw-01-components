//importación de los prototipos
import PropTypes from 'prop-types';
//importación de los Estilos
import style from './TransactionHistory.module.css';
//Importación del Json
// import data from '../../data/transactions.json';


//Creación de la función y su marcado HTML
//Se pasa por props la variable que contiene los atributos del
//transaction.json
export const TransactionHistory = ({transaction}) => {
    return(
        <div className={style.container}>
            <table className={style.transaction_history}>
                <thead className={style.title}>
                    <tr className= {style.title_item}>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody className={style}>
                    {transaction.map((dt) => (
                        <tr className= {style.data} key={dt.id}>
                            <td>{dt.type}</td>
                            <td>{dt.amount}</td>
                            <td>{dt.currency}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

//Definición de los Proptypes
TransactionHistory.propTypes = {
    id: PropTypes.string,
    type: PropTypes.string,
    amount: PropTypes.number,
    currency: PropTypes.string
};
