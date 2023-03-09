import("./loadUser").then(function (loadUser) {
    loadUser.loadUserFromUrlParameter().then(function(result) { 
        console.log(result);
    });
})