const setBlogs = (blogs) => ({
  type: "SET_BLOGS",
  blogs,
});

const fetchBlogListFailed = (error) => ({
  type: "SET_BLOGS_ERROR",
  error,
});

const blogListLoading = () => ({
  type: "SET_BLOGS_LOADING",
});

function setAuthHeader(headers) {
  const authToken = localStorage.getItem("authToken");
  if(!authToken) {
    throw new Error("Auth token not found");
  }
  headers.append("Authorization", `Bearer ${authToken}`);
  return headers;
}

export function loadBlogList() {
  return async (dispatch, getState) => {
    const { blogList } = getState();
    if (blogList.isLoading) return;

    dispatch(blogListLoading());
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      setAuthHeader(myHeaders);
      const response = await fetch("http://localhost:8484/blogs", {
        method: "GET",
        headers: myHeaders,
      });
      if (response.ok) {
        const json = await response.json();
        console.log("JSON: ", json);

        dispatch(setBlogs(json.blogListDto));
      } else {
        // console.error(response.statusText);
        dispatch(fetchBlogListFailed(new Error(response.statusText)));
      }
    } catch (error) {
      // console.error(error);
      dispatch(fetchBlogListFailed(error));
    }
  };
}
