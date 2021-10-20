import { Container } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ButtonLink from '../ButtonLink/ButtonLink'
import TitleItem from '../TitleItem/TitleItem'

const StartPage = () => {
	const [numQuestions, setNumQuestions] = useState(0)
	const params = useParams()

	useEffect(() => {
        const getList = () => {
            let numParams:string = JSON.stringify(params)
            let num:any = JSON.parse(numParams)
            setNumQuestions(num.num)
        }
        getList()
    }, [])
    
    return (
        <Container 
			sx={{
				borderRadius: '10px', 
				background: '#fff',
				padding: '20px',
				boxShadow: '5px 4px 10px rgba(0,0,0,0.1)',
				margin: 'auto',
				width: '800px'
			}}>
			<Box 
				component="form" 
				mt={2}
				noValidate
				autoComplete="off">
					<TitleItem text="Questionário sobre conhecimentos gerais"/>

					<Box
						sx={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
							mt: '12px'
						}}>
						<Box sx={{width: '100%'}}>
							<ButtonLink 
								text="Start" 
								link={`/questions/${numQuestions}`}	
								color="#4db2e5"
								textColor="#0d4059"
							/>
						</Box>
						<Box sx={{width: '100%', marginLeft: '10px'}}>
							<ButtonLink 
								text="Cancel" 
								link="/"	
								color="#f2aca6"
								textColor="#59130d"
							/>
						</Box>
					</Box>
			</Box>
		</Container>
    )
}
export default StartPage