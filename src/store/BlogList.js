const setBlogs = (blogs) => ({
    type: 'SET_BLOGS',
    blogs,
  });

const fetchBlogListFailed = (error) => ({
    type: 'SET_BLOGS_ERROR',
    error
});

const blogListLoading = () => ({
    type: 'SET_BLOGS_LOADING'
});

export function loadBlogList() {
    return async (dispatch, getState) => {
      const {blogList} = getState();
      if (blogList.isLoading) return;
  
      dispatch(blogListLoading());
  
      try {
        const response = await fetch('http://localhost:3001/blogs');
        if (response.ok) {
          const json = await response.json();
        //   console.log("JSON: ", json);
          dispatch(setBlogs(json));
        } else {
            // console.error(response.statusText);
          dispatch(fetchBlogListFailed(new Error(response.statusText)))
        }
      } catch (error) {
        // console.error(error);
        dispatch(fetchBlogListFailed(error));
      }
    }
}