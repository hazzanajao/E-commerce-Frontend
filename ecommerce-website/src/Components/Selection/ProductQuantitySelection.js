import React from "react";
import {FormControl, InputLabel, MenuItem} from "@mui/material";
import Select, {  SelectChangeEvent} from "@mui/material/Select";
import Box from "@mui/material/Box";

function ProductQuantitySelection(){

    const [quantity, setQuantity] = React.useState('')

    const handleChange = (event: SelectChangeEvent) =>{
        setQuantity(event.target.value )

    }


    return (
        <Box sx={{ minWidth: 120 }} className="QuantitySelection">
            <FormControl fullWidth>
                <InputLabel id="select-label">Qty</InputLabel>
                <Select
                    labelId="select-label"
                    id="demo-simple-select"
                    value={quantity}
                    label="quantity"
                    onChange={handleChange}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                </Select>

                <button className="signup-buttons"style={{padding:"12px", borderRadius:"15px", border:"hidden"}} >

                    {/*  <button className="primary" type="signup"
                            style={{padding:"8px",
                                backgroundColor:"green",
                                color:"white",
                                border:"hidden",
                                margin:"2px",
                                borderRadius:"63px",
                                borderShadow:"0 0 4px black"
                            }} >Add to Basket
                    </button>
                    */}
                    <a href="/productlist" >
                    <button className="secondary" type="cancel"
                            style={{padding:"8px",
                                backgroundColor:"gold",
                                color:"black",
                                border:"hidden",
                                margin:"2px",
                                borderRadius:"63px",
                                borderShadow:"0 0 4px black"
                            }}>Buy Now
                    </button>
                    </a>
                    <br/>
                </button>
            </FormControl>

        </Box>
    )
}
export default ProductQuantitySelection;
