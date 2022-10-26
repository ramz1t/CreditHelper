import React from "react";
import { useState, useEffect } from "react";
import s from './DarkModeSwitch.module.css'

const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());
    const mqListener = (e) => {
        setIsDarkTheme(e.matches)
    }

    useEffect(() => {
        const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)")
        darkThemeMq.addListener(mqListener)
        return
    }, []);
    return isDarkTheme
}

const DarkModeSwitch = () => {

    const isDarkTheme = useThemeDetector();

    return (
        <div className={s.switch} dataDark={isDarkTheme}>
            <input type="checkbox" />
        </div>
    )
}

export default DarkModeSwitch