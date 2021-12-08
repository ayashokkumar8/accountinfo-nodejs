import express from 'express';
import {  getCurrency, getLatestRates, getDailyRates} from '../controllers/accounts.js';

const router = express.Router();

router.get('/currencies', getCurrency);
router.get('/latestRates', getLatestRates);
router.get('/dailyRates', getDailyRates);

export default router;