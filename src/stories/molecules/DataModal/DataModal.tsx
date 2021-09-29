import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@material-ui/core/Divider';

export interface ICharacterProps {
  name: string,
  status: string,
  species: string,
  type: string,
  origin: {
    name: string,
  },
  location: {
    name: string,
  },
  image: string,
}

interface IModalProps {
  handleClose(): any,
  character: ICharacterProps,
  open: boolean,
}

const useStyles = makeStyles((theme: Theme) => createStyles(
  {
    divider: {
      margin: '10px 0',
    },
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

const DataModal: React.FC<IModalProps> = ({ open, handleClose, character }) => {
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
          {character && character.image && (
            <Card sx={{ minWidth: 275 }}>
              <CardMedia
                component="img"
                height="250"
                image={character.image}
                alt={character.name}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {`${character.name} (${character.status})`}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {character.species}
                </Typography>
                <Typography variant="body2">
                  {character.type}
                </Typography>
                <Divider className={classes.divider} light />
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {character.origin.name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  {character.location.name}
                </Typography>
              </CardContent>
            </Card>
          )}
        </div>
      </Fade>
    </Modal>
  );
};

export default DataModal;
