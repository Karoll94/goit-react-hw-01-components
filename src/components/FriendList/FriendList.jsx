//importación de los prototipos
import PropTypes from 'prop-types';
//importación de los Estilos
import style from './FriendList.module.css';
//Importación del Json
import data from '../../data/friends.json';

//Creación del marcado HTML de la lista de los amigos
export const FriendList = () => {
    return (
        <div className={style.container}>
        <ul class={style.friend_list}>
                {data.map((dt) =>(
                    <li className={style.item} key={dt.id}>
                        <span
                            className={`${style.status} ${
                            dt.isOnline
                                ? style["status--active"]
                                : style["status--inactive"]
                            }`}
                        />
                        <img class={style.avatar} src= {dt.avatar} alt="User avatar" width="48" />
                        <p className={style.name}>{dt.name}</p>
                    </li>
                ))}
        </ul>
        </div>
    )
}

//Definicion de los PropTypes
FriendList.prototype = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number
}