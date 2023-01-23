const setAuthHeader = (headers) => {
    const authToken = localStorage.getItem("authToken");
    if(!authToken) {
      throw new Error("Auth token not found");
    }
    headers.append("Authorization", `Bearer ${authToken}`);
    return headers;
  }

export const fetchBlog = (blogId) => async (dispatch) => {
    try {
      dispatch({ type: "FETCH_BLOG_LOADING" });
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      setAuthHeader(myHeaders);
      const response = await fetch(`http://localhost:8484/blogs/${blogId}`, {
        method: "GET",
        headers: myHeaders,
      });
      const data = await response.json();
      if (response.ok) {
        dispatch({ type: "FETCH_BLOG_SUCCESS", data });
      } else {
        throw new Error(data);
      }
    } catch (error) {
      dispatch({ type: "FETCH_BLOG_ERROR", error });
    }
  };
  