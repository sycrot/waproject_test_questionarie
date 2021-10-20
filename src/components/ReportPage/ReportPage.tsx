import { Container } from "@mui/material"
import { Box } from "@mui/system"
import { useEffect, useState } from "react"
import ButtonLink from "../ButtonLink/ButtonLink"
import TitleItem from "../TitleItem/TitleItem"
import ReportItem from "./ReportItem/ReportItem"

const ReportPage = () => {
    const [list, setList] = useState([])
    const local = JSON.parse(localStorage['reporting'])

    useEffect(() => {
        let listReporting = local
        setList(listReporting)
    }, [])

    const handleReportItem = () => {
        if (list !== null) {
            return (
                list.map((item, index) => (
                    <ReportItem data={item} id={index} />
                ))
            )
        }
        return (
            <h1>sjjsjs</h1>
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