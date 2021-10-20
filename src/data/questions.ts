import AnswersRandom from "../controllers/AnswersRandom"
import { Question } from "../types/Question"


// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getQuestions: (numQuestions: number, setQuestions: (questionsList: Question[]) => void) => {
        let data = fetch(`https://opentdb.com/api.php?amount=${numQuestions}`)
        let list:Question[] = []
        
        data
            .then(res => res.json())
            .then(jsonData => {
                let data = jsonData.results

                data.forEach((res:any, index: any) => {
                    let answers:any = []
                    
                    answers.push(res.correct_answer)
                    res.incorrect_answers.map((i: string) => (
                        answers.push(i)
                    ))
                    
                    list.push({
                        id: index,
                        question: res.question,
                        answers: AnswersRandom.answersRandom(answers),
                        correct_answer: res.correct_answer,
                        answer_option: '',
                        point_question: false
                    })
                })

                setQuestions(list)
            })
    }
}