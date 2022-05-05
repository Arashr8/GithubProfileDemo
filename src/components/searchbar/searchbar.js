import React from 'react';
import {Box, Button, InputBase} from "@mui/material";
import {useTheme} from "../../theme";

const styles = {
    container: {
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        borderRadius: "0.5rem",
        boxShadow: "2px 21px 25px rgb(0 0 0 / 10%)",
        width: "100%",
        padding: "0.5rem 0.5rem 0.5rem 1.5rem",
        marginBottom: "1rem",
    },
    error : {
        color : "red",
        width : "8rem",
        fontSize : "0.85rem"
    }
}

const Searchbar = ({setUsername, username, onSearch,notFoundError}) => {
    const {mode} = useTheme()
    return (
        <Box style={styles.container} sx={{backgroundColor: mode === "dark" ? "dark.gray" : "light.light"}}>
            <img src={"/assets/icon-search.svg"}/>
            <InputBase onKeyPress={e=>e.code==="Enter" && onSearch()} value={username} onChange={e => setUsername(e.target.value)} sx={{width: "100%"}}
                       placeholder={"Search Github username..."}/>
            {notFoundError && <span style={styles.error}>No Results</span>}
            <Button size={"small"} onClick={onSearch}>Search</Button>
        </Box>
    );
};

export default Searchbar;
