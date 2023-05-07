import { NavLink } from "react-router-dom"

type Props = {}

export const Section1 = (props: Props) => {
  return (
    <div className="section1">
        <video autoPlay loop>
            <source src="video/OnirixPrésentation.mp4" type="video/mp4"/>
        </video>
            <div className="content">
                <div className="content_difference">
                    <h1>Bienvenue sur ma page de destination</h1>
                    <p>Ceci est une page de destination avec une vidéo en arrière-plan</p>
                </div>                    
                <div className="button-container">
                    <NavLink to="" className="btn-outline">
                        <div className="background">
                            <span className="background-hover"></span>
                            <span className="text">
                                <i className="fa-solid fa-play"></i>
                                    Watch Demo
                            </span>
                        </div>
                    </NavLink>
                </div>
            </div>            
    </div>
  )
}