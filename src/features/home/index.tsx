import { Box, Typography } from '@mui/material';
import { type GridColDef } from '@mui/x-data-grid';
import { useState } from 'react';
import { GenericTable } from '../../components/table';
import { TabHeaderLayout } from '../../components/tab-header';

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const columns: GridColDef[] = [
  { field: 'name', headerName: 'Name', flex: 1 },
  { field: 'email', headerName: 'Email', flex: 1 },
  { field: 'age', headerName: 'Age', width: 100 },
];

const rows: User[] = [
  { id: 1, name: 'Alice', email: 'alice@example.com', age: 25 },
  { id: 2, name: 'Bob', email: 'bob@example.com', age: 30 },
  // Add more rows as needed
];

function UserTable() {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 10,
    page: 0,
  });

  return (
    <GenericTable
      rows={rows}
      columns={columns}
      paginationModel={paginationModel}
      onPaginationModelChange={setPaginationModel}
    />
  );
}

const Home = () => {
  return (
    <Box
      display="flex"
      sx={{
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        padding: 2,
        backgroundColor: 'background.default',
      }}
      gap={2}
    >
      <TabHeaderLayout
        leftNode={
          <Typography variant="h6" sx={{ padding: 0 }}>
            Welcome to the Home Page
          </Typography>
        }
      />
      <UserTable />
    </Box>
  );
};

export default Home;
