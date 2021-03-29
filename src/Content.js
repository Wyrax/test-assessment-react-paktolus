import React, { Component, useState } from 'react';
// import React from 'react';
// import useState from 'react-usestateref';
import DataTable from './DataTable';
import GameDialog from './GameDialog';
// import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';

function Content(props) {
  const [rows, setRows] = useState([]);
  const { balance, setBalance } = props;
  // console.log(`Content > ref.current = ${ref.current}`);

  return (
    <div>
      <h3>Slots</h3>
      <GameDialog rows={rows} setRows={setRows} balance={balance} setBalance={setBalance} ></GameDialog>
      <DataTable rows={rows}></DataTable>
      <p>Due to shortage of time I didn't implement User Login</p>
      <p></p>
    </div>
  );

}

export default Content;