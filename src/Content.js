import React, { Component } from 'react';
import DataTable from './DataTable';
// import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

function Content() {

  // const classes = useStyles();

  return (
    <div>
    {/* <div className={classes.root}> */}
      <h3>Slots</h3>
      <Button variant="contained" color="primary" startIcon={<DeleteIcon />} style={{ marginBottom: '20px' }}>Start</Button>
      <DataTable></DataTable>
    </div>
  );

}

export default Content;