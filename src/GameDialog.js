import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

export default function GameDialog(props) {
  const [open, setOpen] = React.useState(false);

  const { rows, setRows, balance, setBalance } = props;

  const handleClickStart = () => {
    setOpen(true);
  };

  const checkWinConditions = () => {
    const status = document.getElementById('status');
    const slot1val = parseInt(document.getElementById('gameslot-1').innerHTML);
    const slot2val = parseInt(document.getElementById('gameslot-2').innerHTML);
    const slot3val = parseInt(document.getElementById('gameslot-3').innerHTML);

    const row = {};

    if (slot1val === 7 && slot2val === 7 && slot3val === 7) {
      status.innerHTML = '777 JACKPOT! (+$10)';
      setBalance((balance) => {
        balance = balance + 10;
        localStorage.setItem("balance", balance);
        return balance;
      });
    } else if (slot1val === slot2val && slot2val === slot3val) {
      status.innerHTML = 'THREE IN A ROW! (+$5)';
      setBalance((balance) => {
        balance = balance + 5;
        localStorage.setItem("balance", balance);
        return balance;
      });
    } else if (slot1val === slot2val || slot2val === slot3val) {
      status.innerHTML = 'PAIR! (+$0.5)';
      setBalance((balance) => {
        balance = balance + .5;
        localStorage.setItem("balance", balance);
        return balance;
      });
    } else {
      status.innerHTML = 'Choose your action:';
    }

    row.id = rows.length + 1;
    row.slot1 = slot1val;
    row.slot2 = slot2val;
    row.slot3 = slot3val;
    row.time = new Date().toLocaleTimeString();
    rows.push(row);
    setRows([...rows]);

  }

  const handleClickPlay = () => {
    setBalance((balance) => {
      balance = balance - 1;
      localStorage.setItem("balance", balance);
      return balance;
    });

    const gameslot1 = document.getElementById('gameslot-1');
    const gameslot2 = document.getElementById('gameslot-2');
    const gameslot3 = document.getElementById('gameslot-3');

    const status = document.getElementById('status');
    status.innerHTML = '&nbsp;';

    // gameslot1.innerHTML = '–';
    // gameslot2.innerHTML = '–';
    // gameslot3.innerHTML = '–';
    
    setTimeout(() => { gameslot1.innerHTML = '–'}, 100);
    setTimeout(() => { gameslot2.innerHTML = '–'}, 200);
    setTimeout(() => { gameslot3.innerHTML = '–'}, 300);

    setTimeout(() => { gameslot1.innerHTML = Math.floor(Math.random() * 9) + 1 }, 500);
    setTimeout(() => { gameslot2.innerHTML = Math.floor(Math.random() * 9) + 1 }, 600);
    setTimeout(() => { gameslot3.innerHTML = Math.floor(Math.random() * 9) + 1 }, 700);

    setTimeout(() => { gameslot1.innerHTML = Math.floor(Math.random() * 9) + 1 }, 700);
    setTimeout(() => { gameslot2.innerHTML = Math.floor(Math.random() * 9) + 1 }, 800);
    setTimeout(() => { gameslot3.innerHTML = Math.floor(Math.random() * 9) + 1 }, 900);

    setTimeout(() => { gameslot1.innerHTML = Math.floor(Math.random() * 9) + 1 }, 900);
    setTimeout(() => { gameslot2.innerHTML = Math.floor(Math.random() * 9) + 1 }, 1000);
    setTimeout(() => { gameslot3.innerHTML = Math.floor(Math.random() * 9) + 1 }, 1100);
    
    setTimeout(() => { gameslot1.innerHTML = Math.floor(Math.random() * 9) + 1 }, 1100);
    setTimeout(() => { gameslot2.innerHTML = Math.floor(Math.random() * 9) + 1 }, 1200);
    setTimeout(() => { gameslot3.innerHTML = Math.floor(Math.random() * 9) + 1 }, 1300);

    setTimeout(() => { checkWinConditions() }, 1900);
  };

  const handleClickFake = () => {
    setBalance((balance) => {
      balance = balance - 1;
      localStorage.setItem("balance", balance);
      return balance;
    });
    
    const gameslot1 = document.getElementById('gameslot-1');
    const gameslot2 = document.getElementById('gameslot-2');
    const gameslot3 = document.getElementById('gameslot-3');

    const status = document.getElementById('status');
    status.innerHTML = '&nbsp;';

    setTimeout(() => { gameslot1.innerHTML = '–'}, 100);
    setTimeout(() => { gameslot2.innerHTML = '–'}, 200);
    setTimeout(() => { gameslot3.innerHTML = '–'}, 300);

    setTimeout(() => { gameslot1.innerHTML = Math.floor(Math.random() * 9) + 1 }, 500);
    setTimeout(() => { gameslot2.innerHTML = Math.floor(Math.random() * 9) + 1 }, 600);
    setTimeout(() => { gameslot3.innerHTML = Math.floor(Math.random() * 9) + 1 }, 700);

    setTimeout(() => { gameslot1.innerHTML = Math.floor(Math.random() * 9) + 1 }, 700);
    setTimeout(() => { gameslot2.innerHTML = Math.floor(Math.random() * 9) + 1 }, 800);
    setTimeout(() => { gameslot3.innerHTML = Math.floor(Math.random() * 9) + 1 }, 900);

    setTimeout(() => { gameslot1.innerHTML = Math.floor(Math.random() * 9) + 1 }, 900);
    setTimeout(() => { gameslot2.innerHTML = Math.floor(Math.random() * 9) + 1 }, 1000);
    setTimeout(() => { gameslot3.innerHTML = Math.floor(Math.random() * 9) + 1 }, 1100);
    
    setTimeout(() => { gameslot1.innerHTML = 7 }, 1100);
    setTimeout(() => { gameslot2.innerHTML = 7 }, 1200);
    setTimeout(() => { gameslot3.innerHTML = 7 }, 1300);

    setTimeout(() => { checkWinConditions() }, 1900);

  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickStart} variant="contained" color="primary" startIcon={<DeleteIcon />} style={{ marginBottom: '20px' }}>Start</Button>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Welcome to Slots!
        </DialogTitle>
        <DialogContent dividers>
        <Box
          display="flex"
          justifyContent="center"
          // alignItems="center"
          style={{ fontSize: '60px', fontFamily: 'monospace' }}
        >
          <span style={{ fontWeight: '300', color: '#ddd', fontSize: '54px' }}> | </span>
          <div id="gameslot-1" style={{ display: 'inline-block' }}>–</div>
          <span style={{ fontWeight: '300', color: '#ddd', fontSize: '54px' }}> | </span>
          <div id="gameslot-2" style={{ display: 'inline-block' }}>–</div>
          <span style={{ fontWeight: '300', color: '#ddd', fontSize: '54px'  }}> | </span>
          <div id="gameslot-3" style={{ display: 'inline-block' }}>–</div>
          <span style={{ fontWeight: '300', color: '#ddd', fontSize: '54px' }}> | </span>

          </Box>
          <div id="status" style={{ textAlign: 'center' }}>Choose your action:</div>
        <Box
          display="flex"
          justifyContent="center"
          // alignItems="center"
          style={{ fontSize: '60px' }}
        >
        <Button onClick={handleClickPlay} variant="contained" color="primary" startIcon={<DeleteIcon />} style={{ margin: '5px' }}>Play ($1)</Button>

        <Button onClick={handleClickFake} variant="contained" color="primary" startIcon={<DeleteIcon />} style={{ margin: '5px' }}>Fake '777'</Button>

        <Button onClick={handleClose} variant="contained" color="primary" startIcon={<DeleteIcon />} style={{ margin: '5px' }}>Exit Slots</Button>

        </Box>

        </DialogContent>
      </Dialog>
    </div>
  );
}
