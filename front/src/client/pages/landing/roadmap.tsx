import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { RoadmapItem } from '../components/roadmapItem'

type Props = {}

export const Roadmap = (props: Props) => {
    return (
        <section className='roadmap'>
            <div className='roadmap-timeline'>
                <VerticalTimeline>
                    <RoadmapItem title='Raconte tes rêves' subtitle='Description par vocal ou écrit' description='Raconte tes rêves avant de s’authentifier '/>
                    <RoadmapItem title='Images illustrant vos rêves' subtitle="Proposition d'images" description="Capables d'analyser et de synthétiser des images de manière à reproduire des modèles récurrents dans les rêves humains."/>
                    <RoadmapItem title='Explication détaillée de tes rêves ' subtitle="Prédictions et informations" description="En identifiant les motifs récurrents dans les descriptions de rêves, l'IA peut fournir des informations sur les tendances futures qui pourraient affecter la vie d'un individu."/>
                </VerticalTimeline>
            </div>
        </section>
    )
}