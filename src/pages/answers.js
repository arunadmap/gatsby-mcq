import React from "react"
import { CardHeader, Avatar,List, ListItem, ListItemAvatar, ListItemText} from "@mui/material"

const Answers = ({ answers }) => {
    const listItems = answers?.map((answer) => (
        <ListItem>
            <ListItemAvatar>
                <Avatar
                    alt={answer.index}
                    sx={{ width: 24, height: 24 }}
                >
                    {answer.index}
                </Avatar>
            </ListItemAvatar>
            <ListItemText primary={answer.content} />
        </ListItem>
    ))
    return (
        <List>{listItems}</List>
    );
}

export default Answers