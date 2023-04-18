import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

import ProductsCard from './ProductsCard'
import ProductTable from './ProductTable'
import ProductSlider from './ProductSlider'

function Layout() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1} className="grid-slider">
        <Grid item xs={12}>
          <ProductSlider />
        </Grid>
      </Grid>
      <br />
      <h3 style={{ textAlign: 'center' }}> CATEGORIES </h3>
      <br />
      <Grid container spacing={1} className="grid-table">
        {/*left for side selections */}
        <Grid item xs={2} className="grid-productTable">
          <ProductTable />
        </Grid>

        {/*Right for Product display */}
        <Grid item xs={10} className="grid-productCard">
          <ProductsCard />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Layout
