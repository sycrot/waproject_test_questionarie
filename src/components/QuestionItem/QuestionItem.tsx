import { Container } from "@mui/material"
import './QuestionItem.css'

type Props = {
    data: string
    key: number
}

export const QuestionItem = ({data, key}: Props) => {
    return (
        <Container key={key}>
            {
                console.log(data)
            }
            <h1>...</h1>
        </Container>
    )
}