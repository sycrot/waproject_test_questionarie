// eslint-disable-next-line import/no-anonymous-default-export
export default {
    answersRandom: (arr: any) => {
        const newList = [...arr]
        
        for (let i = newList.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1))
            let temp = newList[i]

            newList[i] = newList[j]
            newList[j] = temp
        }
        return newList
    }
}