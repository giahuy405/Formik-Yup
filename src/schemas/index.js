import * as yup from 'yup';

const passwordRegex = /^[0-9]{5,10}$/;

export const basicSchema = yup.object().shape({
    email: yup
        .string()
        .email("Email không đúng định dạng")
        .required("Vui lòng nhập email"),
    phone: yup
        .number()
        .required('Vui lòng nhập sdth'),
    password: yup
        .string()
        .min(5)
        .matches(passwordRegex, { message: "Vui lòng nhập mật khẩu mạnh hơn" })
        .required('Vui lòng nhập mật khẩu'),
    confirmPassword: yup.
        string()
        .oneOf([yup.ref('password'), null], 'Mật khẩu không trùng').required('Vui lòng xác nhận mật khẩu')
})


export const advanceSchema = yup.object().shape({
    username: yup
        .string()
        .min(3, 'username phải có ít nhất 3 kí tự')
        .required('Vui lòng nhập username'),
    jobType: yup
        .string()
        .oneOf(['designer', 'developer', 'manager', 'other'], null)
        .required('Vui lòng chọn nghề'),
    acceptedTos: yup
        .boolean()
        .oneOf([true], 'Hãy đồng ý tiêu chuẩn')
})