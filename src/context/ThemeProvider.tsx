import { createContext, useEffect, useState, type FC, type ReactNode } from "react"

type Theme = "Theme1" | "Theme2" | "Theme3";

interface ThemeContextType  {
    theme : Theme;
    setTheme : (theme : Theme) => void;

}

export const ThemeContext = createContext<ThemeContextType>({
    theme : "Theme1",
    setTheme : ()=>{}
})

export const ThemeProvider:FC<{children : ReactNode}> = ({children})=>{

    const [theme , setTheme] = useState<Theme>(()=>{

        const storedTheme = localStorage.getItem("theme");
        return (storedTheme as Theme) || "Theme1";
    });

    useEffect(()=>{
        localStorage.setItem("theme", theme);
    },[theme]);

    return (
        <ThemeContext.Provider value={{theme , setTheme}}>

<div className={theme}>{children}</div>
        </ThemeContext.Provider>
    )
}