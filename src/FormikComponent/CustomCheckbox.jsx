import { useField } from 'formik';
import React from 'react';

const CustomCheckbox = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <>
            <div class="checkbox">
                <input
                    {...field}
                    {...props}
                />
                <label for="myCheckbox" className=''>Đồng ý các điều khoản</label>
            </div>

            {meta.touched && meta.error &&
                <span className='text-xs text-red-500'>{meta.error}</span>}
        </>
    );
};

export default CustomCheckbox;