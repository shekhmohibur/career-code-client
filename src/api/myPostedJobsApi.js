 const myPostedJobsPromise = (email) => {
  return fetch(`https://code-career-server.vercel.app/jobs?email=${email}`).then((response) =>
    response.json(),
  );
};
export default myPostedJobsPromise;

const deleteMyPostedJob = (id) => {
  return fetch(`https://code-career-server.vercel.app/jobs/${id}`, {
    method: "DELETE"
    }).then((response) => {
    if (!response.ok) {
      throw new Error("Failed to delete job");
    }
    return response.json();
  });
};

export { deleteMyPostedJob };