import { faCode, faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";
import { ServicesCard } from "./services_card";

type Props = {}

export const Section2 = (props: Props) => {
  return (
    <div>
      <div className="service_container">
        <div className="services">
          <ServicesCard
            title="Service 1"
            description="Description du service 1"
            icon={faCode}
          />
          <ServicesCard
            title="Service 2"
            description="Description du service 2"
            icon={faLaptop}
          />
          <ServicesCard
            title="Service 3"
            description="Description du service 3"
            icon={faMobile}
          />
        </div>
        <div className="secondary_services">
          <div className="left_services">
            <h4>Rêvé à l'infini</h4>
            <h2>L'Intelligence Artificielle Onirix</h2>
            <h3>Grâce à l'apprentissage machine et à l'analyse de grands ensembles de données sur les rêves et les événements de la vie réelle, notre Intelligence Artificielle est capable de prédire avec précision certains événements futurs sur la base de vos rêves</h3>
          </div>          
          <img src="images/brains.png" alt="" />
        </div>
      </div>
    </div>
  )
}