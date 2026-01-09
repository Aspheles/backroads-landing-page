import Tour from './Tour';
import { tourData } from '../util/data';

const Tours = () => {
  return (
    <section className='section' id='tours'>
      <div className='section-title'>
        <h2>
          featured <span>tours</span>
        </h2>
      </div>

      <div className='section-center featured-center'>
        {tourData.map((tour) => (
          <Tour tour={tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;
