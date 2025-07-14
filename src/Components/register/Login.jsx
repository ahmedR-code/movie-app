import React from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

export default function Login() {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('MAIL IS NOT VALID').required('MAIL IS REQUIRED'),
    password: Yup.string().min(6, 'PASSWORD IS TOO SHORT').required('PASSWORD IS REQUIRED'),
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
    // fetch('/api/login', { method: 'POST', ... })

    alert('LOGGED IN SUCCESSFULLY!');
  };

  return (
    <div className="container mt-5 border p-5 rounded-4" style={{ maxWidth: '700px' }}>
      <h2 className="mb-4">LOGIN</h2>
      <p className="pM fs-5">Please login to your account</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group mb-3 d-flex flex-column">
          <label className='fs-5 mb-2'>EMAIL</label>
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
        <div className='d-flex justify-content-center gap-4'>
                
                <Link to="/" className="btn fs-4 border rounded-2 text-white bg-dark  hover-effect">Back</Link>
                <button type="submit" className="btn fs-4 border rounded-2 text-white bg-dark hover-effect">Login</button>
               
                </div>
       
        <div className='text-center mt-4 fs-5'> Have already an account? <Link to="/register">Sign up!</Link></div>
     
      </form>
    </div>
  )
}
