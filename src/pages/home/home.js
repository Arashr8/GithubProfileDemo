import React, {useEffect, useState} from 'react';
import Header from "../../components/header/header";
import Searchbar from "../../components/searchbar/searchbar";
import './home.scss'
import {Box} from "@mui/material";
import {useTheme} from "../../theme";
import UserCard from "../../components/userCard/userCard";
import UserEvents from "../../components/events/userEvents";
import moment from "moment";

const Home = () => {

    const {mode} = useTheme()
    const [username, setUsername] = useState("")
    const [searchValue, setSearchValue] = useState("")
    const [notFoundError, setNotFoundError] = useState()
    const [userEvents, setUserEvents] = useState()
    const [userInfo, setUserInfo] = useState()

    useEffect(() => {
        if (!username)
            return;
        const dates = {};
        let lastDate = moment();
        for (let i = 0; i < 150; i++) {
            dates[lastDate.format("YYYY-MM-DD")] = 0;
            lastDate.add(-1, "d")
        }
        fetch(`https://api.github.com/users/${username}`)
            .then(res => res.json())
            .then(data => {
                if (!data.name)
                    throw new Error(data.message)
                setUserInfo(data);
                setNotFoundError(false)
            }).catch(err => {
            setNotFoundError(true)
        })
        fetch(`https://api.github.com/users/${username}/events`)
            .then(res => res.json())
            .then(data => {
                setUserEvents(data.map(item => ({...item, created_at: item.created_at.split("T")[0]}))
                    .reduce((groups, item) => {
                        groups[item.created_at]++;
                        return groups;
                    }, dates));
            })
    }, [searchValue])

    const onSearch = (e) => {
        setSearchValue(username)
    }

    return (
        <Box className="home" sx={{bgcolor: mode === "light" ? "light.lightGray" : "dark.black"}}>
            <div className="home__container">
                <Header/>
                <Searchbar notFoundError={notFoundError} username={username} setUsername={setUsername}
                           onSearch={onSearch}/>
                {userInfo && <UserCard data={userInfo}/>}
                <UserEvents data={userEvents}/>
            </div>
        </Box>
    );
};

export default Home;
