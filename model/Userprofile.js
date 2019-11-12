var Userconnection = require('./Userconnection');

class UserProfile {

    /**
     * Constructor
     * @param userId
     * @param userconnectionlist
     */
    constructor(userId) {
        this._userId = userId;
        this._userconnectionlist = [];
    }


    /**
     *
     * Getter and Setters
     */


    get userId() {
        return this._userId;
    }

    set userId(value) {
        this._userId = value;
    }

    get userconnectionlist() {
        return this._userconnectionlist;
    }

    set userconnectionlist(value) {
        this._userconnectionlist = value;
    }

    addConnection(userconnection) {
        // if (userconnection instanceof Userconnection) {
            this._userconnectionlist.push(userconnection);
        // } else {
        //     console.log('Invalid Object --> It should be of type Userconnection')
        // }
    }

    removeConnection(Userconnection) {
            this._userconnectionlist.filter(function (connection) {
                return connection.connectionID != userconnection.connectionID;
            });
    }

    updateConnection(userconnection) {
            const index = this._userconnectionlist.findIndex(function(e){ return e.connectionID === userconnection.connectionID});
            if (index === -1) {
                console.log('User Item not present in the list');
            } else {
                this._userconnectionlist[index] = userconnection;
            }
        } 

    getConnections() {
        return this._userconnectionlist;
    }

    emptyProfile() {
        this._userconnectionlist = [];
    }

}
module.exports = UserProfile;
