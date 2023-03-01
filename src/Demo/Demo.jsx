import React from 'react';
import { useFormik } from 'formik';
import { basicSchema } from '../schemas';

const onSubmit = async (values, actions) => {
  
    console.log(values);
    console.log(actions);
    // clear các ô input sau 1 giây nhấn submit 
    await new Promise((resolve, reject) => setTimeout(resolve, 1000))
    actions.resetForm();
}

const Demo = () => {
    // touched dùng để validation khi mà ta vừa gõ xong input
    const { values, errors, handleChange, touched, handleBlur, handleSubmit ,isSubmitting } = useFormik({
        initialValues: {
            email: "",
            phone: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    })

    return (
        <div className='bg-gray-700 h-screen p-10'>
            <form className="box max-w-xl mx-auto bg-amber-400 p-5 rounded-2xl shadow-2xl" onSubmit={handleSubmit} autoComplete='off'>
                <p>Email</p>
                <input
                    className={errors.email && touched.email ? 'w-full p-1 rounded-md border border-red-600' : 'w-full p-1 rounded-md'}
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='email'
                    id='email'
                    type="text"
                />
                {/* hiển thị lỗi ra màn hình */}
                {errors.email && touched.email && <span className='text-red-500  mb-3 text-xs'>{errors.email}</span>}

                 
                 
                <p>Sdth</p>
                <input
                    className={errors.phone && touched.phone ? 'w-full p-1 rounded-md border border-red-600' : 'w-full p-1 rounded-md'}
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='phone'
                    id='phone'
                    type="text"
                />
                {/* hiển thị lỗi ra màn hình */}
                {errors.phone && touched.phone && <span className='text-red-500  mb-3 text-xs'>{errors.phone}</span>}



                <p>Mật khẩu</p>
                <input
                    className={errors.password && touched.password ? 'w-full p-1 rounded-md border border-red-600' : 'w-full p-1 rounded-md'}
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='password'
                    id='password'
                    type="text"
                />
                {/* hiển thị lỗi ra màn hình */}
                {errors.password && touched.password && <span className='text-red-500  mb-3 text-xs'>{errors.password}</span>}


                <p>Xác nhận mật khẩu</p>
                <input
                    className={errors.confirmPassword && touched.confirmPassword ? 'w-full p-1 rounded-md border border-red-600' : 'w-full p-1 rounded-md'}
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name='confirmPassword'
                    id='confirmPassword'
                    type="text"
                />
                {/* hiển thị lỗi ra màn hình */}
                {errors.confirmPassword && touched.confirmPassword && <span className='text-red-500  mb-3 text-xs'>{errors.confirmPassword}</span>}



                {/* nút sẽ bị disabled mờ đi khi ta nhấn submit để tránh TH user click nhiều lần */}
                <button disabled={isSubmitting} className='bg-black text-white w-full mt-5 hover:bg-slate-600' type='submit'>submit</button>
            </form>
        </div>
    );
};

export default Demo;