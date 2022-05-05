import React from 'react';
import {Box, Typography} from "@mui/material";
import './userCard.scss';
import {useTheme} from "../../theme";
import moment from "moment";

const sample = {
    "login": "ethomson",
    "id": 1130014,
    "node_id": "MDQ6VXNlcjExMzAwMTQ=",
    "avatar_url": "https://avatars.githubusercontent.com/u/1130014?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/ethomson",
    "html_url": "https://github.com/ethomson",
    "followers_url": "https://api.github.com/users/ethomson/followers",
    "following_url": "https://api.github.com/users/ethomson/following{/other_user}",
    "gists_url": "https://api.github.com/users/ethomson/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/ethomson/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/ethomson/subscriptions",
    "organizations_url": "https://api.github.com/users/ethomson/orgs",
    "repos_url": "https://api.github.com/users/ethomson/repos",
    "events_url": "https://api.github.com/users/ethomson/events{/privacy}",
    "received_events_url": "https://api.github.com/users/ethomson/received_events",
    "type": "User",
    "site_admin": true,
    "name": "Edward Thomson",
    "company": "GitHub",
    "blog": "http://www.edwardthomson.com/",
    "location": "Cambridge, MA / Cambridge, UK",
    "email": null,
    "hireable": null,
    "bio": "Product Manager at @github.  Maintainer of @libgit2.\r\n",
    "twitter_username": "ethomson",
    "public_repos": 155,
    "public_gists": 34,
    "followers": 1247,
    "following": 1,
    "created_at": "2011-10-15T14:05:12Z",
    "updated_at": "2022-03-10T15:16:03Z"
}

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
