import React, { useState } from "react"
import {
  CardActions,
  Button,
  Typography,
  CardHeader,
  CardContent,
  Card,
  Pagination,
  Stack
} from "@mui/material"
import AssignmentIcon from '@mui/icons-material/Assignment'
import AnswersList from "./answer-list"
import data from './questionPaper.json'

export default function Home() {

  const [pageCount] = useState(data.NumberOfQuestions)
  const [userAnswers, setUserAnswers] = useState({})
  const [page, setPage] = useState(1)
  const [question, setQuestion] = useState(getQuestionByNumber(1)[0])
  const [practiceMode] = useState(false)
  console.log(userAnswers);
  const setUserAnswerList = (value) => {
    const newUserAnswers = { ...userAnswers }
    newUserAnswers[question.key] = value
    setUserAnswers(newUserAnswers)
  }

  function getQuestionByNumber(number) {
    return data.questions.filter(
      function (question) {
        return question.key === number
      }
    )
  }

  const onPaginationChange = (event, value) => {
    setPage(value)
    setQuestion(getQuestionByNumber(value)[0])
    console.log("value = " + value + userAnswers[value]);
    if (userAnswers[value] === undefined) {
      const newUserAnswers = { ...userAnswers }
      newUserAnswers[value] = 0
      setUserAnswers(newUserAnswers)
    }
  }

  const renderPracticeButton = () => {
    if (practiceMode) {
      return <Button variant="contained" size="small" style={{ textTransform: 'none' }}>
        Practice Mode
      </Button>
    } else return <div></div>
  }

  return (
    <>
      <Card >
        <CardHeader
          avatar={
            <AssignmentIcon color="primary" sx={{ fontSize: 40 }} />
          }
          action={renderPracticeButton()}
          title="Grade 12 ICT Exam"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Card variant="outlined">
            <CardHeader
              title={<div><Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Mutiple choice question
              </Typography>
                <Typography variant="h5" component="div">
                  {question.index}.   {question.content}
                </Typography></div>}
            />
            <CardContent>
              <AnswersList
                answers={question.answers}
                userAnswer={userAnswers[question.key]}
                setUserAnswerLists={setUserAnswerList}
              >
              </AnswersList>
            </CardContent>
          </Card>
        </CardContent>
        <CardActions>
          <Stack spacing={2}>
            <Pagination count={pageCount}
              page={page}
              variant="outlined"
              shape="rounded"
              onChange={onPaginationChange}
              color="primary" />
          </Stack>
        </CardActions>
      </Card>
    </>
  )
}
