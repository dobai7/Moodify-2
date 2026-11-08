import axios from "axios";

// const api = axios.create({
//   baseURL:"https://moodify-jwuc.onrender.com",
//   withCredentials:true,
//   headers: {
//     'Cache-Control': 'no-cache'
//   }
// })

const api = axios.create({
  baseURL: import.meta.env.PROD ? "https://moodify-2-tb5x.onrender.com" : "http://localhost:3000",
  withCredentials: true
})

export async function updateMoodApi(mood){
  try{
    const response = await api.patch("/api/state/mood",{mood})
    return response.data
  }catch(err){
    throw err
  }
}

export async function updateSongApi(){
  try{
    const response = await api.patch("/api/state/song")
    return response.data
  }catch(err){
    throw err
  }
}

export async function getStatesApi(){
  try{
    const response = await api.get("/api/state/")
    return response.data
  }catch(err){
    throw err
  }
}