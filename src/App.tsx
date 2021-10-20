import './App.css'
import { Box, Container, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import TitleItem from './components/TitleItem/TitleItem'
import { useState } from 'react'
import {  useHistory } from 'react-router'
import ButtonLink from './components/ButtonLink/ButtonLink'

const App = () => {
	const [numQuestions, setNumQuestions] = useState('')
	let history = useHistory()
	const local = localStorage.getItem('reporting') === null ? '' : JSON.parse(localStorage['reporting'])

	const handleNumQuestions = (event: SelectChangeEvent) => {
		if (event.target.value !== '0') {
			history.push(`/startPage/${event.target.value}`)
		}
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
		<Container >
			<Box sx={{
				width: '100%',
				height: '100%',
				textAlign: 'center',
				margin: 'auto'
				}}>
			</Box>
			<Box sx={{ 
				width: '500px',
				borderRadius: '10px', 
				background: '#fff',
				padding: '20px',
				boxShadow: '5px 4px 10px rgba(0,0,0,0.1)'
			}}>
				<TitleItem text="Questionário sobre conhecimentos gerais"/>
				<FormControl sx={{width: '100%'}}>
					<InputLabel id="demo-simple-select-helper-label">Selecione a quantidade de questões</InputLabel>
					<Select
						labelId="demo-simple-select-helper-label"
						id="demo-simple-select-helper"
						value={numQuestions}
						label="Quantidade"
						onChange={handleNumQuestions}
					>
						<MenuItem value={5}>5</MenuItem>
						<MenuItem value={10}>10</MenuItem>
						<MenuItem value={15}>15</MenuItem>
						<MenuItem value={20}>20</MenuItem>
						<MenuItem value={25}>25</MenuItem>
						<MenuItem value={30}>30</MenuItem>
						<MenuItem value={35}>35</MenuItem>
						<MenuItem value={40}>40</MenuItem>
					</Select>
				</FormControl>
				{handleButtonReporting()}
			</Box>
		</Container>

	)
}

export default App