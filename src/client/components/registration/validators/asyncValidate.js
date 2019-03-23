import axios from 'axios'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const asyncValidate = (values /*, dispatch */ ) => {

    var headers = {
        'Content-Type': 'application/json',
    }

    return axios.post('/user/findByEmail',values, {headers: headers})
    .then((res) => {
        console.log(`got response ${JSON.stringify(res)}`);
    })
    .catch(error => {
        if(error !== undefined && error.response !== undefined && error.response.data.message !== undefined){
            throw {
                email:  error.response.data.message
            }
        }
        else{

            throw {
                email: 'internal error - please try again later'
            }

        }
    });
}

export default asyncValidate