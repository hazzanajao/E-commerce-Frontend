import React from 'react';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ProductsCard from "../ProductCategory/ProductsCard";
import ProductTable from "../ProductListTable/ProductTable";
import ProductSlider from "../ProductSlider/ProductSlider";
import Footer from "../Footer/Footer"

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : 'white',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Layout() {


    return (
        <Box sx={{flexGrow: 1}}>

            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Item>

                        <ProductSlider/>

                    </Item>
                </Grid>
            </Grid>
            <br/>
            <h3 style={{textAlign: "center"}}> CATEGORIES
                <a href="/productlist"
                   style={{backgroundColor: "#F0A04B",marginLeft:"5px", borderRadius: "0", padding: "5px", color: "white"}}> ALL </a>

            </h3>
            <br/>
            <Grid container spacing={1}>
                {/*left for side selections */}
                <Grid item xs={2}>
                    <Item>
                        <ProductTable/>
                    </Item>
                </Grid>

                {/*Right for Product display */}

                <Grid item xs={10}>
                    <Item>

                        <ProductsCard/>

                    </Item>
                </Grid>

            </Grid>


        </Box>
    )
}

export default Layout;
