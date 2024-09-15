/* eslint-disable react/react-in-jsx-scope */
 
;
import videoplayback from '../../../../../campus-connect/videos/Snapinsta.app_video_3C4B2CC5404098BEB3DC8C0045BB878B_video_dashinit.mp4.json';
// eslint-disable-next-line no-unused-vars
import Prefrence from "../../../components/pefrencediv.js"

import BackgroundVideo from 'next-video/background-video';
export default function Home() {

    
    return (
      <div>
       <img
          className='h-80 w-48 object-cover rounded-lg '
        src={"/images/"+"download.jpeg"}
    
       
        alt={"img"}
        
        
        
        />
      <div><h1 className="text-9xl absolute top-44 z-50 text-white font-bold text-center font-sans">Connect. Engage. Discover</h1>
        <h1 className="text-2xl absolute top-96 mt-28 z-50 text-white font-bold text-center font-mono px-44">Campus Connect is the ultimate platform for students to discover and participate in exciting campus events.</h1></div>
        
        <div className="h-full">
        <BackgroundVideo   
             src={videoplayback} />
         
              
        </div>
        <div>
          <Prefrence/>
        </div>
      </div>
    );
  }

  
