import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import { darkTheme, lightTheme } from "../../theme";
import ThemeToggle from "../components/ThemeToggle";

const HomePage: React.FC = () => {
    const [darkMode, setDarkMode] = useState(false);
    const handleToggle = () => setDarkMode((prevMode) => !prevMode);

    return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Container>
                <Box
                    sx={{
                        p: 3,
                        mt: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 2,
                        bgcolor: "background.paper",
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                >
                    <ThemeToggle darkMode={darkMode} onToggle={handleToggle} />
                    <Typography sx={{color: "text.primary"}} variant="h5">Welcome</Typography>
                    <TextField label="Enter something" variant="outlined" fullWidth />
                    <Box sx={{ display: "flex", gap: 1, bgcolor: "background.paper" }}>
                        <Button variant="contained" color="error">Error</Button>
                        <Button variant="contained" color="warning">Warning</Button>
                        <Button variant="contained" color="info">Secondary</Button>
                        <Button variant="contained" color="success">Primary</Button>
                    </Box>
                    <Typography sx={{color: "text.primary"}}>{darkMode ? "Dark Mode!" : "Light Mode!"}</Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default HomePage;
