import React from 'react'
import IconButton from '@mui/material/IconButton'
import SearchIcon from '@mui/icons-material/Search'

function SearchButton() {
  return (
    <IconButton className="Search" type="button" sx={{ p: '10px' }} aria-label="search">
      <SearchIcon />
    </IconButton>
  )
}

export default SearchButton
