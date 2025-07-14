import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Register = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('NAME IS REQUIRED'),
    email: Yup.string().email('MAIL IS NOT VALID').required('MAIL IS REQUIRED'),
    password: Yup.string().min(6, 'PASSWORD IS TOO SHORT').required('PASSWORD IS REQUIRED'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('CONFIRM PASSWORD IS REQUIRED'),
    terms: Yup.bool().required('Terms and conditions are required').oneOf([true], 'You must accept the terms and conditions'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = data => {
    console.log(data);

    // هنا تبعت request للـ API
    // fetch('/api/register', { method: 'POST', ... })

    alert('REGISTERED SUCCESSFULLY!');
  };

  return (
    <div className="container mt-5 border p-5 rounded-4" style={{ maxWidth: '700px' }}>
      <h2 className="mb-4">CREATE AN ACCOUNT</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-3 d-flex flex-column">
          <label className='fs-   mb-2'>NAME </label>
          <input
            type="text"
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
            {...register('name')}
          />
          <div className="invalid-feedback">{errors.name?.message}</div>
        </div>

        <div className="form-group mb-3 d-flex flex-column">
          <label className='fs-5  mb-2'>EMAIL</label>
          <input
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            {...register('email')}
          />
          <div className="invalid-feedback">{errors.email?.message}</div>
        </div>

        <div className="form-group mb-3 d-flex flex-column">
          <label className='fs-5 mb-2'>PASSWORD</label>
          <input
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            {...register('password')}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group mb-3 d-flex flex-column">
          <label className='fs-5 mb-2'>CONFIRM PASSWORD</label>
          <input
            type="password"
            className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
            {...register('confirmPassword')}
          />
          <div className="invalid-feedback">{errors.confirmPassword?.message}</div>
        </div>
        <div className="form-group mb-5 mt-5 d-flex flex-row justify-content-center">
          
          <input type="checkbox" {...register('terms')} className='form-check-input mx-3 mt-2 '/>
          <label className='fs-5 '>I agree all statements in Terms of service</label>
          {errors.terms && <p className="text-danger">Please accept the terms and conditions</p>}
        </div>
        <div className='d-flex justify-content-center gap-4'>
        
        <Link to="/" className="btn fs-4 border rounded-2 text-white bg-dark  hover-effect">Back</Link>
        <button type="submit" className="btn fs-4 border rounded-2 text-white bg-dark hover-effect">Register</button>
       
        </div>
       
        <div className='text-center mt-4 fs-5'> Have already an account? <Link to="/login">Login here</Link></div>
      </form>
    </div>
  );
};

export default Register;
