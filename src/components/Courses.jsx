import React from 'react'
import courses from '../data/courses.js'
import '../styles/components/Courses.css'
export default function Courses() {
  function handleImageClick(url) {
    window.open(url, '_blank');
  }
  return (
    <div>
      <h2 style={{textAlign: 'center', margin: '20px 0'}}>Our Courses</h2>
      <div className="coursesContainer">
        {courses.map((course) => (
          <div className="courseCard" key={course.id}>
            <h3 className="courseTitle">{course.title}</h3>
            <p className="courseDescription">{course.description}</p>
            <img src={course.image} alt={course.title} className="courseImage" onClick={() => handleImageClick(course.link)} />
          </div>
        ))}
      </div>
    </div>
  )
}
