import Service from './Service';
import { serviceData } from '../util/data';

const Services = () => {
  return (
    <section className='section services' id='services'>
      <div className='section-title'>
        <h2>
          our <span>services</span>
        </h2>
      </div>
      <div className='section-center services-center'>
        {serviceData.map((service) => (
          <Service service={service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
