

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getQuestions: (numQuestions: number, setListQuestions: (data: never[]) => void) => {
        let data = fetch(`https://opentdb.com/api.php?amount=${numQuestions}`)
        let list:string[] = []
        
        data
            .then(res => res.json())
            .then(jsonData => {
                let data = jsonData
                
                setListQuestions(data.results)
            })
        return list
    }
}