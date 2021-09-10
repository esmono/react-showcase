import React from 'react';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import {
  DataGrid,
  GridColDef,
  GridRenderCellParams,
} from '@mui/x-data-grid';

import ImageModal from '../../molecules/ImageModal/ImageModal';
import QuickSearchToolbar from '../../molecules/QuickSearchToolbar/QuickSearchToolbar';

interface IDataGridRows {
  code: string,
  description: string
  image: string,
  position: number,
  price: number,
  quantity: number,
}

interface IDataGridProps {
  pageSize: number,
  rows: IDataGridRows[],
}

const escapeRegExp = (value: string) => value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');

const Products: React.FC<IDataGridProps> = ({
  pageSize,
  rows,
}) => {
  const [open, setOpen] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState('');
  const [searchText, setSearchText] = React.useState('');
  const [rowsState, setRowsState] = React.useState<IDataGridRows[]>(rows);

  const requestSearch = (searchValue: string) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
    const filteredRows = rows.filter((row: any) => (
      Object.keys(row).some((field: any) => (
        searchRegex.test(row[field].toString())
      ))
    ));
    setRowsState(filteredRows);
  };

  const handleOpen = (src: string) => {
    setOpen(true);
    setImageSrc(src);
  };

  const handleClose = () => {
    setOpen(false);
    setImageSrc('');
  };

  const preventDefault = (event: React.SyntheticEvent, url: string) => {
    event.preventDefault();
    handleOpen(url);
  };

  const columns: GridColDef[] = [
    {
      field: 'position',
      headerName: '#',
      width: 70,
    },
    {
      field: 'code',
      headerName: 'Code',
      width: 150,
    },
    {
      field: 'quantity',
      headerName: 'Quantity',
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
          onClick={(event: React.SyntheticEvent) => preventDefault(event, params.value as string)}
          size="small"
        >
          Preview
        </Button>
      ),
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 100,
      valueFormatter: (params: any) => params.value.toLocaleString(undefined, { style: 'currency', currency: 'USD' }),
    },
    {
      field: 'description',
      flex: 1,
      headerName: 'Description',
      renderCell: (params: GridRenderCellParams) => (
        <Tooltip title={params.value as string}>
          <span className="MuiDataGrid-cell">{params.value}</span>
        </Tooltip>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        columns={columns}
        components={{ Toolbar: QuickSearchToolbar }}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
              requestSearch(event.target.value);
            },
            clearSearch: () => requestSearch(''),
          },
        }}
        disableColumnMenu
        disableSelectionOnClick
        getRowId={(row) => row.code}
        pageSize={pageSize}
        rows={rowsState}
        rowsPerPageOptions={[5]}
      />
      <ImageModal
        handleClose={handleClose}
        imagePath={imageSrc}
        open={open}
      />
    </div>
  );
};

export default Products;
