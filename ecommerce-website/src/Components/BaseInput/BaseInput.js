import React from "react";

import InputBase from '@mui/material/InputBase';
import SearchButton from "../SearchButton/SearchButton";

function BaseInput(){


    return(
        <InputBase className="Input" sx={{ ml: 1, flex: 1, border:"1px solid gray", borderRadius:"5px",backgroundColor:"white",  }}
             placeholder=" Search "
             inputProps={{ 'aria-label': 'search google ' }}
        >

        <SearchButton/>

        </InputBase>

    )
}
export default BaseInput;
