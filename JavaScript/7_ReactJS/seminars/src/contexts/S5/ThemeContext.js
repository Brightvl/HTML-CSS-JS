/*
Задание 1
    ● Создайте контексты UserContext и ThemeContext с начальными
    значениями (например, имя пользователя: "Гость", тема: "светлая").
    ● Реализуйте компонент App:
        ○ Оберните дочерние компоненты
        в UserContext.Provider и ThemeContext.Provider.
        ○ Добавьте возможность изменения имени пользователя и темы через
        интерфейс пользователя.
    ● Создайте компоненты, использующие эти контексты:
        ○ Header должен отображать приветствие с именем пользователя.
        ○ Profile может показывать более детальную информацию о
        пользователе или просто использовать тему для стилизации.
        ○ Footer должен использовать тему для стилизации и,
        возможно, отображать копирайт с текущим годом.
    ● Добавьте возможность изменения темы и имени пользователя
    в интерфейсе, используя состояние в компоненте App и
    передавая функции для изменения через контекст.
*/

import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({
    theme: "light",
    toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
