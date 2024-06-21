import './SectionTwo.css'
import { useEffect, useState } from 'react';
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

const URI = "http://localhost:2222";
const projectEndpoint = "/project";

function SectionTwo() {
  const [projects, setProjects] = useState([]);
  const [shouldUpdate, setShouldUpdate] = useState(true);

  const cld = new Cloudinary({
    cloud: {
      cloudName: 'didppzjta'
    }
  });
  const picURL = 'portfolio/mankyfwtcwgcndtojbn4';
  const book01 = cld.image('portfolio/mankyfwtcwgcndtojbn4');
  const book02 = cld.image('portfolio/e3cddhnr29ecwdgfrspo');

  book01.resize(fill().width(500).height(300));
  book02.resize(fill().width(700).height(350));

  useEffect(() => {
    fetchProjects();
  }, [shouldUpdate]);

  const fetchProjects = async () => {
    try {
      const response = await fetch(URI + projectEndpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include"
      });
      if (!response.ok) {
        console.error("Error fetching project data:");
      } else {
        const data = await response.json();
        setProjects(data);  
      }
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  return (
    <div className='section2'>
      <h2>Design</h2>
      <div id="para_div">
        <p>My Text</p>
        <p id="refl">My Text</p>
      </div>
      <div className='section2-container'>
        {projects.map((project, index) => (
          <div 
            className={'map-container'}
            key={index}
          >
            <h3>{project.name}</h3>
            <AdvancedImage cldImg={cld.image(`${project.imageUrls[0]}`).resize(fill().width(500).height(300))} />

          </div>  
        ))}
      </div>
       
    </div>
  )
}

export default SectionTwo

/*
      <AdvancedImage cldImg={book01} />
      <AdvancedImage cldImg={book02} />
*/ 

/**
 *  <div className='eyes'>
        <div className='eyeL'></div><div className='eyeR '></div>
    </div>
 */