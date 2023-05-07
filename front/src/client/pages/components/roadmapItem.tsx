import React from 'react'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'

type Props = {}

export const RoadmapItem = (props: Props) => {
    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="2011 - present"
            iconStyle={{ background: '#fff', color: '#000' }}
        >
            <h3 className="vertical-timeline-element-title">Creative Director</h3>
            <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
            <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
            </p>
        </VerticalTimelineElement>
    )
}