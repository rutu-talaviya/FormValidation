import react from 'react';
import{Link} from 'react-router-dom';
import Comman from './Comman';

const Home=()=>{
   return(
    <>
   <Comman 
      name="Grow Your "
      sname="We are the team of React devloper making websites"
       visit="/Service"
       btname="GetStarted"/>
    
    </>

    );
};
export default Home;