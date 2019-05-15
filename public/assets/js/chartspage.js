var api = {
    activitiesGet: function (user_id) {
        return $.ajax({
            headers: { "Content-type": "application/json" },
            url: "api/activitiesGet/" + user_id,
            type: "GET"
        })
    },
    caloriesGet: function (user_id) {
        return $.ajax({
            headers: { "Content-type": "application/json" },
            url: "api/caloriesGet/" + user_id,
            type: "GET",
        })
    },
    userweightGet: function (user_id) {
        return $.ajax({
            headers: { "Content-type": "application/json" },
            url: "api/userweightGet/"+ user_id,
            type: "GET"
        })
    }
};