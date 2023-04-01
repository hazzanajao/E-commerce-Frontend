import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import {Avatar} from "@mui/material";

function ProductTable(){
    return(
        <Box sx={{ width: '100%', maxWidth: 360, }}>
            <nav aria-label="main mailbox folders" style={{backgroundColor: 'white'}}>
                <List>
                        <ListItemButton style={{ background:'#0B2447', color:'white'}}>
                            <ListItemIcon>
                                <Avatar src="/broken-image.jpg" />
                            </ListItemIcon>
                            <ListItemText primary="Browse Our Products" />
                        </ListItemButton>


                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="All Products" />
                        </ListItemButton>
                    </ListItem>



                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Phones Accessories" />
                        </ListItemButton>
                    </ListItem>



                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemText primary="Computers" />
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
export default ProductTable;
