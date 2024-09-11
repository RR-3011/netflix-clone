import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id}=useParams();
  const navigate=useNavigate()

const [apiData,setApiData]=useState({name:'',
  key:'',
  published_at:'',
  typeof:''
})

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTc0OTM3ZWFjMGEzNjE0MjY0NzFmNDMzNTU0NTM4ZiIsIm5iZiI6MTcyNDk0OTA0NC4xMDI2MDMsInN1YiI6IjY2ZDBhMTIzZTI2YjUyYTU2YTQ1Mzg5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rtOqLK8463n2yY-P_ZVXEiIRXee5i5U1psgfB-mPESE'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response =>setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])


  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
    <iframe src={`https://www.youtube.com/embed/${apiData.key}`} width='90%' height='90%' title='trailer' allowFullScreen frameBorder="0"></iframe>
      <div className="player-info">
      <p>{apiData.published_at.slice(0,10)}</p>
      <p>{apiData.name}</p>
      <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player
