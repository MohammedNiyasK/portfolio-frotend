import React from 'react'
import './WorkCard.css'

interface WorkExperience {
    company: string;
    position: string;
    title: string;
    description: string;
  }

  interface WorkExperienceCardProps {
    experience: WorkExperience;
  }

const WorkCard: React.FC<WorkExperienceCardProps> = ({ experience }) => {
  return (
    <div className="work-experience-card">
    <h2>{experience.position}</h2>
    <h3>{experience.company}</h3>
    <h4>{experience.title}</h4>
    <p>{experience.description}</p>
  </div>
  )
}

export default WorkCard