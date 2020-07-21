const router = require('express').Router();
const {
  getLastBill,
  getUserBillType,
  newBill,
  getBillType,
} = require('./Bill');
const { logIn } = require('./User');
const { getPersonalInfo } = require('./User');
const updateUser = require('./User/updateUser');
const getAddressByCity = require('./Address/getAddressByCity');
const getAllAddresses = require('./Address/getAllAdresses');
const { signUp } = require('./User');
const authentication = require('../middlewares/authentication');
const { getProviderById } = require('./Provider');

<<<<<<< HEAD
const { getProviderByType } = require('./Provider');

router.get('/api/bill/getBillByType/:bill_type', getLastBill);
=======
router.get(
  '/api/bill/:bill_type/statistics/:billId',
  authentication,
  getBillStatistics,
);
router.get('/api/bill/getBillByType/:bill_type', authentication, getLastBill);
>>>>>>> master
router.post('/api/login', logIn);
router.get('/api/home', authentication, getUserBillType);

<<<<<<< HEAD
router.get('/api/getBillType', getBillType);
router.get('/api/providers/getProviders/:bill_type', getProviderByType);

router.post('/api/new-bill', newBill);

=======
router.get('/api/profile', authentication, getPersonalInfo);
router.get('/api/home', authentication, getUserBillType);
router.patch('/api/update', authentication, updateUser);
router.get('/api/city/:name', getAddressByCity);
router.get('/api/address', getAllAddresses);
router.post('/api/signup', signUp);
router.get(
  '/api/providers/getProviderById/:provider_id',
  authentication,
  getProviderById,
);
>>>>>>> master
module.exports = router;
