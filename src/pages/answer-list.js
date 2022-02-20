import React from "react"
import { Chip, Checkbox, Stack, List, ListItem, ListItemAvatar, ListItemText, ListItemButton } from "@mui/material"

const AnswersList = ({ answers }) => {
  const [checked, setChecked] = React.useState([0])

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value)
    const newChecked = [...checked]

    if (currentIndex === -1) {
      newChecked.push(value)
    } else {
      newChecked.splice(currentIndex, 1)
    }

    setChecked(newChecked)
  }
  return (
    <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {answers.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value.key}`;
        return (
          <ListItem
            key={value.key}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(value.key)}
                checked={checked.indexOf(value.key) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            }
            disablePadding>
            <ListItemButton>
              <Stack direction="row" spacing={4}>
                <Chip label={value.index} />
                <ListItemText id={labelId} primary={value.content} />
              </Stack>
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

export default AnswersList