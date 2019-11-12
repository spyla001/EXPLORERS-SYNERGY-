var connection = require('../model/connection');

//HARDCODED DATA
var data =[
  {
    'connectionID': 1,
    'connectionName':'Dota all day',
    'connectionType':'esports',
    'hostName':'Naidu',
    'imgUrl':'/images/axe.jpg',
    'startTime':'17-10-2019 10:30am',
    'endTime':'17-10-2019 10:30pm',
    'location':'216 Barton Creek Drive',
    'description':'Dota 2 is a multiplayer online battle arena (MOBA) video game in which two teams of five players compete to collectively destroy a large structure defended by the opposing team known as the "Ancient", whilst defending their own. This group is for Dota Newbee\'s. We will teach you tips and tricks of playing Dota2 free of money. Our main motto is to prepare people for international events'
  },
  {
    'connectionID': 2,
    'connectionName': 'League Of Legends',
    'connectionType':'esports',
    'hostName':'vamsi',
    'imgUrl':'/images/lol.jpg',
    'startTime':'20-10-2019 10:30am',
    'endTime':'20-10-2019 10:30am',
    'location':'130 woodward, UNC, charlotte, NC,28262',
    'description':'Whether you\'re playing Solo or Co-op with friends, League of Legends is a highly competitive, fast paced action-strategy game designed for those who crave a hard fought victory. If you think you are strong enough please join our group and lets LOL whole day. Note:"if your MMR is less that 2,800 please don\'t attend this event."'
  },
  {
    'connectionID':3,
    'connectionName':'Dota for pro\'s',
    'connectionType':'esports',
    'hostName':'sankova',
    'imgUrl':'/images/invoker.jpg',
    'startTime':'18-10-2019 10:30am',
    'endTime':'18-10-2019 10:30pm',
    'location':'220 Barton creek Drive',
    'description':'This event is solely for pro players in Dota, please makesure you MMR must be above 3000 to attend this event.Free drinks. You are advised to bring your own food. Invoker players have bonus perks.'
  },
  {
    'connectionID':4,
    'connectionName':'Football addicts',
    'connectionType':'sports',
    'hostName':'Ben panour',
    'imgUrl':'/images/americanfootball.jpg',
    'startTime':'18-10-2019 10:30am',
    'endTime':'18-10-2019 10:30am',
    'location':'benkirk stadium, UNC, Charlotte, NC.',
    'description':'All the football lovers are invited. Free food and drinks. Everyone is adviced to carry their own football gear. You are not allowed to play if you gear doesn\'t meet our saftey requirements. Be good to your fellow mates. Be part of this event if you want to have a great day.'
  },
  {
    'connectionID':5,
    'connectionName':'Tennis tricks and tips',
    'connectionType':'sports',
    'hostName':'Jonathan',
    'imgUrl':'/images/tennis.jpg',
    'startTime':'18-10-2019 10:30am',
    'endTime':'18-10-2019 10:30pm',
    'location':'frisconatus ground, texas,73415',
    'description':'I\'m coach jonathan. I\'ll teach you tips and tricks in tennis. If you like my way of teaching you can join my academy. I\'m not expecting everyone who attend\'s this event to join my academy. It\'s you decision whether to take or not. If you really interested in tennis, Don\'t worry I\'ll be there for you. Bonus: Free academy membership for 2 early birds.'
  },
  {
    'connectionID':6,
    'connectionName':'Let\'s Raquet ball',
    'connectionType':'sports',
    'hostName':'madonna',
    'imgUrl':'/images/raquetball.jpg',
    'startTime':'18-10-2019 10:30am',
    'endTime':'18-10-2019 10:30pm',
    'location':'nekamoora Indoor stadium',
    'description':'looking for raquet ball enthusiast\'s. we have newly started Nekamoora indoor stadium which consists of 10 Raquet ball stadiums. Raquet ball gear is provided for free. Everything is free on this inauguration  day. Free Lunchhh!!!'
  }
];


// function to get connections from database
module.exports.getConnections = function()
{
  let connections =[];
  for(let i = 0; i< data.length; i++)
  {
    let x = connection.connection(
            data[i].connectionID,
            data[i].connectionName,
            data[i].connectionType,
            data[i].hostName,
            data[i].imgUrl,
            data[i].startTime,
            data[i].endTime,
            data[i].location,
            data[i].description);
        connections.push(x);
  }
  return connections;
};


//Function to Get item by ID;
module.exports.getConnection = function(connectionID) {
  console.log("connection ID" + connectionID);
  console.log(typeof(connectionID));
  console.log(data.length);
if(connectionID <= data.length)
{
  for(let i=0; i<data.length; i++){
    console.log(typeof(data[i].connectionID));
    if(parseInt(data[i].connectionID) == connectionID)
    {
      let x = connection.connection(
              data[i].connectionID,
              data[i].connectionName,
              data[i].connectionType,
              data[i].hostName,
              data[i].imgUrl,
              data[i].startTime,
              data[i].endTime,
              data[i].location,
              data[i].description);
              console.log(x);
              return x;
    }
  }
  }
  return;
};
