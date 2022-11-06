import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import PropTypes from 'prop-types'; // ES6

const SuccessModal = ({ data, open, toggleModal }) => {
  return (
    <div>
      <div>
        <Dialog
          PaperProps={{
            style: {
              backgroundColor: 'black',
              boxShadow: 'none'
            }
          }}
          bodyStyle={{ backgroundColor: 'black' }}
          open={open}
          keepMounted
          onClose={() => toggleModal(false)}
          aria-describedby="alert-dialog-slide-description">
          <DialogTitle>Order placed successfully!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              To track your order, visit the following link:
              <br />
              {data}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

SuccessModal.propTypes = {
  data: PropTypes.object,
  open: PropTypes.bool,
  toggleModal: PropTypes.func
};
export default SuccessModal;
