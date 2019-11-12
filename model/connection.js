var connection = function(connectionID, connectionName, connectionType, hostName, imgUrl, startTime, endTime, location, description)
{
  var model = {
  'connectionID' : connectionID,
  'connectionName' : connectionName,
  'connectionType' : connectionType,
  'hostName':hostName,
  'imgUrl': imgUrl,
  'startTime': startTime,
  'endTime': endTime,
  'location': location,
  'description': description
}
return model;
};

module.exports.connection = connection;
