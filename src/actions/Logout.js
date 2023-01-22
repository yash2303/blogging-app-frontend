export const logout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    localStorage.removeItem("authToken");
    return {
        type: "LOGOUT"
    }
}