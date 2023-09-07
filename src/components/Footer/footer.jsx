import React from 'react';
import { BsWhatsapp } from "react-icons/bs";
import {MdOutlineMarkEmailUnread} from "react-icons/md";
import './footer.css'; // Asegúrate de tener un archivo de estilos para el footer

const Footer = () => {
  const whatsappURL = 'https://api.whatsapp.com/send?phone=50494983115'; // Reemplaza con tu enlace de WhatsApp
  const emailURL = 'mailto:correo@example.com'; // Reemplaza con tu dirección de correo electrónico

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-icons">
        <p>Contáctanos:&nbsp;&nbsp;</p>
          <a className='links' href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <BsWhatsapp size={20}/>&nbsp;<p>Whatsapp (+504 9498-3115)&nbsp;</p>
          </a>
       
          <a className='links' href={emailURL} target="_blank" rel="noopener noreferrer">
          <MdOutlineMarkEmailUnread size={25}/>&nbsp;<p>Correo Electrónico (gina@unah.edu.hn)</p>
          </a>
       </div>
        <p>{new Date().getFullYear()} SHDE. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;