import { Box, Button, Card, IconButton, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()

    const handlePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const handleSubmit = () => {
        navigate('/home')
    }

    return (
        <>
            <div style={{ display: 'grid', placeItems: 'center', height: 720 }}>
                <Card sx={{ height: 400, placeItems: 'center', display: 'grid', width: 400, backgroundColor: 'lavender' }}>
                    <form className="App" onSubmit={handleSubmit}>
                        <Box>
                            <div>
                                <TextField variant="outlined" color="secondary" label='Username' size="large" sx={{ bgcolor: 'white', width: 260 }} />
                            </div><br />
                            <div>
                                <TextField
                                    variant="outlined"
                                    color="secondary"
                                    label='Password'
                                    type={showPassword ? "text" : "password"}
                                    sx={{ bgcolor: 'white' }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton onClick={handlePasswordVisibility} edge="end">
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </div><br />
                            <div>
                                <Button type="submit" variant="contained">Log In </Button>
                            </div>
                        </Box>
                    </form>
                </Card>
            </div>
        </>
    );
    }

    export default Login;
