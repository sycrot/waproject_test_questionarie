import { Link } from "react-router-dom"

type Props = {
    text: string,
    link: string,
    color?: string,
    textColor?: string,
    onClick?: () => void
}

const ButtonLink = ({text, link, color, textColor, onClick}: Props) => {
    return (
        <Link 
            to={`${link}`}
            style={{
                width: '100%',
                height: '50px',
                background: `${color === '' ? '#4db2e5' : color}`,
                borderRadius: '5px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: `${textColor === '' ? '#0d4059' : textColor}`,
                textDecoration: 'none',
                textTransform: 'uppercase'
            }}
            onClick={onClick}
        >
            {`${text}`}
        </Link>
    )
}

export default ButtonLink