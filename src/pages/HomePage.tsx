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
                    <Typography variant="h5">Welcome</Typography>
                    <TextField label="Enter something" variant="outlined" fullWidth />
                    <Box sx={{ display: "flex", gap: 1, bgcolor: "background.default" }}>
                        <Button variant="outlined" color="secondary">Cancel</Button>
                        <Button variant="contained" color="primary">Submit</Button>
                    </Box>
                    <Typography>{darkMode ? "Dark Mode is ON" : "Light Mode is ON"}</Typography>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default HomePage;
