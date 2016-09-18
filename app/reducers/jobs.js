import axios from 'axios';


function jobs(state=[], action) {
  switch(action.type) {
    case 'GET_JOBS':
      const { userId } = action;

      axios.get(`/api/jobs/${userId}`)
        .then((res) => {
          return res;
        })
        .catch((err) => {
          console.log(err);
          return state;
        })

    default:
      return state;
  }
}

export default jobs;
