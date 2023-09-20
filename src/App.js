import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Footer from './components/Footer/footer';
import './CenteredCarousel.css';
import Countdown from './components/Timer/Timer';
import Section from './components/contentSection/contentSection';
import SimpleSection from './components/contentSection/simpleSection';
import { FaLocationDot } from "react-icons/fa6";
import MenuBar from './components/NavBar/NavBar';
import { Box, Container, Button } from '@mui/material';
import BasicCard from './components/Cards/BasicCard';
import Stepper from './components/Stepper/Stepper';
import SimpleCard from './components/Cards/SimpleCard';
import SpeakerCard from './components/Cards/SpeakerCard';

const App = () => {

  const cardsInfo = [
    {
      titulo: 'Opción #1',
      precio: 'L600.00',
      oferta: [
        'Conferencias', 
        'Paneles', 
        'Taller 1 “ABA y herramientas para el desarrollo de la autonomía”', 
        'Taller 2 “Comportamiento verbal y medios de comunicación alternativa y/o aumentativa”',
        'Diploma',
        'Materiales',
        'Refrigerios'
      ]
    },
    {
      titulo: 'Opción #2',
      precio: 'L500.00',
      oferta: [
        'Conferencias', 
        'Paneles', 
        'Taller 1 “ABA y herramientas para el desarrollo de la autonomía”', 
        'Diploma',
        'Materiales',
        'Refrigerios'
      ]
    },
    {
      titulo: 'Opción #3',
      precio: 'L400.00',
      oferta: [
        'Conferencias', 
        'Paneles', 
        'Taller 2 “Comportamiento verbal y medios de comunicación alternativa y/o aumentativa”',
        'Diploma',
        'Materiales',
        'Refrigerios'
      ]
    },
    {
      titulo: 'Opción #4',
      precio: 'L300.00',
      oferta: [
        'Conferencias', 
        'Paneles', 
        'Diploma',
        'Refrigerios'
      ]
    },
  ]

  const bloques = [
    {titulo: 'Bloque 1:', text: 'El transtorno del espectro autista'},
    {titulo: 'Bloque 2:', text: 'Caminando juntos en el espectro: tratamientos'},
    {titulo: 'Bloque 3:', text: 'Enfrentando otras dificultades: comorbilidades, diagnóstico diferencial y prevalencia.'},
    {titulo: 'Bloque 4:', text: 'Construyendo una sociedad inclusiva'},
  ]

  return (
    <div>
    <MenuBar/>
    <Carousel showThumbs={false} dynamicHeight={false} transitionTime= {1}>
      <div className="carousel-item1">
        <img src="poster2.jpg" alt="Imagen 1" />
        <div className="carousel-overlay">
          <div className="carousel-caption">
            <h2 >28 y 29 de Septiembre</h2>
            <h2 style={{color: '#ffdf00'}}><FaLocationDot/> San Pedro Sula, Honduras</h2>
            <Countdown/>
            <Button
                key='inscribirse'
                onClick={() =>
                  (window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=uVcFQ3x26UyuVpcXdaiXqOyoI4O7oldNhUH2OwbwefxUNkNISDNQNjFIUTlGOEFBODkxUzhYUFM3Qy4u', '_blank')
                )}
                sx={{  color: 'white', backgroundColor: 'rgb(0, 0, 141)', fontSize: '18px' }}
              >
                Pre-Inscripción
            </Button>
          </div>
        </div>
      </div>
      <div className="carousel-item2">
        {/*<img src="carrusel2.png" alt="Imagen 2" />*/}
        <div className="carousel-overlay">
        <div className="carousel-caption">
            <h2 >28 y 29 de Septiembre</h2>
            <h2 style={{color: '#ffdf00'}}><FaLocationDot/> San Pedro Sula, Honduras</h2>
            <Countdown/>
            <Button
                key='inscribirse'
                onClick={() =>
                  (window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=uVcFQ3x26UyuVpcXdaiXqOyoI4O7oldNhUH2OwbwefxUNkNISDNQNjFIUTlGOEFBODkxUzhYUFM3Qy4u', '_blank')
                )}
                sx={{  color: 'white', backgroundColor: 'rgb(0, 0, 141)', fontSize: '18px' }}
              >
                 Pre-Inscripción
            </Button>
          </div>
        </div>
      </div>
      <div className="carousel-item1">
        <img src="carrusel3.jpeg" alt="Imagen 3" />
        <div className="carousel-overlay">
        <div className="carousel-caption">
            <h2 >28 y 29 de Septiembre</h2>
            <h2 style={{color: '#ffdf00'}}><FaLocationDot/> San Pedro Sula, Honduras</h2>
            <Countdown/>
            <Button
                key='inscribirse'
                onClick={() =>
                  (window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=uVcFQ3x26UyuVpcXdaiXqOyoI4O7oldNhUH2OwbwefxUNkNISDNQNjFIUTlGOEFBODkxUzhYUFM3Qy4u', '_blank')
                )}
                sx={{  color: 'white', backgroundColor: 'rgb(0, 0, 141)', fontSize: '18px' }}
              >
                 Pre-Inscripción
            </Button>
          </div>
        </div>
      </div>
      <div className="carousel-item1">
        <img src="carrusel4.png" alt="Imagen 4" />
        <div className="carousel-overlay">
        <div className="carousel-caption">
            <h2 >28 y 29 de Septiembre</h2>
            <h2 style={{color: '#ffdf00'}}><FaLocationDot/> San Pedro Sula, Honduras</h2>
            <Countdown/>
            <Button
                key='inscribirse'
                onClick={() =>
                  (window.open('https://forms.office.com/Pages/ResponsePage.aspx?id=uVcFQ3x26UyuVpcXdaiXqOyoI4O7oldNhUH2OwbwefxUNkNISDNQNjFIUTlGOEFBODkxUzhYUFM3Qy4u', '_blank')
                )}
                sx={{  color: 'white', backgroundColor: 'rgb(0, 0, 141)', fontSize: '18px' }}
              >
                 Pre-Inscripción
            </Button>
          </div>
        </div>
      </div>
    </Carousel>

    <Section
      id='1'
      title= 'Acerca del Evento'
      imageSrc='presentacionImage.png'
    />
    <div className='eventsSection'>
        <div className='eventos'>
          <img className='eventosImg' width="150px" height="150px" src={'conferencia.png'} alt='Conferencias'/>
          <p style={{ marginTop: 0, fontWeight: 'bold', marginBottom:0, color: '#a90087', fontSize: '50px', }}>6</p>
          <h2 style={{marginTop: 0}} >Conferencias</h2>
        </div> 
        <div className='eventos'>
          <img  width="150px" height="150px" src={'paneles.png'} alt='Paneles'/>
          <p style={{marginTop: 0, fontWeight: 'bold', marginBottom:0, color: '#ff5500', fontSize: '50px'}}>3</p>
          <h2 style={{marginTop: 0}} >Paneles</h2>
        </div> 
        <div className='eventos'>
          <img  width="150px" height="150px" src={'talleres.png'} alt='Talleres'/>
          <p style={{marginTop: 0, fontWeight: 'bold', marginBottom:0, color: '#11ff00', fontSize: '50px'}}>2</p>
          <h2 style={{marginTop: 0}} >Talleres</h2>
        </div> 
        <div className='eventos'>
          <img  width="150px" height="150px" src={'networking.png'} alt='Networking'/>
          <p style={{marginTop: 0, fontWeight: 'bold', marginBottom:0, color: 'red', fontSize: '50px'}}>1</p>
          <h2 style={{marginTop: 0}} >Networking</h2>
        </div> 
        <div className='eventos'>
          <img  width="150px" height="150px" src={'bloques.png'} alt='Temáticos'/>
          <p style={{marginTop: 0, fontWeight: 'bold', marginBottom:0, color: '#fffb00', fontSize: '50px'}}>4</p>
          <h2 style={{marginTop: 0}} >Bloques Temáticos</h2>
        </div> 
    </div>
    <Container sx={{textAlign: 'center'}}>
      <h3>Auspiciador:</h3>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <img 
        width="350px" 
        height="auto" 
        src={'Logos/IBRO.png'} 
        onClick={() =>
          (window.open('https://ibro.org/', '_blank')
        )}
        alt='IBRO' />
      </Box>
      <h3>Organizadores:</h3>
      <Box sx={{display:'flex', flexWrap: 'wrap', justifyContent:'center', alignItems: { xs: 'none', md: 'center' }, marginBottom: '40px'}}>
        <img 
        width="200px" 
        height="auto" 
        src={'Logos/APO-AUTIST.png'} 
        onClick={() =>
          (window.open('https://www.apoautishn.org/', '_blank')
        )}
        alt='APO-AUTIST' 
        />
        <img 
        width="200px" 
        height="auto" 
        src={'Logos/GINA.PNG'}
        onClick={() =>
          (window.open('https://www.facebook.com/profile.php?id=100063723276220&locale=hi_IN', '_blank')
        )}
        alt='GINA' 
        />
        <img 
        width="200px" 
        height="auto" 
        src={'Logos/funteah.PNG'} 
        onClick={() =>
          (window.open('https://www.facebook.com/FUNTEAH/?locale=hi_IN', '_blank')
        )}
        alt='funteah' 
        />
        <img 
        width="200px" 
        height="auto" 
        src={'Logos/OWSD.PNG'} 
        onClick={() =>
          (window.open('https://owsd.net/network/honduras', '_blank')
        )}
        alt='OWSD' 
        />
        <img 
        width="220px" 
        height="auto" 
        src={'Logos/UNAH.PNG'} 
        onClick={() =>
          (window.open('https://www.unah.edu.hn/', '_blank')
        )}
        alt='UNAH' />
      </Box>    
    </Container>
    <SimpleSection
      id='2'
      title= 'Ubicación'
      text='UNAH-VS Auditorio 2, Edificio 5, San Pedro Sula'
      imageSrc='mapaUnah.png'
    />
    <div className='conferencistas bg' id='3'>
        <div>
          <h2 className='tittle'>Conferencistas</h2>
        </div>  
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '5em'}}>
          <SpeakerCard/>
        </div>
    </div>
    <div id='4'>
        <h2 style={{textAlign: 'center'}} className='tittle'>Programa</h2>
        <div style={{display: 'flex', flexWrap:'wrap', justifyContent:'center', marginTop: '2em', marginBottom: '5em'}}>
          <img width="40%" height="auto" src={'programa28.png'} alt={`programa1`} />
          <img width="40%" height="auto" src={'programa29.png'} alt={`programa2`} />
        </div>
    </div>
    <div className='pagoinfoSection' id='5'>
        <div>
          <h2 className='tittle'>Información de Pago</h2>
        </div>
          <Stepper/>    
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '5em'}}>
          <BasicCard arreglo={cardsInfo}/>
        </div>
    </div>
     <div id='6'>
      <h2 style={{marginLeft: '2em'}} className='tittle'>Bloques Temáticos</h2>
      <div style={{ display:'flex', flexWrap: 'wrap', justifyContent: 'center', marginTop: '1em', marginBottom: '10em'}}>
        <SimpleCard arreglo={bloques}/>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default App;
