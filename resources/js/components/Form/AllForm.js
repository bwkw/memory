import { createContext, useState } from 'react';

import Basic from '@/components/Form/Basic';
import Confirm from '@/components/Form/Confirm';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


function getSteps() {
  return [
    "入力項目",
    "入力確認"
  ];
}

function getStepContent(stepIndex, handleNext, handleBack) {
  switch (stepIndex) {
    case 0:
      return <Basic handleNext={handleNext} />;
    case 1:
      return <Confirm handleBack={handleBack} />;
    default:
      return "Unknown stepIndex";
  }
}

export const UserInputData = createContext();

export default function AllForm(props) {
  const [currentState, setCurrentState] = useState({id: props.id, name: props.name, shooting_date: props.shooting_date});
  const value = {currentState, setCurrentState};
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  
  return (
    <Grid container>
      <Grid xs={1} sm={2} md={3} />
      <Grid xs={10} sm={8} md={6}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <UserInputData.Provider value={value}>
          { getStepContent(activeStep, handleNext, handleBack) }
        </UserInputData.Provider>
      </Grid>
    </Grid>
  );
}
