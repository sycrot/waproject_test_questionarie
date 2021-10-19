import { useState } from 'react'
import './App.css'
import { TextField, Box, Button, Container, Divider, ButtonGroup } from '@mui/material'
import { QuestionItem } from './components/QuestionItem/QuestionItem'
import Data from './data/questions'

const App = () => {
	const [numQuestions, setNumQuestions] = useState(0)
	const [display, setDisplay] = useState('block')
	const [listQuestions, setListQuestions] = useState([])
	const [points, setPoints] = useState(0)

	const getQuestions = () => {
		let res = Data.getQuestions(numQuestions, setListQuestions)
		return res
	}

	const handleNumQuestions = (e: string) => {
		setNumQuestions(+e)
	}

	const handleNum = () => {
		if (numQuestions !== 0) {
			setDisplay('none')
		}
		setNumQuestions(0)

		getQuestions()
	}

	const handleNumPoints = (value: string) => {
        if (value === 'true') return value
    }

	const handlePoints = () => {
		const radio = document.querySelectorAll('.radio_group_question_marc')

        let arr:any = []
        
        radio.forEach(e => {
            arr.push(e.getAttribute('data-option'))
        })

        let point = arr.filter(handleNumPoints)
        setPoints(point.length)
	}

	return (
		<Container>
			<Box sx={{width: '100%'}}>
				<h1>Perguntas sobre conhecimentos gerais</h1>
				<Divider/>
			</Box>
			<Container maxWidth="sm">
				<Box 
					component="form" 
					sx={{ width: '500px', display: display}}
					mt={2}
					noValidate
					autoComplete="off">
						<TextField id="outlined-required" label="Digite a quantidade de questoes" variant="outlined" fullWidth onChange={e => handleNumQuestions(e.target.value)} value={numQuestions}/>

						<ButtonGroup variant="outlined" aria-label="outlined button-group" fullWidth sx={{mt: '12px'}}>
							<Button variant="contained" color="success" onClick={e => handleNum()}>Start</Button>
							<Button color="error" onClick={e => setNumQuestions(0)}>Cancel</Button>
						</ButtonGroup>
				</Box>
			</Container>

			<Container maxWidth="sm">
				{
					listQuestions.map((item, index) => (
						<QuestionItem 
							data={item} 
							id={index}
							/>
					))
				}
			</Container>

			<Container maxWidth="sm">
				<Button onClick={e => handlePoints()}>Clickme</Button>
			</Container>
		</Container>

	)
}

export default App