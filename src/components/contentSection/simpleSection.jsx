import React from 'react';
import './contentSection.css'

const SimpleSection = ({ id, title, text, imageSrc }) => {
  return (
    <div 
        id={id} 
        className="simpleSection"
        onClick={() =>
            (window.open('https://goo.gl/maps/gdCKthHWbj1Z748a9', '_blank')
        )}
    >
          <h2 style={{marginBottom: 40}} className="tittle">{title}</h2>
          <i className="subTittle">{text}</i>
          <img width="90%" height="auto" src={imageSrc} alt={`Imagen ${title}`} style={{borderRadius: '5px'}} />
    </div>
  );
};

export default SimpleSection;