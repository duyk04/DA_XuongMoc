import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Link } from 'react-router-dom';

export default function CustomDialog({ isOpen, title, content, handleClose, handleAgree }) {
    return (
        <Dialog
            open={isOpen}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            disableScrollLock={true}
        >
            <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
            <DialogContent>
                <div className='d-flex'>
                    <Link to={'/DetailsProduct'} state={content}>
                        <img className='me-2' src={content.url_image} alt={content.name} style={{ width: '80px', height: '80px' }} />
                    </Link>
                    <div>
                        <div className='namePr mb-2 text-uppercase'>{content.name}</div>
                        <div className='sizePr'>{content.description?.size}</div>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Không</Button>
                <Button onClick={handleAgree} autoFocus  color="error">
                    Có
                </Button>
            </DialogActions>
        </Dialog>
    );
}
