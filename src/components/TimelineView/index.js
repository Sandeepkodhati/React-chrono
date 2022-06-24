import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div>
      <div className="main-container">
        <h1 className="my-journey-heading">
          My Journey Of <br />
          <span className="ccbp-heading">CCBP 4.0</span>
        </h1>
      </div>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(eachData =>
            eachData.categoryId === 'COURSE' ? (
              <CourseTimelineCard
                key={eachData.id}
                courseTimelineData={eachData}
              />
            ) : (
              <ProjectTimelineCard
                key={eachData.id}
                projectTimelineData={eachData}
              />
            ),
          )}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
