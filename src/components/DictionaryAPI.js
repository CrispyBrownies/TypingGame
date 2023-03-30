
const apiURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

function CheckWord(word) {
    try {
        fetch(apiURL+word)
        .then((res) => {
            if (res.status !== 200) {
                return false
            } else {
                return true
            }
        })
    } catch (error) {
    }
}

export default CheckWord
