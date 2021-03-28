import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Box from '@material-ui/core/Box';

const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'slot1',
    headerName: 's1',
    sortable: false,
    type: 'number',
    width: 70
  },
  {
    field: 'slot2',
    headerName: 's2',
    sortable: false,
    type: 'number',
    width: 70
  },
  {
    field: 'slot3',
    headerName: 's3',
    sortable: false,
    type: 'number',
    width: 70
  },
  {
    field: 'time',
    headerName: 'Time',
    width: 90
  }
];

const rows = [
   { id: 1, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
   { id: 2, slot1: 0, slot2: 0, slot3: 0, time: '33:36' },
   { id: 3, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
   { id: 4, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
   { id: 5, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
   { id: 6, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
   { id: 7, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
   { id: 8, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
   { id: 9, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
  { id: 10, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
  { id: 11, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
  { id: 12, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
  { id: 13, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
  { id: 14, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
  { id: 15, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
  { id: 16, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
  { id: 17, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
  { id: 18, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
  { id: 19, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },
  { id: 20, slot1: 0, slot2: 0, slot3: 0, time: '35:36' },

];

export default function DataTable() {
  return(
    <Box
      display="flex"
      justifyContent="center"
      // alignItems="center"
      // height="auto"
    >
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <DataGrid rows={rows} columns={columns} autoHeight={true} pageSize={100}/>
      </div>

    </Box>
  );
}