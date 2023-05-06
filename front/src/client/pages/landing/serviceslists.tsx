import { ServicesCard } from "./services_card";

export const ServicesLists = () => {
    return (
      <div className="services">
        <ServicesCard
          title="Service 1"
          description="Description du service 1"
          icon={<i className="fas fa-code"></i>}
        />
        <ServicesCard
          title="Service 2"
          description="Description du service 2"
          icon={<i className="fas fa-laptop"></i>}
        />
        <ServicesCard
          title="Service 3"
          description="Description du service 3"
          icon={<i className="fas fa-mobile-alt"></i>}
        />
      </div>
    );
  };