import React from 'react'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik';
// import { singupSchema } from './schemas';
import {singupSchema} from './schemas';

const initialValues={
  name:"",
  contact:"",
  email:"",
  password:"",
  confirm_password:""

}

const Contect=()=> {

const {values,errors,touched,handleBlur,handleChange,handleSubmit}=useFormik({

  initialValues,
  validationSchema: signupSchema,

  onSubmit:(values)=>{

    console.log(values);
  },

});

   

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label><br/>
        <input type="name"
               name="name" 
               id="name"
               placeholder="enter your full name"
                value={values.name}
                onChange={handleChange}
                onBlure={handleBlur}
               />
            {errors.name && touched.name?(<p className='form-error'>{errors.name}</p>):null}
      </div>
      
      <div class="mb-3">
        <label>Contact</label><br/>
        <input type="text"
         name="contact"
          id="contact"
          placeholder="enter contact number"
          value={values.contact}
          onChange={handleChange}
          onBlure={handleBlur}
          />
            {errors.contact && touched.contact?(<p className='form-error'>{errors.contact}</p>):null}
      </div>

      <div class="mb-3">
        <label>Email address</label><br/>
        <input type="email"
            name="email" 
             id="email" 
             placeholder="name@example.com"
               value={values.email}
                onChange={handleChange}
                onBlure={handleBlur}
             />
               {errors.email && touched.email?(<p className='form-error'>{errors.email}</p>):null}
      </div>

      <div class="mb-3">
        <label>Password</label><br/>
        <input type="password"
               name="password"
                id="password"
                placeholder="enter your password"
                 value={values.password}
                onChange={handleChange}
                onBlure={handleBlur}
                />
                  {errors.password && touched.password?(<p className='form-error'>{errors.name}</p>):null}
      </div>

      <div class="mb-3">
        <label>confirm Password</label><br/>
        <input type="password"
               name="confirm_password"
                id="confirm password"
                placeholder="enter confirm password"
                value={values.confirm_password}
                onChange={handleChange}
                onBlure={handleBlur}
                />
               {errors.confirm_password && touched.confirm_password?(<p className='form-error'>{errors.confirm_password}</p>):null}
      </div>

      <button type="button" class="btn btn-success">Submit</button>
      </form>
<br/>
<br/>
    <Link to='/Home'><button type="button" class="btn btn-success">GoBack</button></Link>
     
    </>
  );
};

export default Contect;
