/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./App.tsx"],
    theme: {
        extend: {
            spacing: {
                15: "3.75rem",
            },
            colors: {
                primary: {200: "#F2F8FF", 500: "#1A85E7"},
                secondary: {
                    200: "#dacaaa",
                    400: "#ded0b4",
                    600: "#d4c381",
                },
                textColor: {
                    darkText: "#13304b",
                    lightText: "#0000de",
                    hint: "#00008a",
                },
                borderColor: {
                    dark: "#13304b",
                    hint: "#0000006b",
                },
            },

            fontFamily: {
                gilroy: "Gilroy",
                openSans: "Open Sans, sans-serif",
                merriWeather: "Merriweather, serif"
              },
            flex: {
                full: "1 1 100%",
            },
            height: {
                logo: "68px",
            },
            minWidth: {
                20: "5rem",
                50: "12rem",
            },
            maxWidth: {
                20: "5rem",
                "3/10": "30%",
                "4/10": "40%",
                "9/10": "90%",
                50: "12rem",
                100: "24rem",
            },
            width: {
                logo: "188px",
                "3/10": "30%",
            },
            zIndex: {
                "-1": "-1",
                "-2": "-2",
                2000: 2000,
            },
            translate: {
                "24/25": "96%",
            },
        },
    },
    plugins: [],
};
