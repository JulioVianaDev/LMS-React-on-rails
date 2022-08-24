import {Route,Routes} from 'react-router-dom'
import Courses from './components/courses/Courses'
import Home from './components/shared/home/Home'
import MainNavbar from './components/shared/MainNavbar'
import Nomatch from './components/shared/Nomatch'
import CourseShow from './components/courses/CourseShow'
import './App.css'
export const App = ()=>{
 return(
  <>
  <MainNavbar/>
    <Routes>
      <Route path="/courses/:id" element={<CourseShow/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/courses" element={<Courses/>}/>
      <Route path="/*" element={<Nomatch/>}/>
    </Routes>
  </>
 )
}