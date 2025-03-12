import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    shadows: Array(25).fill("none") as any,
    palette: {
        mode: "light",
        text: {
            primary: "#2C3E50",
            secondary: "#5A6B7B",
        },
        primary: {
            main: "#007AFF",
            contrastText: "#FFFFFF",
        },
        secondary: {
            main: "#6C757D",
            contrastText: "#FFFFFF",
        },
        background: {
            default: "#F4F6F8",
            paper: "#e0e0e0",
        },
        error: {
            main: "#E74C3C",
        },
        warning: {
            main: "#F39C12",
        },
        info: {
            main: "#3498DB",
        },
        success: {
            main: "#2ECC71",
        },
    },
    typography: {
        fontFamily: "Geist-Regular",
    },
});

export const darkTheme = createTheme({
    shadows: Array(25).fill("none") as any,
    palette: {
        mode: "dark",
        text: {
            primary: "#E0E0E0",
            secondary: "#B0BEC5",
        },
        primary: {
            main: "#90CAF9",
            contrastText: "#121212",
        },
        secondary: {
            main: "#FF9800",
            contrastText: "#121212",
        },
        background: {
            default: "#121212",
            paper: "#1E1E1E",
        },
        error: {
            main: "#E57373",
        },
        warning: {
            main: "#FFB74D",
        },
        info: {
            main: "#64B5F6",
        },
        success: {
            main: "#81C784",
        },
    },
    typography: {
        fontFamily: "Geist-Regular",
    },
});
