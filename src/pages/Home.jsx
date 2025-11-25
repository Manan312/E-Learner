import React, { useEffect } from 'react'
import About from '../components/About'
import Courses from '../components/Courses'
import '../styles/pages/Home.css'

export default function Home() {
  useEffect(() => {
    document.title = "E-Learner - Home";
  }, []);
  return (
    <div>
        <About />
        <Courses />
    </div>
  )
}
