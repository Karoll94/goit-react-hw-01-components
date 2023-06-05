//importación de los prototipos
import PropTypes from 'prop-types';
//importación de los Estilos
import style from './Perfil.module.css'
//Importación del Json
import data from '../../data/user.json';

//Función que crea el contenedor de la tarjeta del perfil
//y todo el marcado HTML
export const Perfil = () =>{
  return(
  <div className={style.profile}>
  <div className={style.description}>
    <img className={style.avatar}
      src={data.avatar}
      alt={data.tag}
    />
    <p className={style.name}>{data.username}</p>
    <p className={style.tag}>@{data.tag}</p>
    <p className={style.location}>{data.location}</p>
  </div>

  <ul className={style.stats}>
    <li className={style.stats_item}>
      <span className={style.label}>Followers</span>
      <span className={style.quantity}>{data.stats.followers}</span>
    </li>
    <li className={style.stats_item}>
      <span className={style.label}>Views</span>
      <span className={style.quantity}>{data.stats.views}</span>
    </li>
    <li className={style.stats_item}>
      <span className={style.label}>Likes</span>
      <span className={style.quantity}>{data.stats.likes}</span>
    </li>
  </ul>
</div>
)
}

//Definición de los PropTypes
Perfil.propTypes = {
  username: PropTypes.string.isRequired,
  tag:PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};



