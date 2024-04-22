import './SectionTwo.css'
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';
import {fill} from "@cloudinary/url-gen/actions/resize";

function SectionTwo() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'didppzjta'
    }
  });
  const myImage = cld.image('portfolio/mankyfwtcwgcndtojbn4');

  myImage.resize(fill().width(500).height(300));

  return (
    <div className='section2'>
      <h2>Design</h2>
      <div id="para_div">
  <p>My Text</p>
  <p id="refl">My Text</p>
</div>
      <div className='section2-container'>
      <AdvancedImage cldImg={myImage} />
      </div>
       
    </div>
  )
}

export default SectionTwo

/**
 *  <div className='eyes'>
        <div className='eyeL'></div><div className='eyeR '></div>
    </div>
 */