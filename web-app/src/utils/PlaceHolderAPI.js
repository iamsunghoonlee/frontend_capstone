const fetchAPI = date => {
    let result = [];

    for(let i = 12; i <= 21; i++) {
        result.push(i + ':00');
        result.push(i + ':30');
    }
    return result;
};

const submitAPI = formData => true;

export {
fetchAPI,
submitAPI
};