import React, { useEffect, useState } from 'react';
import './contentSection.css'

const Section = ({ id, title, subtittle, imageSrc }) => {
  const texto1 = "El trastorno del espectro autista (TEA) es altamente prevalente en todo el mundo. Según la Organización Mundial de la Salud (OMS), alrededor de 1 de cada 100 niños son diagnosticados con TEA. Esta prevalencia está aumentando según el grado de conciencia, el conocimiento y el acceso a la información disponible sobre el tema. Aunque no hay suficientes estadísticas para Honduras, se estima que hay alrededor de 60.000 casos de autismo, la mayoría de ellos desatendidos."
  + "El Seminario-Taller Sigamos Hablando del Espectro, es un evento de dos días dirigido a profesionales y estudiantes de Psicología, Medicina, Educación Especial, madres/padres, profesores, cuidadores y otros relacionados con personas con TEA. Está organizado en 4 bloques temáticos que van desde lo básico del autismo, hasta la aspiración de  construir una sociedad inclusiva. Consta de un conjunto de conferencias con especialistas y dos talleres orientadores para mejorar la calidad de vida de las personas en el espectro. Así mismo, se desarrollarán 3 paneles con temas muy relevantes entre ellos, la necesidad de colocar la atención a personas con TEA en la agenda de los tomadores de decisiones."
  const texto2="Nuestra visión es establecer una base para mejorar el diagnóstico, cuidado y tratamiento, e informar las políticas públicas para un mejor apoyo a las personas con TEA y al mismo tiempo desarrollar prioridades de investigación en este tema en el país. Este evento representa un nuevo paso, a través de la concientización se pretende avanzar hacia el fortalecimiento de capacidades en nuestro país. Esto permitirá incrementar los servicios disponibles para las personas con TEA y, en consecuencia, avanzar hacia el Objetivo de Desarrollo Sostenible No. 10 de la Organización de las Naciones unidas, orientado a la reducción de las desigualdades="
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div id={id} className="section">
      <div
        className="parallax-background"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      ></div>
        <div className="element">
          <div>
          <h2 className="tittle">{title}</h2>
          <p className="subTittle">{subtittle}</p>
          <p className="text">{texto1}</p>
          <p className="text" style={{marginTop: '10px'}}>{texto2}</p>
          </div>
        </div>
        <div className="element">
          <img width={'90%'} height={'auto'} src={imageSrc} alt={`Imagen ${title}`} />
        </div>
    </div>
  );
};

export default Section;