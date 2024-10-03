import {useTheme} from "../../../contexts/S5/ThemeContext.jsx";

export const Footer = () => {
    const {theme} = useTheme();
    return <footer className={theme}>
        {new Date().getFullYear()}
    </footer>;
};
