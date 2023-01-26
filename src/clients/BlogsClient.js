const SERVER_URL = "http://localhost:8484";

const setAuthHeader = (headers) => {
  const authToken = localStorage.getItem("authToken");
  if (!authToken) {
    throw new Error("Auth token not found");
  }
  headers.append("Authorization", `Bearer ${authToken}`);
  return headers;
};

export async function blogListApi() {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  setAuthHeader(myHeaders);
  const response = await fetch(`${SERVER_URL}/blogs`, {
    method: "GET",
    headers: myHeaders,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}

export async function createBlogApi(blogData) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  setAuthHeader(myHeaders);
  const response = await fetch(`${SERVER_URL}/blogs`, {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify(blogData),
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}

export async function deleteBlogApi(blogId) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  setAuthHeader(myHeaders);
  const response = await fetch(`${SERVER_URL}/blogs/${blogId}`, {
    method: "DELETE",
    headers: myHeaders,
  });
}

export async function fetchBlogApi(blogId) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  setAuthHeader(myHeaders);
  const response = await fetch(`${SERVER_URL}/blogs/${blogId}`, {
    method: "GET",
    headers: myHeaders,
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message);
  }
  return data;
}
