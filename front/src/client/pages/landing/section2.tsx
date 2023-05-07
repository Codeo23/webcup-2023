import { faCode, faLaptop, faMobile } from "@fortawesome/free-solid-svg-icons";
import { ServicesCard } from "./services_card";
import { Roadmap } from "./roadmap";
import { Pricing } from "./pricing";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

type Props = {}

export const Section2 = (props: Props) => {
  return (
    <div className="service_container">
      <div className="services">
        <ServicesCard
          title="Interprétation des rêves"
          description="Proposer un service d'interprétation de rêves pour aider les visiteurs à comprendre les messages que leur subconscient leur envoie pendant leur sommeil."
          icon={faCode}
        />
        <ServicesCard
          data-aos='flip-left'
          title="Prédiction de l'avenir"
          description="Offrir des prédictions de l'avenir basées sur les rêves des visiteurs. Cela peut inclure des prévisions sur leur vie amoureuse, leur carrière, leur santé, etc."
          icon={faLaptop}
        />
        <ServicesCard
          title="Consultations individuelles"
          description="Offrir des consultations individuelles pour les personnes qui souhaitent approfondir leur compréhension de leurs rêves et en savoir plus sur leur avenir."
          icon={faMobile}
        />
      </div>
      <div className="secondary_services">
        <div data-aos="fade-up" className="left_services" >
          <h4>PUISSANCE</h4>
          <h2>L'Intelligence Artificielle Onirix</h2>
          <h3>Des milliers de rectangles en mouvance dans un espace-temps indéfini, des nuances de gris aléatoires et un dialogue robotique : voilà à quoi est la puissance d’ORINIX</h3>
        </div>
        <img src="images/brains.png" alt="" />        
      </div>
      <div className="tertiaire_services">
        <img src="images/lune.png" alt="" />
        <div  className="next_services" data-aos="fade-up">
            <h4>STAT</h4>
            <h2>Vos rêves sont encore plus liés <br/> à votre vie quotidienne  que vous ne le pensez :</h2>
            <h3>20 000 rapports de rêve, afin de confirmer l’hypothèse d’une continuité entre les rêves et la réalité vécue au quotidien.</h3>
        </div>
        
      </div>
      <Roadmap />
      <Pricing />
    </div>
  )
}