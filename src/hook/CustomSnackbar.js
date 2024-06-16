import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Fade from '@mui/material/Fade';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import { Alert } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';


function SlideTransition(props) {
    return <Slide {...props} direction="left" />;
}

function GrowTransition(props) {
    return <Grow {...props} />;
}

const CustomSnackbar = ({ open, message, onClose, transition, duration = 1200, anchorOrigin = { vertical: 'top', horizontal: 'right' }, 
    backgroundColor = '#fff', color = "#000", position = 'absolute', top = '100px', right = '20px',width = '290px' }) => {
    const getTransitionComponent = (transition) => {
        switch (transition) {
            case 'grow':
                return GrowTransition;
            case 'slide':
                return SlideTransition;
            case 'fade':
            default:
                return Fade;
        }
    };

    return (
        <Snackbar
            anchorOrigin={anchorOrigin}
            open={open}
            onClose={onClose}
            TransitionComponent={getTransitionComponent(transition)}
            key={transition}
            autoHideDuration={duration}
        >
            <Alert icon={<CheckIcon fontSize="inherit" />} severity="success" variant="outlined"
                style={{ backgroundColor, color, position, top, right, width}}>
                {message}
            </Alert>
        </Snackbar>
    );
};

export default CustomSnackbar;
