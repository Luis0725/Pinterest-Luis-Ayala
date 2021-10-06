import React, { useState } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUpload,faEllipsisH} from '@fortawesome/free-solid-svg-icons';
import './estilo.css';

const PinCard = (props) => {

  const [hover, setHover] = useState(false);

  return (
    <div onMouseEnter={()=>setHover(true)} onMouseLeave={()=> setHover(false)}
    style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }} >

    {hover &&

    <div className='clase'> 

      <button style={{ ..._stylesPinCard.guardar}}>Guardar</button>

    <FontAwesomeIcon style ={{..._stylesPinCard.iconoImagen,..._stylesPinCard[props.tamaño],..._stylesPinCard.dos}} icon={faUpload} />
    <FontAwesomeIcon style ={{..._stylesPinCard.iconoImagen,..._stylesPinCard[props.tamaño],..._stylesPinCard.uno}} icon={faEllipsisH} />

    </div>
    }
    
      <img className={`${hover ? "hoverImage" :""}`} src={props.image} alt='Fail to load'  style={{..._stylesPinCard.pin_card.image, width:'100%', height:'100%', borderRadius:'16px'}}/>
    </div>

   
  );
};

const _stylesPinCard = {
  pin_card: {
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'black',
    cursor : 'pointer',
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },

  guardar: {
    margin: '10px 140px',
    padding: '0.7em',
    backgroundColor: 'red',
    borderRadius: '200px',
    position: 'absolute',
    color: 'white',
    cursor : 'pointer',
  },

  iconoImagen : {
    position: 'absolute',
    cursor : 'pointer',
    margin: '0px 145px',
    padding: '0.5em',
    backgroundColor: '#e9e9e9',
    borderRadius: '200px',
  },


  peque:{
    marginTop: '11.8em',
  },
  medio:{
    marginTop: '16em',
  },
  largo:{
    marginTop: '23.4em',
  },
  
  uno:{
    marginLeft: '11.5em',
  },
  dos:{
    marginLeft: '9em',
  },
 
};




export default PinCard;
