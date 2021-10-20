import { Container, FormControlLabel, Radio, RadioGroup } from "@mui/material"

type Props = {
    data: any
    key: any
    onChange: (id: number, item: string, done: boolean) => void
}

export const QuestionItem = ({data, key, onChange}: Props) => {

    const listAnswers = () => {
        let answers = []
        answers.push(data.answers)
        return answers[0]
    }

    return (
        <Container key={key}>
            <h3 style={{color: '#0d4059'}}>{data.id+1}. {data.question}</h3>
            <RadioGroup>
                {
                    listAnswers().map((item: string, index: any) => (
                        <FormControlLabel 
                            control={<Radio sx={{color: '#0d4059'}}/>} 
                            sx={{color: '#06202d'}}
                            label={item} 
                            key={index} 
                            value={item} 
                            onChange={e => onChange(data.id, item, item === data.correct_answer ? true : false)}/>
                    ))
                }
            </RadioGroup>
        </Container>
    )
}