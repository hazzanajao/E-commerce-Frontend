import React from "react";

import InputBase from '@mui/material/InputBase';
import SearchButton from "../SearchButton/SearchButton";

function BaseInput(){


    return(
        <InputBase className="input-button" style={{ width:"100%", border:"1px solid gray", borderRadius:"5px",backgroundColor:"white",  }}
             placeholder=" Search "
             inputProps={{ 'aria-label': 'search google ' }}
        >

        <SearchButton/>

        </InputBase>

    )
}
export default BaseInput;
