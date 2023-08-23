import React, { useEffect, useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import { AppBar, Card, CardHeader, Grid, IconButton, Menu, MenuItem,  Toolbar } from '@mui/material';



export const Home = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [img, setImg] = useState();
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            setImg(response.data);
        } catch (error) {
            console.error('Error fetching URLs:', error);
        }
    };
    useEffect(() => {
        fetchData()
    }, [])
    console.log(img?.image);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        navigate('/')
    }

    return (
        <>
            <AppBar position="static">
                <Toolbar sx={{ justifyContent: 'right' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                    >
                    </IconButton>

                    <div>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            id="menu-appbar"

                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleLogout}>Log Out</MenuItem>
                        </Menu>
                    </div>

                </Toolbar>
            </AppBar>

            <div className="container-fluid">
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    {img?.map(elem => (
                        <Grid item xs={12} sm={6} md={3} key={elem.id}>
                            <Card sx={{ height: 400 }}>
                                <img
                                    src={elem.image}
                                    alt='...'
                                    width={250}
                                    height={300}
                                />
                                <CardHeader
                                    title={`${elem.title.substring(0, 23)}...`}
                                    subheader={elem.category}
                                />
                            </Card>
                        </Grid>

                    ))}
                </Grid>
            </div>
        </>

    );
}
