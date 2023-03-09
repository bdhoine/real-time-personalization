
export async function loadUserFromUrlParameter() {
    return import("./users").then((users) => {
        
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const requestedUser = urlParams.get("user") ;

        const userData = users.getUsers();

        const dataOfUser = userData[requestedUser];
        console.log(dataOfUser);

        if (dataOfUser == undefined) {
            return userData.user1;
        }

        return dataOfUser;
    });
}
