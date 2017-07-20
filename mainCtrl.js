module.exports = {

    getUsers: function (req, res) {
        req.app.get('db').getAllUsers().then((resp) => {
            res.send(resp)
        })
    },

    getVehicles: function (req, res) {
        req.app.get('db').getAllVehicles().then((resp) => {
            res.send(resp)
        })
    },

    addUser: function (req, res) {
        req.app.get('db').add_user([req.body.name, req.body.email]).then((resp) => {
            res.send(resp)
        })
    },

    addVehicle: function (req, res) {
        req.app.get('db').add_vehicle([req.body.make, req.body.model, req.body.year, req.body.owner_id]).then((resp) => {
            res.send(resp)
        })
    },

    getUserCount: function (req, res) {
        var check = req.params.userId
        req.app.get('db').get_user_count(check).then(function(resp) {
        res.send(resp)
        })
    },

    getById: function (req, res) {
        req.app.get('db').get_by_id([req.params.userId]).then(function(resp) {
            res.send(resp)
        })
    },

    findAllVehicles: function(req, res) {
        if(req.query.userEmail){
            req.app.get('db').find_vehicle_email([req.query.userEmail]).then(function(response){
                res.send(response)
            })
        }else if(req.query.userFirstStart){
            const first = req.query.userFirstStart;
            req.app.get('db').find_vehicle_first_name([first + '%']).then(function(resp){
                res.send(resp)
            })
        }
    },
    getVehiclesByYear: function(req, res) {
        req.app.get('db').get_vehicles_by_year().then(function(response){
            res.send(response)
        })
    }, 
    changeOwner: function(req, res) {
        const change = [
            Number(req.params.vehicleId),
            Number(req.params.userId)
        ]
        req.app.get('db').change_owner(change).then(function(response){
            res.send(response)
        })
    },
    removeOwner: function(req, res) {
        const owner = [
            req.params.userId,
            req.params.vehicleId
        ]
        req.app.get('db').remove_owner(owner).then(function(response){
            res.send(response)
        })
    }, 
    removeVehicle: function(req, res) {
        req.app.get('db').remove_vehicle([req.params.vehicleId]).then(function(response){
            res.send(response)
        })
    }
}
