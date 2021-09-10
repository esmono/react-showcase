import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import ClearIcon from '@material-ui/icons/Clear';
import SearchIcon from '@material-ui/icons/Search';

interface QuickSearchToolbarProps {
  clearSearch: () => void;
  onChange: () => void;
  value: string;
}

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'flex-start',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    padding: theme.spacing(0.5, 0.5, 0),
  },
  textField: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
    margin: theme.spacing(1, 0.5, 1.5),
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(0.5),
    },
    '& .MuiInput-underline:before': {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
  },
}));

const QuickSearchToolbar: React.FC<QuickSearchToolbarProps> = ({
  clearSearch,
  onChange,
  value,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TextField
        className={classes.textField}
        InputProps={{
          startAdornment: <SearchIcon fontSize="small" />,
          endAdornment: (
            <IconButton
              onClick={clearSearch}
              size="small"
              style={{ visibility: value ? 'visible' : 'hidden' }}
              title="Clear"
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        onChange={onChange}
        placeholder="Search…"
        variant="standard"
        value={value}
      />
    </div>
  );
};

export default QuickSearchToolbar;
