import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';

export default function CourseShow (){
  const { id } = useParams()
  const [course, setCourse] = useState({ title: '', desc: '', ctype: '' })
  const { title, desc, ctype} = course
  
  useEffect( () => {
    axios.get(`/api/courses/${id}`)
      .then( res => setCourse(res.data) )
      .catch( err => console.log(err) )
  }, [])

  return (
    <>
      <h1>Course Title: {title}</h1>
      <h4>Course Description: {desc}</h4>
      <p>Course Type: {ctype}</p>
      <button>Edit</button>
      <button>Delete</button>
      <Link to='/courses'>Voltar</Link>
    </>
  )
}
