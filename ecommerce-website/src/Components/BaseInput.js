import React from "react";

import InputBase from '@mui/material/InputBase';
import SearchButton from "./SearchButton";

function BaseInput(){


    return(
        <InputBase className="input-button" style={{ width:"80%",marginRight:"5px", border:"1px solid gray", borderRadius:"5px",backgroundColor:"white",  }}
             placeholder=" Search "
             inputProps={{ 'aria-label': 'search google ' }}
        >

        <SearchButton/>

        </InputBase>

    )
}
export default BaseInput;
