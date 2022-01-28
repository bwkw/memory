import React, { useState, createContext } from 'react';

import Basic from '@/components/Form/Basic';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core/Typography';

function getSteps() {
  return [
    '入力項目',
    '入力確認'
  ];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Basic />;
    case 1:
      return <Confirm />;
    default:
      return 'Unknown stepIndex';
  }
}

export const UserInputData = createContext();

export default function AllForm() {
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
      <Grid sm={2}/>
      <Grid lg={8} sm={8} spacing={10}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length ? (
          <div>
            <Typography >全ステップの表示を完了</Typography>
          </div>
        ) : (
          <div>
            <Typography >{getStepContent(activeStep)}</Typography>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
            >
              戻る
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? '送信' : '次へ'}
            </Button>
          </div>
        )}
      </Grid>
    </Grid>
  );
}
