import React from 'react';
import {Box, Button, InputBase} from "@mui/material";
import {useTheme} from "../../theme";
import  './searchbar.scss'

const Searchbar = ({setUsername, username, onSearch,notFoundError}) => {
    const {mode} = useTheme()
    return (
        <Box className={"container"} sx={{backgroundColor: mode === "dark" ? "dark.gray" : "light.light"}}>
            <img src={"/assets/icon-search.svg"}/>
            <InputBase onKeyPress={e=>e.code==="Enter" && onSearch()} value={username} onChange={e => setUsername(e.target.value)} sx={{width: "100%"}}
                       placeholder={"Search Github username..."}/>
            {notFoundError && <span className={"error"}>No Results</span>}
            <Button size={"small"} onClick={onSearch}>Search</Button>
        </Box>
    );
};

export default Searchbar;
