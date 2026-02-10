import useAxiosSecure from "../hooks/useAxiosSecure";

const useApplicationApi = () => {
  const axiosSecure = useAxiosSecure();
  const ApplicationListPromise = (email) => {
    return axiosSecure.get(`/applications?email=${email}`)
      .then((res) => res.data)
      .catch((err) =>
        console.log(err.response.data.message)
      );
  };
  return {ApplicationListPromise};
};

export default useApplicationApi;
