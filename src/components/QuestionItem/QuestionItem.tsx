import { Container, FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { useState } from "react"
import './QuestionItem.css'

type Props = {
    data: any
    id: number
}

export const QuestionItem = ({data, id}: Props) => {
    const [isTrue, setIsTrue] = useState(false)

    const listAnswers = () => {
        let answers = []
        answers.push(data.correct_answer)
        data.incorrect_answers.map((i: string) => (
            answers.push(i)
        ))
        return answers
    }

    return (
        <Container id={`${id}`}>
            <h3>{data.question}</h3>
            <RadioGroup data-option={isTrue} className={`radio_group_question_marc`}>
                {
                    listAnswers().map((item, index) => (
                        <FormControlLabel control={<Radio />} label={item} id={`${index}`} value={item} onChange={e => item === data.correct_answer ? setIsTrue(true) : setIsTrue(false)}/>
                    ))
                }
            </RadioGroup>
        </Container>
    )
}