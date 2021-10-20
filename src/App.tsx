import './App.css'
import { Box, Container } from '@mui/material'
import { HomePage } from './components/HomePage/HomePage'

const App = () => {

	return (
		<Container >
			<Box sx={{
				width: '100%',
				textAlign: 'center'
				}}>
				<h1 style={{
					background: '#138686',
					width: '20%',
					padding: '40px 0',
					margin: 'auto',
					borderRadius: '20px',
					color: '#fff',
					border: '5px solid #79ecec',
					marginBottom: '15px',
                    boxShadow: '5px 4px 10px rgba(0,0,0,0.3)'
				}}>LOGO</h1>
			</Box>
			<Box>
				<HomePage />
			</Box>
			
		</Container>

	)
}

export default App