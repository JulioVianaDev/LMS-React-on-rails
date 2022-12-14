import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios'
import CourseList from './CourseList'
import CourseForm from './CourseForm'
import {Button,Modal} from 'react-bootstrap';
import {MainBtn} from '../styles/shared';
function Courses() {
  const [courses,setCourses] = useState([])
  const [adding, setAdd] = useState(false)
  useEffect(()=>{
    axios.get('/api/courses')
    .then(res => setCourses(res.data))
    .catch(err => console.log(err))
  },[])

  const addCourse = (course)=>{
    axios.post('/api/courses',{course})
    .then(res=>{
      setCourses([...courses,res.data])
    })
    .catch(err => console.log(err))
  }
  
  const editCourse = (id,course) => {
    axios.put(`/api/course/${id}`,{course})
    .then(res =>{
      let updatedCourses = courses.map(c=>{
        if (c.id === id){
          return res.data
        }
        return c
      })
      setCourses(updatedCourses)
    })
    .catch(err => console.log(err))
  }

  const deleteCourse =  (id) => {
    axios.delete(`/api/courses/${id}`)
    .then(res => {
      setCourses(courses.filter(c => c.id !== id))
    })
    .catch(err => console.log(err))
  }
  return (
    <>
     
      <MainBtn onClick={() => setAdd(true)}>
        +
      </MainBtn>

      <Modal show={adding} onHide={() => setAdd(false)}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <CourseForm addCourse={addCourse}/>
        </Modal.Body>
      </Modal>
      <CourseList
        courses={courses}
      />
    </>
  )
}

export default Courses
