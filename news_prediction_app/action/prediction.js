import axios from 'axios';

export const fetchPrediction = async (data) => {

    // const data = {
    //     Author: author,
    //     Title: title,
    //     Description: description
    // };

    // console.log(author,title,description);

    const model_url = 'https://ratneshpasi03.pythonanywhere.com/prediction';

    try {
        const response = await axios.post(model_url, JSON.stringify(data), {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status !== 200) {
            // throw new Error('Network response was not ok');
            console.log("Network not well")
        }
        return response.data;
    } catch (error) {
        console.error('There was a problem with the request:', error);
        return null;
    }
}