import Navbar from '@/components/Navbar';
import Background from '../components/Background';
import Herosection from '../components/Herosection';
import Newbatch from '@/components/Newbatch';
import Keyfactors from '@/components/Keyfactors';
import Ourfamily from '@/components/Ourfamily';
import Footer from '@/components/Footer';
import SocialLinks from '@/components/SocialLinks'

export default function Home() {
  const keyPointes = [
    {
      title: 'Skill Development Classes',
      imgUrl: 'students4.jpg',
      points: [
        'Communication Skills',
        'Public Speaking',
        'Group Discussion',
        'Grammar Control',
        'Presentation skills'
    ]
    },
    {
      title: 'Audio/Visual Classes',
      imgUrl: 'students1.jpg',
      points: [
        'Psycholical Training',
        'Picture Sessions',
        'Ted-Show Videos',
        'Effective Listening Session',
        'British & American Pronunciation'
    ]
    },
    {
      title: 'Special Features',
      imgUrl: 'students3.jpg',
      points: [
        'Personal Attention',
        'Life Time Membership',
        'Fully A.C Class Room',
        '8+ Years Experienced Faculty',
        
    ]
    }
  ]



  return (
   <>
  <Background />
  <Navbar />
  <Herosection />
  <div className='grid grid-cols-1 md:grid-cols-3 md:gap-16 gap-20 mt-10'>
    {
      keyPointes && keyPointes.map((keyp,index)=>(
        <Keyfactors key={keyp.title} title={keyp.title} imgurl={keyp.imgUrl} keypoints={keyp.points}/>
      ))
    }
  </div>
  <Newbatch />
  <SocialLinks />
  <Ourfamily />
  <Footer />
   </>
  );
}
