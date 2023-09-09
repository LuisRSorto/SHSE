import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import {GoDotFill} from "react-icons/go";

const steps = [
  {
    label: 'Paso #1',
    description: `Llenar el formulario de pre-inscripción`,
  },
  {
    label: 'Paso #2',
    description:
      'Recibirá una respuesta automática confirmando la preínscripción, en que les indica que su pre-incripición ha sido recibida.',
  },
  {
    label: 'Paso #3',
    description: `Si usted es estudiante universitario o afiliado de APOAUTIS o FUNTEAH, envíe su carnet de estudiante o comprobante 
        de afiliación al correo gina@unah.edu.hn para recibir el descuento. Si usted no es estudiante, ni afiliado, pasa directo al paso #4.`,
  },
  {
    label: 'Paso #4',
    description: `Usted recibirá un correo en el que se le indicará el monto y los detalles de la cuenta para hacer el pago.`,
  },
  {
    label: 'Paso #5',
    description:
      'Envíe su comprobante de depósito al correo gina@unah.edu.hn',
  },
  {
    label: 'Paso #6',
    description: `Lleve sus comprobantes de afiliación y de pago en físico el día del evento.`,
  },
];

export default function Stepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ width: '80%', height: 'auto',flexGrow: 1, marginBottom: 6, marginTop:5 , boxShadow: '0 5px 8px 0 rgba(0, 0, 0, 0.5)' }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'rgb(227, 227, 227)',
          justifyContent: 'center'
        }}
      >
        <Typography variant='h6' sx={{color: 'rgb(0, 0, 141)'}}>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height:{ xs: 'auto', md: '45px' }, width: 'auto', alignItems:'center', color:'#e66400', p: 1.5, paddingLeft:4, fontSize: 18, bgcolor: 'white', }}>
        <GoDotFill/>&nbsp;{steps[activeStep].description}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Siguiente
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Atras
          </Button>
        }
      />
    </Box>
  );
}