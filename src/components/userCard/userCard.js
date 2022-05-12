import React from 'react';
import {Box, Typography} from "@mui/material";
import './userCard.scss';
import {useTheme} from "../../theme";
import moment from "moment";



const UserCard = ({data}) => {
    const {mode} = useTheme()
    return (
        <Box sx={{backgroundColor: mode === "dark" ? "dark.gray" : "light.light"}} className="userCard">
            <img className="avatar" src={data.avatar_url}/>
            <div>
                <Box className="userCard__header">
                    <img className="avatar2" style={{gridArea: "avatar"}} src={data.avatar_url}/>
                    <Typography style={{gridArea: "title"}} component="h1" variant={"h1"}>
                        {data.name}
                    </Typography>
                    <Typography className="date">Joined {moment(data.created_at).format("DD MMM YYYY")}</Typography>
                    <Typography style={{gridArea: "login"}} variant={"h6"}>@{data.login}</Typography>
                </Box>
                <Typography>{data.bio}</Typography>
                <Box sx={{
                    backgroundColor: mode === "light" ? "#f6f8ff" : "dark.black",
                    color: mode === "light" ? "light.blackColor" : "dark.light"
                }}
                     className="counts">
                    <span>Repos</span>
                    <span>Followers</span>
                    <span>Following</span>
                    <strong>{data.public_repos}</strong>
                    <strong>{data.followers}</strong>
                    <strong>{data.following}</strong>
                </Box>
                <div className="links">
                    <Typography className={!data.location && "disabled"}><img
                        src={"/assets/icon-location.svg"}/>{data.location || "Not Available"}</Typography>
                    <Typography className={!data.twitter_username && "disabled"}><img
                        src={"/assets/icon-twitter.svg"}/>{data.twitter_username || "Not Available"}
                    </Typography>
                    <Typography className={!data.blog && "disabled"}><img
                        src={"/assets/icon-website.svg"}/>{data.blog || "Not Available"}</Typography>
                    <Typography className={!data.company && "disabled"}><img
                        src={"/assets/icon-company.svg"}/>{data.company || "Not Available"}</Typography>
                </div>
            </div>
        </Box>
    );
};

export default UserCard;
