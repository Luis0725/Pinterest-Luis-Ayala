import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBell,faCommentDots,faUserCircle,faSearch,faChevronDown} from '@fortawesome/free-solid-svg-icons';
import {faPinterest} from '@fortawesome/free-brands-svg-icons';



const HeaderLayout = () => {
  return <div style={{ ..._stylesHeader.header_prin}} >

    <FontAwesomeIcon style ={{..._stylesHeader.iconsPinteres}} icon={faPinterest} />
    
    <span  style={{..._stylesHeader.inicio}}>Inicio</span>
    <span style={{..._stylesHeader.hoy}}>Hoy</span>

    <FontAwesomeIcon style ={{..._stylesHeader.iconsLupa}} icon={faSearch} />

    <input  type="text"  placeholder=" Buscar" style={{ ..._stylesHeader.header_input}}/>
     
    <FontAwesomeIcon style ={{..._stylesHeader.iconsFlecha}} icon={faChevronDown} />
    <FontAwesomeIcon style ={{..._stylesHeader.icons}} icon={faUserCircle} />
    <FontAwesomeIcon style ={{..._stylesHeader.icons}} icon={faCommentDots} />
    <FontAwesomeIcon style ={{..._stylesHeader.icons}} icon={faBell} />

    
    

  </div>;
};


const _stylesHeader = {

  header_prin: {
    padding: '2px 4px',
    backgroundColor: 'white',
  },
  
  header_input: {
    borderRadius: '0px 25px 25px 0px',
    backgroundColor:'#efefef',
    width: '810px',
    height: '48px',
    border: '0',
    margin: '0px 10px',
  },

  iconsLupa : {
    borderRadius: '25px 0px 0px 25px',
    backgroundColor:'#efefef',
    color:'#767676',
    padding: '1.05em',
    position: 'relative',
    left: 10,
    top: 18,
    cursor: 'pointer',
    
  },
  
  icons: {
    float:'right',
    color: '#767676',
    width:'40px',
    height:'28px',
    margin: '7px -14px',
    padding: '1.07em',
    cursor : 'pointer',
  },
  
  iconsFlecha : {
    float:'right',
    color: '#767676',
    width:'20px',
    height:'14px',
    margin: '10px 0px',
    padding: '1.05em',
    cursor : 'pointer',
  },
  /*iconsHover:{
    backgroundColor: 'blue',
  },*/

  iconsPinteres: {
    color:'#e60023',
    width:'40px',
    height:'28px',
    margin: '0px 10px',
    cursor : 'pointer',
  },

  inicio: {
    margin: '0px 10px',
    padding: '1em',
    backgroundColor: 'black',
    borderRadius: '200px',
    color: 'white',
    cursor : 'pointer',
  },

  

  hoy: {
    cursor : 'pointer',
    
    
  },

  
};




export default HeaderLayout;
