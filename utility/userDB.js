var User = require('../model/User');
var Userconnection = require('../model/userconnection');
var Connection = require('../model/connection');
var Userprofile = require('../model/Userprofile');

var userData = [
    {
        userId: 1,
        firstName: "Vamsi Krishna",
        lastName: "kalidindi",
        email: "vamsik@uncc.edu",
        address1: "9539 University Terrace Dr",
        address2: "Apt E",
        city: "Charlotte",
        state: "North Carolina",
        zipCode: 28262,
        country: "United States"
    },
    {
        userId: 2,
        firstName: "Sneha",
        lastName: "lella",
        email: "slella@uncc.edu",
        address1: "216 Barton creek Dr",
        address2: "Apt E",
        city: "Charlotte",
        state: "North Carolina",
        zipCode: 28262,
        country: "United States"
    }
];

var userProfileData = [
    {
        userId: 1,
        userconnectionlist: [
            {
                'connectionID': 1,
                'connectionName':'Dota all day',
                'connectionType':'esports',
                'response': 'yes',
            },
            {
              'connectionID': 6,
              'connectionName':'Let\'s Raquet ball',
              'connectionType':'sports',
              'response': 'no',
            }
        ]
    },
    {
    userId: 2,
    userconnectionlist: [
        {
            'connectionID': 4,
            'connectionName':'Football addicts',
            'connectionType':'sports',
            'response': 'yes',
        },
        {
          'connectionID': 5,
          'connectionName':'Tennis tricks and tips',
          'connectionType':'sports',
          'response': 'no',
        }
    ]
}
];

module.exports.getUsers = function () {

    var users = [];
    for (var i = 0; i < userData.length; i++) {

        var user = new User(userData[i].userId,
            userData[i].firstName,
            userData[i].lastName,
            userData[i].email,
            userData[i].address1,
            userData[i].address2,
            userData[i].city,
            userData[i].state,
            userData[i].zipCode,
            userData[i].country);

        users.push(user);

    }
    return users;

};

module.exports.getUserProfiles = function() {
    var userProfiles = [];
    for (var i = 0; i < userProfileData.length; i++) {
        var userProfile = new Userprofile(userProfileData[i].userId);

        for(var j=0; j < userProfileData[i].userconnectionlist.length; j++){
            var userconnection = new Userconnection(userProfileData[i].userconnectionlist[j].connectionID,
                userProfileData[i].userconnectionlist[j].connectionName,
                userProfileData[i].userconnectionlist[j].connectionType,
                userProfileData[i].userconnectionlist[j].response);

            userProfile.addConnection(userconnection);
        }

        userProfiles.push(userProfile);
    }
    return userProfiles;
};

module.exports.getUser = function (userId) {

    for (var i = 0; i < userData.length; i++) {
        if (parseInt(userData[i].userId) == userId) {
            var user = new User(userData[i].userId,
                userData[i].firstName,
                userData[i].lastName,
                userData[i].email,
                userData[i].address1,
                userData[i].address2,
                userData[i].city,
                userData[i].state,
                userData[i].zipCode,
                userData[i].country);

            return user;
        }
    }
};

module.exports.getUserProfile = function (userId) {

    for (var i = 0; i < userProfileData.length; i++) {
      // console.log(typeof(userProfileData[i].userId));
        if (parseInt(userProfileData[i].userId) === userId) {
            var userProfile = new Userprofile(userProfileData[i].userId);
            // console.log("user connection list",userProfileData[i].userconnectionlist.length);
            for(var j=0; j < userProfileData[i].userconnectionlist.length; j++){
                var userconnection = new Userconnection(userProfileData[i].userconnectionlist[j].connectionID,
                    userProfileData[i].userconnectionlist[j].connectionName,
                    userProfileData[i].userconnectionlist[j].connectionType,
                    userProfileData[i].userconnectionlist[j].response);

                userProfile.addConnection(userconnection);
            }

            return userProfile;
        }

    }
};
