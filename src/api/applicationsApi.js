export const ApplicationListPromise = (email, accessToken) => {
  return fetch(`${import.meta.env.VITE_server}/applications?email=${email}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials:'include'}).then(
    (res) => res.json(),
  );
};

export const deleteApplication = (id) => {
  return fetch(`${import.meta.env.VITE_server}/applications/${id}`, {
    method: "DELETE",
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to delete application");
    }
    return res.json();
  });
};
