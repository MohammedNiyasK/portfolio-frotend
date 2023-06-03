import ProjectCard from "./ProjectCard";
import axios,{AxiosResponse} from 'axios'
import { useEffect,useState } from "react";

const apiUrl = "https://portfolio-backend-9bae.onrender.com"

export interface Data {
  _id: {
    $oid: string;
  };
  title: string;
  image: string;
  url: string;
}



const ProjectContainer = () => {
  const [data, setData] = useState<Data[]>([]);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response: AxiosResponse<Data[]> = await axios.get<Data[]>(apiUrl+"/portfolio/projects");
        setData(response.data);
      } catch (error) {
        // Handle error
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [data]);
  return (
    <>
      <section className="work section" id="work">
        <span className="section-subtitle">My Portfolio</span>
        <h2 className="section-title">Recent Works</h2>
        <div className="work-container container grid">
          {
            data.map((projectData) => <ProjectCard projectData={projectData} key={projectData.title}/> )
          }
         
        </div>
      </section>
    </>
  );
};

export default ProjectContainer;
