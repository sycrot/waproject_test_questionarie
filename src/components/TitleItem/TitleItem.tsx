import { Box } from "@mui/system"

type Props = {
    text: string
}

const TitleItem = ({text}: Props) => {
    return (
        <Box>
            <h2
            style={{
                textAlign: 'center',
                background: '#a6f2f2',
                padding: '10px 0',
                borderRadius: '10px 10px 0 0',
                color: '#0d5959',
                borderBottom: '10px solid #185581'
            }}
            >{text}</h2>
        </Box>
        
    )
}

export default TitleItem