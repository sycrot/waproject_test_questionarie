import { Container } from "@mui/material"
import { Box } from "@mui/system"

type Props = {
    data: any,
    id: any
}

const QuestionResponse = ({data, id}: Props) => {
    return (
        <Container 
            id={id}
            sx={{
                background: `${data.point_question === true ? '#79ec83' : '#ec8c79'}`,
                borderRadius: '10px',
                margin: '20px 0',
                padding: '10px 0'
            }}
        >
            <Box>
                <h4>{data.point_question === true ? '✔️ Acerto' : '❌ Erro'}</h4>
                <h2 style={{
                    color: `${data.point_question === true ? '#0d5913' : '#591a0d'}`}}>{id+1}. Questao: {data.question}</h2>
                <h3 style={{color: '#0a062d'}}>Sua resposta: <strong style={{color: '#1b4b43'}}>{data.answer_option}</strong></h3>
            </Box>
        </Container>
    )
}

export default QuestionResponse