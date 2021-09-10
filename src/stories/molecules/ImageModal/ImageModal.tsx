import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

interface IModalProps {
  handleClose(): any,
  imagePath: string,
  open: boolean,
}

const useStyles = makeStyles((theme: Theme) => createStyles(
  {
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  },
));

const ImageModal: React.FC<IModalProps> = ({ open, handleClose, imagePath }) => {
  const classes = useStyles();

  return (
    <Modal
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      className={classes.modal}
      closeAfterTransition
      onClose={handleClose}
      open={open}
    >
      <Fade in={open}>
        <div className={classes.paper}>
          <img alt="" src={`/products/${imagePath}`} />
        </div>
      </Fade>
    </Modal>
  );
};

export default ImageModal;
