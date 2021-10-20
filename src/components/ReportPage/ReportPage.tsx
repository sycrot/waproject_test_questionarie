import { Container } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import ButtonLink from "../ButtonLink/ButtonLink"
import TitleItem from "../TitleItem/TitleItem"
import ReportItem from "./ReportItem/ReportItem"

const ReportPage = () => {
    const [list, setList] = useState([])
    const local = localStorage.getItem('reporting') === null ? '' : JSON.parse(localStorage['reporting'])

    useEffect(() => {
        let listReporting = local
        setList(listReporting)
    }, [])

    const handleReportItem = () => {
        if (local !== '') {
            return (
                list.map((item, index) => (
                    <ReportItem data={item} id={index} />
                ))
            )
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
                    <p><strong style={{color: '#0d4059'}}>Lista vazia. Responda um questionário!</strong></p>
                </Box>
            </Container>
        )
    }

    return(
        <Container
            sx={{
                background: '#fff',
                borderRadius: '10px',
                boxShadow: '5px 4px 10px rgba(0,0,0,0.1)',
                padding: '10px 0',
                width: '800px'
            }}
        >
            <TitleItem text="Relatórios"/>
            {
                handleReportItem()
            }
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

export default ReportPage