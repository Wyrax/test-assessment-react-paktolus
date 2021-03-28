import React, { Component, useState } from 'react';
import DataTable from './DataTable';
import GameDialog from './GameDialog';
// import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

function Content() {
  const [rows, setRows] = useState([]);

  return (
    <div>
      <h3>Slots</h3>
      <GameDialog rows={rows} setRows={setRows}></GameDialog>
      <DataTable rows={rows}></DataTable>
    </div>
  );

}

export default Content;