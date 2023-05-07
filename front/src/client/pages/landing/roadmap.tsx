import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { RoadmapItem } from '../components/roadmapItem'

type Props = {}

export const Roadmap = (props: Props) => {
    return (
        <section className='roadmap'>
            <div className='roadmap-timeline'>
                <VerticalTimeline>
                    <RoadmapItem />
                    <RoadmapItem />
                    <RoadmapItem />
                    <RoadmapItem />
                </VerticalTimeline>
            </div>
        </section>
    )
}