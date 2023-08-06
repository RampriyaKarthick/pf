import React from 'react'
import "./Experience.css"

function Experience({number, title, style}) {
  return (
    <div style={{...style}} className="experience">
    <h1>{number}</h1>
    <p className="centered">{title}</p>
    </div>
  )
}

export default Experience