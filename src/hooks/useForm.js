import React, { useState } from 'react'

const useForm = (initialData, validate, success = () => console.log('success')) => {
    const [data, setData] = useState(initialData)
    const [errors, setErrors] = useState({})
    const [submitHit, setSubmitHit] = useState(false);

    const onChange = e => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const onBlur = e => {
        if (!submitHit) return;
        let validated = validate(data);
        setErrors(validated);
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSubmitHit(true);
        let validated = validate(data);
        setErrors(validated);
        if (Object.keys(validated).length === 0) { success(); e.target.submit(); };
    }

    return {
        data,
        errors,
        onChange,
        onBlur,
        handleSubmit
    }
}

export default useForm
