import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { VerticalTimelineElement } from 'react-vertical-timeline-component'
import { RootState } from '../../../core/store'
import { ThemeType } from '../../../core/types/theme-type'
import { toogleTheme } from '../../../core/slices/theme-slice'

type Props = {
    title : string,
    subtitle : string,
    description : string;
}

export const RoadmapItem = ({title, subtitle, description} : Props) => {

    
    const dispatch = useDispatch()
    const { theme } = useSelector<RootState>(state => state.theme) as { theme: ThemeType }

    useEffect(() => {
        if (localStorage.getItem("theme-webcup")) {
            const themeStorage = localStorage.getItem("theme-webcup") as ThemeType
            dispatch(toogleTheme(themeStorage))
            return
        }
    }, [])

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: theme==="theme-dark"?"#2C0933": "#FFF", color: '#000' }}
            contentArrowStyle={{ borderRight: '10px solid  #fff' }}
            iconStyle={{ background: '#fff', color: '#000' }}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
            <p>
                {description}
            </p>
        </VerticalTimelineElement>
    )
}