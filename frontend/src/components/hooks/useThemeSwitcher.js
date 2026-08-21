import { useEffect, useState } from "react";

const useThemeSwitcher = () => {
    const [mode, setMode] = useState(null);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
        const userPref = window.localStorage.getItem("theme");

        const currentMode = userPref
            ? userPref
            : mediaQuery.matches
                ? "dark"
                : "light";

        setMode(currentMode);

        if (currentMode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        const handleChange = (event) => {
            // Если пользователь уже выбрал тему вручную,
            // системную тему больше не меняем
            if (window.localStorage.getItem("theme")) return;

            const newMode = event.matches ? "dark" : "light";

            setMode(newMode);

            if (newMode === "dark") {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        };

        mediaQuery.addEventListener("change", handleChange);

        return () => {
            mediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    useEffect(() => {
        if (!mode) return;

        window.localStorage.setItem("theme", mode);

        if (mode === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [mode]);

    return [mode, setMode];
};

export default useThemeSwitcher;