export const ApplicationListPromise = (email) => {
  return fetch(`https://code-career-server.vercel.app/applications?email=${email}`).then(
    (res) => res.json(),
  );
};

export const deleteApplication = (id) => {
  return fetch(`https://code-career-server.vercel.app/applications/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to delete application");
    }
    return res.json();
  });
};
