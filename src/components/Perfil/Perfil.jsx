//importación de los prototipos
import PropTypes from 'prop-types';
//importación de los Estilos
import style from './Perfil.module.css'
//Importación del Json
// import data from '../../data/user.json';

//Función que crea el contenedor de la tarjeta del perfil
//y todo el marcado HTML
export const Perfil = ({avatar}) =>{
  return(
  <div className={style.profile}>
  <div className={style.description}>
    <img className={style.avatar}
      src={avatar.avatar}
      alt={avatar.tag}
    />
    <p className={style.name}>{avatar.username}</p>
    <p className={style.tag}>@{avatar.tag}</p>
    <p className={style.location}>{avatar.location}</p>
  </div>

  <ul className={style.stats}>
    <li className={style.stats_item}>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{avatar.stats.followers}</span>
    </li>
    <li className={style.stats_item}>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{avatar.stats.views}</span>
    </li>
    <li className={style.stats_item}>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{avatar.stats.likes}</span>
    </li>
  </ul>
</div>
)
}

//Definición de los PropTypes
Perfil.propTypes = {
  username: PropTypes.string,
  tag:PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number
  }),
};



