import axios from "axios";

export function getUser(no) {
  return new Promise(function (resolve, reject) {
    return axios
      .get(`https://reqres.in/api/users/${no}`)
      .then((res) => {
        const { id, ...user } = res.data.data;
        resolve(user);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
