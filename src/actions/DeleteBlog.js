const setAuthHeader = (headers) => {
    const authToken = localStorage.getItem("authToken");
    if(!authToken) {
      throw new Error("Auth token not found");
    }
    headers.append("Authorization", `Bearer ${authToken}`);
    return headers;
  }

export const deleteBlog = (blogId, history) => {
  return async (dispatch) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      setAuthHeader(myHeaders);
      const response = await fetch(`http://localhost:8484/blogs/${blogId}`, {
        method: "DELETE",
        headers: myHeaders,
      });
      dispatch({ type: "DELETE_BLOG", payload: blogId });
      // redirect user to /blogs page
      history.push("/blogs");
    } catch (err) {
      console.error(err);
    }
  };
};
