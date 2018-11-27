import axios from 'axios';

const getEmployeeDetailbyId = (empId) => {
    return axios({
      method: 'get',
      url: 'https://reqres.in/api/users/' + empId,
      headers: {
          'Accept': 'application/json'
      }
  })
      .then((response) => {
          return response.data;
      })
      .catch((err) => {
          console.log(err);
      });

}

export default {getEmployeeDetailbyId}