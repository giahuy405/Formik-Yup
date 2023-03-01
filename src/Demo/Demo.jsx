import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';

const Demo = () => {
    const { values, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        
    })
    console.log(values);
    return (
        <div className='bg-gray-700 h-screen p-10'>
            <form className="box max-w-xl mx-auto bg-amber-400 p-5 rounded-2xl shadow-2xl" onSubmit={handleSubmit}>
                <p>Email</p>
                <input
                    className='w-full p-1 rounded-md'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='email'
                    id='email'
                    type="text"
                />
                <p>Sdth</p>
                <input
                    className='w-full p-1 rounded-md'
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='phone'
                    id='phone'
                    type="text"
                />
                <p>Mật khẩu</p>
                <input
                    className='w-full p-1 rounded-md'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='password'
                    id='password'
                    type="text"
                />
                <p>Xác nhận mật khẩu</p>
                <input
                    className='w-full p-1 rounded-md'
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='confirmPassword'
                    id='confirmPassword'
                    type="text"
                />
            </form>
        </div>
    );
};

export default Demo;