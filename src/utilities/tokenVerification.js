import axios from "axios";

export const verifyToken = async () => {
  return axios
    .get(`${import.meta.env.VITE_SERVER}/auth/verify/access`, {
      withCredentials: true,
    })
    .then((res) => {
      if (res.status == 200) {
        return true;
      }
    })
    .catch((err) => {
      if (err.status === 403) {
        return axios
          .get(`${import.meta.env.VITE_SERVER}/auth/refresh`, {
            withCredentials: true,
          })
          .then((res) => {
            if (res.status == 200) {
              return true;
            }
          })
          .catch((err) => {
            if (err.status == 403 || err.status == 401) {
              localStorage.clear();
              return false;
            }
          });
      } else {
        localStorage.clear();
        return false;
      }
    });
};
