import { ENQUIRY_FORM } from "./types";

export const createEnquiryForm = (formData) => dispatch =>{
    console.log("action called!")
    fetch('https://jsonplaceholder.typicode.com/posts',{    // dummy API, create your API
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.jon())
    .then(form => dispatch({
        type: ENQUIRY_FORM,
        payload: form
    }));
}