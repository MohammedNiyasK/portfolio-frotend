import ProjectCard from "./ProjectCard";

const ProjectContainer = () => {
  const workData = [1,2,3]
  return (
    <>
      <section className="work section" id="work">
        <span className="section-subtitle">My Portfolio</span>
        <h2 className="section-title">Recent Works</h2>
        <div className="work-container container grid">
          {
            workData.map(data => <ProjectCard /> )
          }
         
        </div>
      </section>
    </>
  );
};

export default ProjectContainer;
