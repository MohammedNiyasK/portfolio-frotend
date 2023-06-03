
import WorkCard from './WorkCard';

interface WorkExperience {
    company: string;
    position: string;
    title: string;
    description: string;
  }

const workExperienceData: WorkExperience[] = [{
    company: 'ABC Company',
    position: 'Software Engineer',
    title: 'Frontend Developer',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nec urna eu est fringilla hendrerit a et lectus.'
  }];

const WorkContainer = () => {
  return (
    <section className="work section" id="work">
    <span className="section-subtitle">My Portfolio</span>
    <h2 className="section-title">Recent Works</h2>
    <div className="work-container container grid">
      {
        workExperienceData.map(data => <WorkCard experience={data}/> )
      }
     
    </div>
  </section>
  )
}

export default WorkContainer