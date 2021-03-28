import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

function Content() {

  // const classes = useStyles();

  return (
    <div>
    {/* <div className={classes.root}> */}
      <h3>Content</h3>
      <Button variant="contained" color="primary" startIcon={<DeleteIcon />} endIcon={<Icon>send</Icon>}>Material UI</Button>
    </div>
  );

}

export default Content;