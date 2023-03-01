import { useField } from 'formik';
import React from 'react';

const CustomInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);
    return (
        <>
            <p >{label}</p>
            {/* truyền props (name,type,placeholder) */}
            {/* field để giá trị có thể thay đổi */}
            <input
                {...field}
                {...props}
                className={
                    meta.touched && meta.error ?
                        "p-1 w-full border border-red-600" : "p-1 w-full"}
            />
            {/* hiển thị lỗi */}
            {meta.touched && meta.error &&
                <span className='text-xs text-red-500'>{meta.error}</span>}
        </>
    );
};

export default CustomInput;