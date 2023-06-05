//importación de los prototipos
import PropTypes from 'prop-types';
//importación de los Estilos
import style from './Statistics.module.css';
//Importación del Json
import data from '../../data/data.json';
// import getRandomHexColor from '../../components/ColorRandom/colorRandom';


//Función para generar el color aleatorio
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  
//Crear función que generará marcado HTML
//de la tarjeta de estadisticas
export const Statistics = () => {
    return(
      
            <section class={style.statistics}>
                  <div className={style.maxWidth}>
                    <div className={style.divTitle}>
                        <h2 class={style.title}>Upload stats</h2>
                    </div>

                    <ul class={style.stat_list}>
                        {data.map((dt) => (
                            // const backgroundColor = {
                            //     background: getRandomHexColor(),
                            // };
                            
                            <li style ={{backgroundColor:getRandomHexColor()}} class={style.item} key={dt.id}>
                                <span className={style.label}>{dt.label}</span>
                                <span className={style.percentage}>{dt.percentage}%</span> 
                            </li>
                            
    ))} 
                    </ul>
                </div>
            </section>
       
)};


//Definición de los protoTypes

Statistics.propTypes={
    id: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.number
}