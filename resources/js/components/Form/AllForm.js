import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Basic from './basic';
import Optional from './optional';
import Confirm from './confirm';

function getSteps() {
    return [
        '必須項目',
        '任意項目',
        '入力確認'
    ];
}

function getStepContent(stepIndex) {
    switch (stepIndex) {
        case 0:
            return <Basic handleNext={handleNext} />;
        case 1:
            return <Optional handleNext={handleNext} handleBack={handleBack} />;
        case 2:
            return <Confirm handleBack={handleBack} />;
        default:
            return 'Unknown stepIndex';
    }
}