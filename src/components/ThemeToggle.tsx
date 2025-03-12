import { Brightness4, Brightness7 } from "@mui/icons-material";
import { IconButton } from "@mui/material";

interface ThemeToggleProps {
    darkMode: boolean;
    onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ darkMode, onToggle }) => {
    return (
        <IconButton onClick={onToggle} sx={{ color: darkMode ? "white" : "#191A1E" }}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
    );
};

export default ThemeToggle;
