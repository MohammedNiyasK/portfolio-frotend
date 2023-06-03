import { Data } from "./ProjectContainer";

interface NextComponentProps {
  projectData: Data;
}
const ProjectCard:React.FC<NextComponentProps>  = ({projectData}) => {
  
  return (
   
        <div className="work-card">
            <img src={projectData.image} alt="" className="work-img" />
            <h3 className="work-title">{projectData.title}</h3>
            <a
              href={projectData.url}
              target="_blank"
              className="work-button"
            >
              Go to website<i className="bx bx-link work-icon"></i>
            </a>
          </div>
   
  )
}

export default ProjectCard