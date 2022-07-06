import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com"



export const fetchApi = async (url) =>{
    const {data} = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '06e6a9b0damshf7f693092aaa2a7p1f9447jsne37c6d4c793a',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }
    })


    return data
}