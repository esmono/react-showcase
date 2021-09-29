/* eslint-disable no-unused-vars */
import React from 'react';
import Button from '@material-ui/core/Button';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
} from '@mui/x-data-grid';

import DataModal from '../../molecules/DataModal/DataModal';
import QuickSearchToolbar from '../../molecules/QuickSearchToolbar/QuickSearchToolbar';

interface IDataGridProps {
  characterInfo: any,
  handleCharacterData: (id: number) => void,
  handlePage: (page: number) => void,
  handleRequestSearch: (name: string) => void,
  loading: boolean,
  page: number,
  pageSize: number,
  rows: any,
  rowCount: number,
}

const Characters: React.FC<IDataGridProps> = ({
  characterInfo,
  handleCharacterData,
  handlePage,
  handleRequestSearch,
  loading,
  page,
  pageSize,
  rows,
  rowCount,
}) => {
  const [open, setOpen] = React.useState(false);
  const [searchText, setSearchText] = React.useState('');

  const handleModal = (id: number) => {
    setOpen(true);
    handleCharacterData(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const preventDefault = (event: React.SyntheticEvent, id: number) => {
    event.preventDefault();
    handleModal(id);
  };

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: '#',
      width: 70,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 250,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 100,
    },
    {
      field: 'species',
      headerName: 'Species',
      width: 150,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 200,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 100,
    },
    {
      sortable: false,
      field: 'image',
      headerName: 'Image',
      renderCell: (params: GridRenderCellParams) => (
        <Button
          color="primary"
          href="#text-buttons"
          onClick={(event: React.SyntheticEvent) => preventDefault(event, params.id as number)}
          size="small"
        >
          Preview
        </Button>
      ),
    },
  ];

  return (
    <div style={{ height: 600, width: '100%' }}>
      <DataGrid
        columns={columns}
        components={{ Toolbar: QuickSearchToolbar }}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
              setSearchText(event.target.value);
              handleRequestSearch(event.target.value);
            },
            clearSearch: () => handleRequestSearch(''),
          },
        }}
        disableColumnMenu
        disableSelectionOnClick
        getRowId={(row) => row.id}
        loading={loading}
        onPageChange={handlePage}
        page={page}
        pageSize={pageSize}
        paginationMode="server"
        rowCount={rowCount}
        rows={rows}
        rowsPerPageOptions={[20]}
      />
      <DataModal
        handleClose={handleClose}
        character={characterInfo}
        open={open}
      />
    </div>
  );
};

export default Characters;
