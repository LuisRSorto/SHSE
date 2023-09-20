import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const conferencistas = [
    {nombre:'Dagmar Cruz-López, MSc.', url: 'conferencistas/1.png', descripcion: 'Licenciada en Psicología por la Universidad Nacional Autónoma de Honduras con una maestría en Psicología del Desarrollo, la Educación y la Discapacidad por la Universidad de Burdeos, Francia. ​Ha trabajado como consultora con la Asociación para una Sociedad más Justa (ASJ) y la Alianza por la Paz y la Justicia (APJ) en proyectos relacionados con la educación y habilidades socioemocionales en los jóvenes en Honduras. Promotora del primer Seminario-Taller Hablemos del Espectro celebrado en Tegucigalpa en 2022. Cuenta con 6 años de experiencia en el autismo, de los cuales los últimos 4 han sido trabajando en la asociación Défi Autisme en Francia. Actualmente ocupa el puesto de Psicóloga del desarrollo y Supervisora del Análisis Aplicado del Comportamiento, ABA.'},
    {nombre:'Ana Gabriela Euceda, Licda.', url: 'conferencistas/3.png', descripcion: 'líder del sector discapacidad en Honduras, defensora de Derechos Humanos de profesión Informática, Diseñadora y Fotógrafa. Fue miembro del Consejo Consultivo de la dirección de Discapacidad y de la Comisión de Finanzas del Sector Discapacidad. Ha sido representante de la RED COIPRODEN y la Alianza por la Niñez y la Juventud de Honduras ante organizaciones del ámbito centroamericano, latinoamericano e internacional. Es fundadora del Proyecto Fotográfico Miradas del Autismo y Fundadora del Proyecto Sonrisas para niños y jóvenes con síndrome de Down.'},
    {nombre:'Irma Almendárez, Licda.', url: 'conferencistas/2.png', descripcion: 'Licenciada en Psicología, egresada de la Universidad Nacional Autónoma de Honduras (UNAH). Cuenta con un Diplomado en el método “TEACCH” (Tratamiento y Educación de Niños con Autismo y Problemas de Comunicación Relacionados) obtenido en la Fundación Yuaikai, en Hokkaido, Japón donde realizó una pasantía tanto en Tokio como en Hokkaido. Participó en el taller sobre el método Doman, concebido para niños con lesiones cerebrales y ampliado para niños con necesidades especiales en general, con el que se busca favorecer las conexiones neuronales.'},
    {nombre:'Pamela Figueroa, Licda.', url: 'conferencistas/4.png', descripcion: 'Es una persona orgullosamente autista que cuenta con una Licenciatura en Gerencia de Negocios y un Profesorado en Educación Artística con Orientación en Artes Visuales, graduada con honores. Ha sido acreedora del premio a la Excelencia Académica “Francisco Morazán 2022” de la Universidad Pedagógica Nacional Francisco Morazán. Es también USAlumni, ya que realizó estudios artísticos en Emporia State University en el Estado de Kansas, Estados Unidos y fue parte del intercambio cultural Paulo Freire en Ciudad de México. Cuenta con diferentes cursos y diplomados relacionados con el arte y la defensa de derechos de las personas con discapacidad.'},
    {nombre:'Horacio Joffre, PhD', url: 'conferencistas/5.png', descripcion: 'Graduado en Derecho de la Universidad Católica Argentina, Doctorado en Discapacidad de la Universidad Favaloro. Cuenta con una maestría en Cooperación Internacional y un Diplomado en Responsabilidad Social Empresarial y en Organizaciones. Es docente de grado y posgrados en Universidad de Buenos Aires (Derecho, Medicina y Ciencias Económicas) y la Universidad de San Isidro en derecho, discapacidad y autismo. Fundador y presidente interinstitucional de APAdeA, FAdeA, ALaFe, La Misión- Fideicomiso- y APNA. Con su familia fundó el Respiro Comunidad San Ignacio, donde vive su hijo Ignacio. Es miembro Titular del Comité Asesor de la Agencia Nacional de Discapacidad y del Consejo Consultivo Honorario de Salud Mental y Adicciones. Invitado permanente por universidades nacionales y extranjeras en cátedras de Derecho, entidades civiles, discapacidad y autismo.'},
    {nombre:'Virna López, PhD', url: 'conferencistas/6.png', descripcion: 'Profesora de Genética Médica en la Universidad Nacional Autónoma de Honduras, co-fundadora y actual coordinadora del Grupo de Investigación en Neurociencias Aplicadas, GINA-UNAH.​  Cuenta con una licenciatura en Biología y dos maestrías. Finalmente hizo sus estudios de doctorado, orientados a la Biología del Aprendizaje, en la Universidad Técnica de Kaiserlautern en Alemania.​ Actualmente labora en la UNAH y en la Universidad Pedagógica Nacional Francisco Morazán. Ha impartido múltiples conferencias en el ámbito nacional, regional e internacional sobre las Bases Biológicas del Aprendizaje y la Neuroeducación. Ha recibido dos años consecutivos un Diversity Grant otorgado por la International Brain Research Organization para la organización del Seminario-Taller sobre Autismo.​ Es miembro fundadora y primera presidenta del capítulo hondureño de la Organización de las Mujeres en la Ciencia para el Mundo en Desarrollo, OWSD-HND.'},
    {nombre:'Misael Pineda, Dr. Med.', url: 'conferencistas/7.png', descripcion: 'Médico General graduado en la Universidad Nacional Autónoma de Honduras,  con una especialidad en Pediatría de la misma Universidad ​Cuenta además con una maestría en Psiquiatría y Psicología para Niños y Adolescentes obtenida en la Universidad de Barcelona. Posteriormente hizo sus estudios de postgrado como Experto en TDAH y trastornos del neurodesarrollo en la Universidad de La Salle, Madrid.​ Actualmente labora como médico pediatra y psiquiatra infantojuvenil en consultorio privado en el Hospital del Valle y pediatra de guardia en el mismo hospital. Es maestro ad honorem del postgrado de Pediatría en UNAH, Valle de Sula.   ​'},
    {nombre:'Heidy Martínez,  Licda.', url: 'conferencistas/8.png', descripcion: 'Es Licenciada en Psicología por la Universidad Nacional Autónoma de Honduras, cuenta con un diplomado en formación en educación superior de la  Universidad Pedagógica Nacional Francisco Morazán. ​Ha participado en una gran cantidad de cursos y talleres sobre autismo, estimulación temprana, método Doman, integración sensorial en habla, terapia de lenguaje, método TEACCH y muchos más.​ Cuenta con más de 6 años de experiencia en la intervención de personas que se encuentran el espectro autista. Actualmente trabaja en la Asociación Hondureña de Apoyo al Autista, APOAUTIS, como coordinadora del Centro de Atención de la Filial de la Zona Norte.'},
    {nombre:'Nancy Villatoro, PhD', url: 'conferencistas/9.png', descripcion: 'Médico General graduada en la Universidad Nacional Autónoma de Honduras, con un doctorado en Neurología con orientación en Neurociencias por la , Universidad Federal de São Paulo, UNIFESP y una especialidad en medicina del sueño de la misma universidad. Con una trayectoria académica de excelencia, cuenta con una serie de publicaciones científicas en revistas indexadas en SCOPUS. Posee amplia experiencia en el conocimiento neurofisiológico/neuropatológico con la intercorrelación multisistémica en la neuro-fisiología del sueño. Experiencia en el diagnóstico y tratamiento de trastornos del sueño, manejo de ventilación mecánica, enfermedades neuromusculares e hipoventilación pulmonar nocturna, entre otras.​'},
    {nombre:'Reyna Durón, Dr.Med.', url: 'conferencistas/10.png', descripcion: 'Médico General graduada en la Universidad Nacional Autónoma de Honduras, con un postgrado en Neurología con orientación en Neurociencias, una especialidad en epileptología de la Universidad de California en Los Ángeles y un posgrado en Genética de la Epilepsia de la misma universidad. Es neuróloga y epileptóloga en ejercicio, e investigadora activa, continúa trabajando con investigadores de varias universidades estadounidenses y el Consorcio GENESS, que involucra investigadores en epilepsia de México, Honduras, El Salvador, Brasil, Perú, España y Japón. Localmente, esta radicada en la Universidad Tecnológica Centroamericana (UNITEC-Honduras), como Directora de Investigación. Junto a otros colegas desarrolla proyectos de investigación en los campos de la neurología, la neurogenética, la neuroepidemiología, la salud pública y ahora el COVID-19.'},
    {nombre:'Jaglyn Iráchez, Licda.', url: 'conferencistas/11.png', descripcion: 'Profesional con amplia experiencia en la Ciencias Comerciales, ha destacado por una larga trayectoria en la formación de estudiantes de educación media. Es guía en Filosofía Montessori en Comunidad infantil y Casa de niños, actualmente en formación para Talleres. Está comprometida con la formación de profesionales íntegros y de alta calidad humana. ​Ha colaborado con instituciones involucradas en la integración de niños en riesgo social. Participa activamente como madre y voluntaria en programas deportivos inclusivos. (Olimpiadas Especiales Honduras-Cortés) Ha participado además en el club de Lectura Montessori. Se actualiza constante en el uso de la tecnología en la educación. Colabora también en centros Montessori en escuela para padres. Participa en movimientos de información sobre Autismo.'},
]

export default function SpeakerCard() {
  return (
   
      conferencistas.map((person) => (
        <Box sx={{ minWidth: 275 }}>
            <Card className='confCardsbox' variant="outlined" sx={{ margin: 4, width: 410, minHeight: 400, marginBottom: 0, boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.3)'}}>
                <Typography className='confCardsTittle' variant="h4" component="div" sx={{margin: 1.5, marginBottom: 0}}>
                        {person.nombre}
                </Typography>
                <CardContent className='confCards' sx={{borderRadius: '20px', display: 'flex',  flexWrap: 'wrap', justifyContent: 'center' }}>
                    
                    <img className='confImg' src={person.url} width={'auto'} height={200} alt='conferencista' />
                    <Typography variant="body2">
                    {person.descripcion}
    
                    </Typography>
                </CardContent>
            </Card>
        </Box>
      ))
  );
}