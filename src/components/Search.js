import React from 'react';
import TextField from '@material-ui/core/TextField';

export default function Search(props) {
  const { value, handleValue } = props;
  return (
    <div>
      <TextField
        id="outlined-search"
        label={value}
        placeholder="Search"
        type="search"
        variant="outlined"
        onChange={handleValue}
      />
    </div>
  );
}
