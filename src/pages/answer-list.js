import React, { useState } from "react"
import {
  List,
  Checkbox,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  IconButton
} from "@mui/material"
//import CheckIcon from '@mui/icons-material/Check'
//import CloseIcon from '@mui/icons-material/Close'

const AnswersList = ({ answers, userAnswer, setUserAnswerLists }) => {

  const [correctAnswer ] = useState(0)
  //const [checkedAnswer ] = useState(userAnswer)
  const [checked, setChecked] = useState(userAnswer)

  function isCorrectAnswer(answer) {
    if (answer === correctAnswer)
      return true
    else
      return false
  }

  function isChecked(value) {
    if (value === userAnswer)
      return true
    else
      return false
  }

  const handleToggle = (value) => () => {
    if (checked === value) {
      setChecked(0);
      setUserAnswerLists(0)
    } else {
      setChecked(value);
      setUserAnswerLists(value)
    }
  }

  return (
    <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>

      {answers?.map((answer) => {
        const labelId = `checkbox-list-secondary-label-${answer.key}`

        return (
          <ListItem
            key={answer.key}
            selected={isCorrectAnswer(answer.key)}
            secondaryAction={
              <IconButton edge="end" aria-label="comments">
                {/* <CheckIcon color="success" />
                <CloseIcon color="error" /> */}
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} onClick={handleToggle(answer.key)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={isChecked(answer.key)}
                  tabIndex={-1}
                  inputProps={{ 'aria-labelledby': labelId }}
                  disableRipple
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={answer.content} />
            </ListItemButton>
          </ListItem>
        )
      })}
    </List>
  )
}

export default AnswersList