import React from 'react'
import Header from './components/Header/Header'
import TopContainer from './components/TopContainer/TopContainer'
import SkillContainer from './components/SkillContainer/SkillContainer'
import ProjectContainer from './components/ProjectContainer/ProjectContainer'
import ExperienceContainer from './components/ExperienceContainer/ExperienceContainer'
import "./App.css"

function App() {
  return (
    <div>
    <Header/>
   <TopContainer/>
   <SkillContainer/>
   <ProjectContainer/>
   <ExperienceContainer/>
    </div>
  )
}

export default App