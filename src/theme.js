import {createTheme, ThemeProvider} from "@mui/material";
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import tinyColor from 'tinycolor2'
import {toggleThemeMode} from "./redux/slice/themeSlice";

const colors = {
    light: {
        blueColor: "#0079ff",
        grayColor: "#697c9a",
        lightBlueColor: "#4b6a9b",
        blackColor: "#2b3442",
        lightGray: "#f6f8ff",
        light: "#fefefe"
    },
    dark: {
        blueColor: "#0079ff",
        light: "#ffffff",
        black: "#141d2f",
        gray: "#1e2a47"
    }
}

export default (props) => {
    const mode = useSelector(store => store.theme.mode);
    const theme = React.useMemo(
        () =>
            createTheme({
                components: {
                    MuiButton: {
                        styleOverrides: {
                            root: {
                                background: colors[mode].blueColor,
                                color: mode === "dark" ? colors.dark.light : colors.light.light,
                                borderRadius: "0.5rem",
                                padding: "0.5rem 1rem",
                                "&:hover": {
                                    backgroundColor: tinyColor(colors[mode].blueColor).setAlpha(0.5) + " !important",
                                }
                            }
                        }
                    },
                    MuiLink: {
                        styleOverrides: {
                            root: {
                                color: mode === "light" ? colors.light.grayColor : colors.dark.light,
                                textDecoration: "unset",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            },

                        }
                    },
                    MuiInputBase: {
                        styleOverrides: {
                            root: {
                                fontSize: "0.9rem",
                                "&::placeholder": {
                                    color: mode === "dark" ? colors.dark.light : colors.light.lightGray,
                                }
                            }
                        }
                    }
                },
                typography: {
                    fontFamily: "space mono",
                    body1: {
                        color: mode === "light" ? colors.light.blackColor : tinyColor(colors.dark.light).setAlpha(0.7) + " !important",
                        fontSize: "0.85rem !important"
                    },
                    h1: {
                        fontFamily: "space mono",
                        fontWeight: "bold",
                        fontSize: 26,
                        lineHeight: "38px",
                        color: mode === "light" ? colors.light.blackColor : colors.dark.light
                    },
                    h2: {
                        fontFamily: "space mono",
                        fontWeight: "bold",
                        fontSize: 22,
                        lineHeight: 33
                    },

                    h3: {
                        fontFamily: "space mono",
                        fontWeight: "400",
                        fontSize: 16,
                        lineHeight: 24
                    },
                    h4: {
                        fontFamily: "space mono",
                        fontWeight: "400",
                        fontSize: 13,
                        lineHeight: 20
                    },
                    h6: {
                        color: colors.dark.blueColor,
                        fontSize : "0.85rem"
                    }

                },
                palette: {
                    mode,
                    ...colors
                },
            }),
        [mode],
    );
    return <ThemeProvider theme={theme}>
        {props.children}
    </ThemeProvider>
}

export const useTheme = () => {
    const mode = useSelector(store => store.theme.mode);
    const dispatch = useDispatch();

    return {
        mode,
        toggle: () => dispatch(toggleThemeMode())
    }
}

