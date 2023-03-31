import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductsCard from "../ProductCategory/ProductsCard";
import ProductTable from "../ProductListTable/ProductTable";
import ProductSlider from "../ProductSlider/ProductSlider";
import Footer from "../Footer/Footer"

function Layout() {


    return (
        <Box sx={{flexGrow: 1}}>

            <Grid container spacing={1} className="grid-slider">
                <Grid item xs={12}>
                        <ProductSlider/>
                </Grid>
            </Grid>

            <br/>
            <h3 style={{textAlign: "center"}}> CATEGORIES </h3>
            <br/>
            <Grid  container spacing={1} className="grid-table" >
                {/*left for side selections */}
                <Grid item xs={2} className="grid-productTable">
                        <ProductTable/>
                </Grid>

                {/*Right for Product display */}
                <Grid item xs={10} className="grid-productCard">
                        <ProductsCard/>
                </Grid>

            </Grid>


        </Box>
    )
}

export default Layout;
