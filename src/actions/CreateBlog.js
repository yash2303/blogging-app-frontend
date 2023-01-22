const setAuthHeader = (headers) => {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    throw new Error("Auth token not found");
  }
  headers.append("Authorization", `Bearer ${authToken}`);
  return headers;
};

const createBlogAPI = (blogData) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  setAuthHeader(myHeaders);
  return fetch("http://localhost:8484/blogs", {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(blogData),
  }).then((response) => response.json());
};

export const createBlog = (blogData) => async (dispatch) => {
  try {
    const response = await createBlogAPI(blogData);
    console.log(response);
    dispatch({ type: "CREATE_BLOG_SUCCESS", payload: response.data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "CREATE_BLOG_ERROR", payload: error });
  }
};
