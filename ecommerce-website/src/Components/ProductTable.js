import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Divider from '@mui/material/Divider'
import { Avatar } from '@mui/material'

import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'

function ProductTable() {
  return (
    <Box sx={{ width: '100%', maxWidth: 360 }}>
      <nav aria-label="main mailbox folders" style={{ backgroundColor: 'white' }}>
        <List>
          <ListItemButton style={{ background: '#0B2447', color: 'white' }}>
            <ListItemIcon>
              <Avatar src="/broken-image.jpg" />
            </ListItemIcon>
            <ListItemText primary="Browse Our Products" />
          </ListItemButton>

          <ListItem disablePadding>
            <ListItemButton>
              <a href="/allProducts">
                <ListItemText primary="All Products" />
              </a>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <a href="/iPhoneProducts">
                <ListItemText primary="IPhones" />
              </a>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Computers" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="TVs" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Ipads" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Computer Accessories" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Power Banks" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Ipads" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Power Banks" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  )
}

export default ProductTable
