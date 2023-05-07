import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React from "react"

type Props = {
    title: string,
    description : string,
    icon : IconProp;
}


export const ServicesCard = ({ title, description, icon }: Props) => {
    return (
    <div className="services-card" data-aos="zoom-in-left">
        <div className="services-card__icon">{<FontAwesomeIcon icon={icon}/>}</div>
        <h3 className="services-card__title">{title}</h3>
        <p className="services-card__description">{description}</p>
      </div>
    )
  }