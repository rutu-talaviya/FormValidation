import react from 'react';
import{Link} from 'react-router-dom';

const About=()=>{
   return(
    <>
  
        <div className="container-fluid nav_bg">
            <div className="row">
                 <div className="col-10 mx-auto">

        <h1 className='mt-5'>Welcome To About Page</h1>
        <h2>We are the team of React devloper making websites</h2>

        <Link to="/Service" className='btn'>Get started</Link>

        </div>
        </div>
        </div>
      
    </>

    );
};
export default About;