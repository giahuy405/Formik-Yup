import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { advanceSchema } from '../schemas';
import CustomCheckbox from './CustomCheckbox';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

const onSubmit = async (values, actions) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 1000));
    console.log(values)
    console.log(actions)
    actions.resetForm();
}

const FormikComponent = () => {

    return (
        <div className='bg-gray-700 h-screen pt-12'>
            <div className='mx-auto max-w-xl bg-blue-200 rounded-xl p-5 '>
                <Formik
                    initialValues={{ username: '', jobType: '', acceptedTos: false }}
                    // validation
                    validationSchema={advanceSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form>
                            {/* INPUT */}
                            <CustomInput
                                label='Username'
                                name='username'
                                type='text'
                                placeholder='Enter your username'
                            />
                            <br /> <br />
                            {/* SELECT */}
                            <CustomSelect
                                label='Job type'
                                name='jobType'
                                placeholder='Chooose a job'
                            >
                                <option value="">Please choose a job</option>
                                <option value="desginer">Designer</option>
                                <option value="developer">Developer</option>
                                <option value="manager">Manager</option>
                                <option value="other">Other</option>
                            </CustomSelect>
                            <br /> <br />
                            {/* CHECKBOX */}
                            <CustomCheckbox
                                type='checkbox'
                                name='acceptedTos'
                                id="myCheckbox"
                            />



                            <button
                            // nếu đang trong quá trình submitting button sẽ disable
                            disabled={isSubmitting}
                            type="submit" className='bg-orange-500 text-white font-bold w-full p-2 rounded-lg hover:bg-orange-700 mt-5'  >
                                Submit
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default FormikComponent;