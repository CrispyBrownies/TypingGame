
const apiURL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

async function CheckWord(word) {
    try {
      const response = await fetch(apiURL + word);
      if (response.status !== 200) {
        return false;
      } else {
        return true;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  }

export default CheckWord