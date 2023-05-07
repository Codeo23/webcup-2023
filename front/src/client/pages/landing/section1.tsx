import { useEffect, useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import { Trans, useTranslation } from "react-i18next"
import { faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type Props = {}

export const Section1 = (props: Props) => {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [presentation,setPresentation ] = useState<boolean>(false)

    const togglePresentationView = () => {
        setPresentation(current => !current)
    }

    useEffect(() => {
        videoRef.current?.play()
    }, [])

    return (
        <div className="section1">
            <video autoPlay loop muted>
                <source src="video/OnirixPrésentation.mp4" type="video/mp4" />
            </video>

            <div className={`presentation ${presentation && "view"}`}>
                <p>Description</p>
                <button onClick={togglePresentationView}><FontAwesomeIcon icon={faClose} color="white" size="xl" /></button>
            </div>

            <div className="content">
                <div className="content_difference">
                    <h1><Trans i18nKey="hero.title1">Le rêve,l'humain et l'IA</Trans> <br /><Trans i18nKey="hero.title2">de séparés à combinés.</Trans></h1>
                    <p><Trans i18nKey="hero.title3">Comment les humains rêvent-ils, l'IA peut-elle prédire et prévoir les rêves humains?</Trans></p>
                </div>
                <button className="button-container" onClick={togglePresentationView}>
                    <NavLink to="" className="btn-outline">
                        <div className="background">
                            <span className="background-hover"></span>
                            <span className="text">
                                <i className="fa-solid fa-play"></i>
                                <Trans i18nKey="hero.weare">Qui sommes nous?</Trans>
                            </span>
                        </div>
                    </NavLink>
                </button>
            </div>

            <div className="desc">
                <p>Ceci est une page de destination avec une vidéo en arrière-plan</p>
            </div>
        </div>
    )
}