import './index.css'
import {AiFillClockCircle} from 'react-icons/ai'

const CourseTimelineCard = props => {
  const {courseTimelineData} = props
  const {description, duration, courseTitle, tagsList} = courseTimelineData

  return (
    <div>
      <div className="row-container">
        <h1>{courseTitle}</h1>
        <p>
          <AiFillClockCircle />
          {duration}
        </p>
      </div>
      <p>{description}</p>
      <ul className="list-container">
        {tagsList.map(eachTag => (
          <p key={eachTag.id} className="list-item-container">
            {eachTag.name}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
