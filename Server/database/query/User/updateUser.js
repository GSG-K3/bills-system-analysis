const connection = require('../../connection');
const updateInfo = (id, userinfo) => {
  return connection.query(
   
    'UPDATE users SET display_name =$2,phone=$3 ,personal_status =$4,number_of_individuals =$5 ,number_of_devices =$6,address_id =$7 WHERE id=$1',
    [
      id,
      userinfo.display_name,
      userinfo.phone,
      userinfo.personal_status,
      userinfo.number_of_individuals,
      userinfo.number_of_devices,
      userinfo.address_id,
    ],
  );
};
module.exports = {updateInfo };