 const myPostedJobsPromise = (email) => {
  return fetch(`${import.meta.env.VITE_server}/jobs?email=${email}`).then((response) =>
    response.json(),
  );
};
export default myPostedJobsPromise;

const deleteMyPostedJob = (id) => {
  return fetch(`${import.meta.env.VITE_server}/jobs/${id}`, {
    method: "DELETE"
    }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete job");
    }
    return response.json();
  });
};

export { deleteMyPostedJob };