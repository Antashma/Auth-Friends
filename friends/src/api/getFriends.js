import axios from 'axios'

export const getFriends = () => {
    return axios.get('http://localhost:5000/api/friends')
    .then(res => {
        console.log('sg: getFriends.js : getFriends : axios success : ', res)
        return res;
    })
    .catch(err => {
        console.error('There was an error fetching data: ', err)
        return err;
    })
}