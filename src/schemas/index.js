import * as yup from ' yup';
import { message } from 'antd';
const passwordRegex = /^[0-9]{5,10}$/;

export const basicSchema = yup.object().shape({
    email: yup.string().email("Email không đúng định dạng").requireD('Vui lòng nhập email'),
    phone: yup.number().required('Vui lòng nhập sdth'),
    password: yup.string().min(5).matches(passwordRegex, { message: "Vui lòng nhập mật khẩu mạnh hơn" }).required('Vui lòng nhập mật khẩu'),
    // 
    confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'Mật khẩu không trùng').required('Vui lòng xác nhận mật khẩu')


})