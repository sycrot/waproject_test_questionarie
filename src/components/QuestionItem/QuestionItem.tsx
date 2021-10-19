import { Container, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useEffect, useState } from "react"
import './QuestionItem.css'

type Props = {
    data: any
    key: any
    onChange: (id: number, done: boolean) => void
}

export const QuestionItem = ({data, key, onChange}: Props) => {

    const listAnswers = () => {
        let answers = []
        answers.push(data.answers)
        return answers[0]
    }

    

    return (
        <Container key={key}>
            <h3>{data.question}</h3>
            <RadioGroup>
                {
                    listAnswers().map((item: string, index: any) => (
                        <FormControlLabel control={<Radio />} label={item} key={index} value={item} onChange={e => onChange(data.id, item === data.correct_answer ? true : false)}/>
                    ))
                }
            </RadioGroup>
        </Container>
    )
}