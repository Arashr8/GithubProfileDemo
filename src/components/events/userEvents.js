import React from 'react';
import './userEvents.scss'
import {Box, Tooltip, Typography} from "@mui/material";
import moment from "moment";
import {useTheme} from "../../theme";


const UserEvents = ({data}) => {

    const {mode} = useTheme()

    const colors = [
        mode === "dark" ? "#4b556c" : "#f6f8ff",
        "#90e69e",
        "#38ec58",
        "#2a9745",
        "#005500",
    ]
    const formattedData = data ? Object.keys(data).reverse().map(key => {
        const count = data[key];
        let color;
        if (count === 0)
            color = colors[0];
        else if (count < 3)
            color = colors[1];
        else if (count < 5)
            color = colors[2];
        else if (count < 10)
            color = colors[3];
        else if (count >= 10)
            color = colors[4];
        return ({date: key, count, color});
    }) : []

    return (
        <Box sx={{backgroundColor: mode === "dark" ? "dark.gray" : "light.light"}} className="userEvents">
            <Typography>Commit
                History {formattedData?.[0]?.date} - {formattedData?.[formattedData.length - 1]?.date}</Typography>
            <div className="heatmap">
                {formattedData.reduce((acc, item) => {
                    if (acc[acc.length - 1].length < 5)
                        acc[acc.length - 1].push(item)
                    else acc.push([item])
                    return acc;
                }, [[]]).map((column, index) => <div key={index} className="column">{column.map(item => <Tooltip
                    key={item.date}
                    title={`${item.count} ${item.count > 1 ? "contributions" : "contribution"} ${moment(item.date, "YYYY-MM-DD").format("ll")}`}>
                    <div className="heatmap__cell" style={{backgroundColor: item.color}}/>
                </Tooltip>)}</div>)}
            </div>
        </Box>
    )
}

export default UserEvents
