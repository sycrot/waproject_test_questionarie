import { Button, ButtonGroup, Container, TextField } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import ButtonLink from '../ButtonLink/ButtonLink'
import TitleItem from '../TitleItem/TitleItem'

export const HomePage = () => {
	const [numQuestions, setNumQuestions] = useState(0)
	const local = localStorage.getItem('reporting') === null ? '' : JSON.parse(localStorage['reporting'])

	const handleNumQuestions = (num: number) => {
		setNumQuestions(+num)
	}

	const handleButtonReporting = () => {
		if (local !== '') {
			return (
				<Box sx={{marginTop: '10px'}}>
					<ButtonLink text="Relatórios" link="/reporting" color="#59200d" textColor="#f9dcd2"/>
				</Box>
			)
		}
	}
    
    return (
        <Container maxWidth="sm" 
			sx={{
				borderRadius: '10px', 
				background: '#fff',
				padding: '20px',
				boxShadow: '5px 4px 10px rgba(0,0,0,0.1)'
			}}>
			<Box 
				component="form" 
				sx={{ width: '500px'}}
				mt={2}
				noValidate
				autoComplete="off">
					<TitleItem text="Questionário sobre conhecimentos gerais"/>
					<TextField
						id="outlined-required" 
						label="Digite a quantidade de questões" 
						sx={{marginTop: '10px'}}
						variant="outlined" 
						fullWidth 
						onChange={e => handleNumQuestions(+e.target.value)} value={numQuestions}/>

					<ButtonGroup 
						variant="outlined" aria-label="outlined button-group" 
						fullWidth 
						sx={{
							mt: '12px',
							pointerEvents: `${numQuestions > 0 ? 'inherit' : 'none'}`}}>
						<ButtonLink 
							text="Start" 
							link={`/questions/${numQuestions}`}	
							color="#4db2e5"
							textColor="#0d4059"
						/>
						<Button color="error" onClick={e => setNumQuestions(0)} sx={{marginLeft: '10px'}}>Cancel</Button>
					</ButtonGroup>
			</Box>

			{handleButtonReporting()}
		</Container>
    )
}