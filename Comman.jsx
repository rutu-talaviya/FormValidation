import react from 'react';
import{Link} from 'react-router-dom';

const Comman=(props)=>{
   return(
    <>
    <section>
        <div className="container-fluid nav_bg">
            <div className="row">
                 <div className="col-10 mx-auto">

        <h1 className='mt-5'>{props.name} <strong>React Internship</strong></h1>
        <h2>{props.sname}</h2>

        <Link to={props.visit} className='btn'>{props.btname}</Link>

        </div>
        </div>
        </div>
        </section>
    </>

    );
};
export default Comman;