import { Container } from "@mui/material"
import { Box } from "@mui/system"
import { Link } from "react-router-dom"

type Props = {
    id: any
    data: any
}

const ReportItem = ({id, data}: Props) => {
    const getDate = () => {
        let date = new Date(data.date)
        let months = ['Janeiro',
        'Fevereiro',
        'Marco',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro']
        let dateFormat = ((date.getDate())) + ' de ' + ((months[date.getMonth() + 1])) + ' de ' + date.getFullYear() + ' / ' + ((date.getHours())) + ':' + ((date.getMinutes())) + ' h'
        return dateFormat
    }

    return (
        <Container
            sx={{
                height: '100px',
                background: '#e9f5fc',
                borderRadius: '10px',
                padding: '10px 0',
                margin: '10px 0',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}
        >
            <Box
                >
                <p style={{color: '#1a66b3'}}><strong style={{color: '#0d4059'}}>Número de acertos: </strong>{data.points}</p>
                <p style={{color: '#1a66b3'}}><strong style={{color: '#0d4059'}}>Data: </strong>{getDate()}</p>
            </Box>

            <Link 
                to={`/points/${id}`}
                style={{
                    width: '30%',
                    height: '80%',
                    background: '#4db2e5',
                    borderRadius: '5px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#0d4059',
                    textDecoration: 'none',
                    textTransform: 'uppercase'
                }}
            >
                Visualizar
            </Link>
        </Container>
    )
}

export default ReportItem