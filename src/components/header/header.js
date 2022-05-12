import React from 'react';
import {ButtonBase, Typography} from "@mui/material";
import {useTheme} from "../../theme";
import './header.scss'

const Header = () => {
    const {mode, toggle} = useTheme()
    return (
        <header>
            <Typography variant="h1" component="h1" sx={{color : mode==="light" ? "light.blackColor" : "dark.light"}}>devfinder</Typography>
            <ButtonBase onClick={toggle} >
                <Typography sx={{fontSize : "0.8rem" ,color : mode==="light" ? "light.grayColor" : "dark.light"}}>{mode}</Typography>
                <img src={mode === "light" ? "/assets/icon-moon.svg" : "/assets/icon-sun.svg"}/>
            </ButtonBase>
        </header>
    );
};

export default Header;
