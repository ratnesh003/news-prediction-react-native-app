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
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('There was a problem with the request:', error);
        return null;
    }
}

// Example data
// const data = {
//   Author: "Example Author",
//   Title: "Example Title",
//   Description: "Example Description"
// };

// Call the function and handle the result
// fetchPrediction(data)
//   .then(result => {
//     if (result !== null) {
//       console.log('Prediction result:', result);
//     }
//   });
