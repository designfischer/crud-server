module.exports = {
    sanitizeArray(string) {
        if (string !== undefined) {
            const stringToArray = string.split(',')
            const newArray = stringToArray.map(item => item.trim())
            return newArray
        } else {
            return undefined
        }        
    }
}