import { Container } from "@mui/material"
import { Box } from "@mui/system"
import { useParams } from "react-router"
import { useEffect, useState } from "react"
import QuestionResponse from "./QuestionResponse/QuestionResponse"
import ButtonLink from "../ButtonLink/ButtonLink"

const PointsTemplate = () => {
    const params = useParams()
    const [listReport, setListReport] = useState([] as any)
    const [localQuestions, setLocalQuestions] = useState([] as any)
    const local = JSON.parse(localStorage['reporting'])
    
    useEffect(() => {
        let id = JSON.stringify(params)
        let ult = local[local.length -1]
        if (id !== '{}') {
            let idnum = JSON.parse(id)
            ult = local[idnum.id]
        }

        setListReport(ult)
        setLocalQuestions(ult.localQuestions)
    }, [])

    const getDate = () => {
        let date = new Date(listReport.date)
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
                width: '800px',
                background: '#fff',
                borderRadius: '10px',
                padding: '20px 0',
                boxShadow: '5px 4px 10px rgba(0,0,0,0.1)'
            }}
        >
            <Box
                sx={{
                    background: '#a6ccf2',
                    borderRadius: '10px 10px 0 0',
                    padding: '10px 0',
                    textAlign: 'center',
                    color: '#136986'
                }}
            >
                <h1>Relatório</h1>
                <small>{getDate()}</small>
            </Box>
            <Box
                sx={{
                    background: '#136986',
                    borderRadius: '0 0 10px 10px',
                    padding: '10px 0',
                    textAlign: 'center',
                    color: '#a6ccf2'
                }}
            >
                <h2>Acertos:</h2>
                <h1>{listReport.points} de {localQuestions.length}</h1>
            </Box>
            <Box>
                {
                    localQuestions.map((item:any, index:any) => (
                        <QuestionResponse data={item} id={index}/>
                    ))
                }
            </Box>
            <Box>
                <ButtonLink text="Relatórios" link="/reporting" color="#59200d" textColor="#f9dcd2"/>
            </Box>
            <Box sx={{marginTop: '10px'}}>
                <ButtonLink 
                    text="Voltar ao início" 
                    link="/"	
                    color="#4db2e5"
                    textColor="#0d4059"
                />
                
            </Box>
        </Container>
    )
}

export default PointsTemplate