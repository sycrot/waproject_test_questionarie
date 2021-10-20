import {  Container } from "@mui/material"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { Question } from "../../types/Question"
import { QuestionItem } from "./QuestionItem/QuestionItem"
import Data from '../../data/questions'
import {  Box } from "@mui/system"
import ButtonLink from "../ButtonLink/ButtonLink"
import TitleItem from "../TitleItem/TitleItem"

const ListQuestions = () => {
    const num = useParams()
    const [listQuestions, setListQuestions] = useState<Question[]>([])

    useEffect(() => {
        const getList = () => {
            let numQuest:string = JSON.stringify(num)
            let nums:any = JSON.parse(numQuest)
            let res = Data.getQuestions(nums.num, setListQuestions)
		    return res
        }
        getList()
    }, [])

    const handleTrue = (id: number, item: string, done: boolean) => {
        let newList = [...listQuestions]

		for (let i in newList) { 
			if (newList[i].id === id) {
                newList[i].answer_option = item
				newList[i].point_question = done
			}
		}

		setListQuestions(newList)
    }

    const handlePoints = () => {
		let points = 0

        let localQuestions:any = []
		listQuestions.forEach((item: any) => {
			if (item.point_question === true) {
				points++
			}
            localQuestions.push({
                id: item.id,
                answer_option: item.answer_option,
                question: item.question,
                point_question: item.point_question
            })
		})


		if (points !== 0) {
			let local = localStorage['reporting'] ? JSON.parse(localStorage['reporting']) : []

			let date = new Date(Date.now())

			local.push({
				date: date,
				points: points,
                localQuestions
			})

			localStorage.setItem('reporting', JSON.stringify(local))
		}

        window.scrollTo(0,0)
	}

    return (
        <Container sx={{
            background: '#fff',
            width: '800px',
            padding: '10px 0',
            borderRadius: '10px',
            boxShadow: '5px 4px 10px rgba(0,0,0,0.1)'
        }}>
            <TitleItem text="Responda as questões abaixo"/>
            {
                listQuestions.map((item, key) => (
                    <QuestionItem 
							data={item} 
							key={key}
							onChange={handleTrue}
							/>
                ))
            }
            <Box sx={{marginTop: '30px'}}>
                <ButtonLink link={`/points`} text="finalizar" onClick={handlePoints} color="#4db2e5" textColor="#0d4059"/>
            </Box>
            <Box sx={{marginTop: '10px'}}>
                <ButtonLink 
                    text="Cancelar" 
                    link="/"	
                    color="#861d13"
                    textColor="#f9d6d2"
                />
            </Box>
        </Container>
    )
}

export default ListQuestions