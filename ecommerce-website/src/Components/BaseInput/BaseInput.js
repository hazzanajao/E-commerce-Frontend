import React from "react";

import InputBase from '@mui/material/InputBase';
import SearchButton from "./SearchButton";

function BaseInput(){


    return(
        <InputBase className="Input" sx={{ ml: 1, flex: 1, border:"1px solid gray", borderRadius:"5px" }}
             placeholder=" Search "
             inputProps={{ 'aria-label': 'search google ' }}
        >

        <SearchButton/>

        </InputBase>

    )
}
export default BaseInput;
