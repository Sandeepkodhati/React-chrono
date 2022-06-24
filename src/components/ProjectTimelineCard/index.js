import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectTimelineData} = props
  const {
    projectTitle,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectTimelineData
  return (
    <div>
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="row-container">
        <h1>{projectTitle}</h1>
        <p>
          <AiFillCalendar /> {duration}
        </p>
      </div>
      <p>{description}</p>
      <a href={projectUrl} rel="noreferrer" target="_blank" className="link">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
