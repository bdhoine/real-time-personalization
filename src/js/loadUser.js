
export async function loadUserFromUrlParameter() {
    return import("./users").then((users) => {
        
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const requestedUser = urlParams.get("user") ;

        const userData = users.getUsers();

        return userData[requestedUser];
    });
}
