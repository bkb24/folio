import React, { useState } from 'react'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const useForm = (initialData, validate, successCallback = () => console.log('success')) => {
    const [data, setData] = useState(initialData)
    const [errors, setErrors] = useState({})
    const [submitHit, setSubmitHit] = useState(false);
    const [success, setSuccess] = useState(false);

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

        if (Object.keys(validated).length === 0) {

            fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: encode({ "form-name": e.target['form-name'].value, ...data })
            })
            .then(data => {
                setSuccess(true);
            })
            .catch(error => alert(error));
        };
    }

    return {
        data,
        errors,
        onChange,
        onBlur,
        handleSubmit,
        success
    }
}

export default useForm
