import React, { ReactFragment, useState} from "react"
import {
  CardActions,
  Button, Typography,
  CardHeader, CardContent,
  Card,
  Pagination,
  Stack
} from "@mui/material"
import AssignmentIcon from '@mui/icons-material/Assignment'
import RestoreIcon from '@mui/icons-material/Restore'
import AnswersList from "./answer-list"
import data from './questionPaper.json'

export default function Home() {

const [pageCount, setPageCount] = useState(data.NumberOfQuestions);

return (
    <>
      <Card >
        <CardHeader
          avatar={
            <AssignmentIcon color="primary" sx={{ fontSize: 40 }} />
          }
          action={
            <Button variant="contained" size="small" style={{ textTransform: 'none' }}>
              Practice Mode
            </Button>
          }
          title="Grade 12 ICT Exam"
          subheader="September 14, 2016"
        />
        <CardContent>
          {
            data.questions.map((question) => (
              <>
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
                    <AnswersList answers={question.answers}></AnswersList>
                  </CardContent>
                </Card>
              </>
            ))}
        </CardContent>
        <CardActions>
          <Stack spacing={2}>
            <Pagination count={pageCount} variant="outlined" shape="rounded" />
          </Stack>
        </CardActions>
      </Card>
    </>
  )
}
