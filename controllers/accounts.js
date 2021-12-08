import fetch from 'node-fetch';

const header = {
    'Accept': 'application/json',
}

export const getCurrency = async (req, res) => {
    try {
        const url = process.env.API_URL + '/currencies';
        fetch(url, { headers: header })
            .then(res => res.json())
            .then(data => {
                res.status(200).json(data);
            })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const getLatestRates = async (req, res) => {
    try { 
        const lang = req.query.lang;
        const params = {lang: lang}
        const url = process.env.API_URL + '/latestRates' + `?lang=${ lang }`;
        fetch(url, { headers: header })
            .then(res => res.json())
            .then(data => {
                res.status(200).json(data);
            })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const getDailyRates = async (req, res) => {
    try {
        const referenceDate = req.query.date;
        const currencyIsoCode = req.query.currencyIsoCode;
        const lang = req.query.lang;
        let baseCurrencyIsoCode = '';
        const baseCurrencyArray =  req.query.baseCurrencyIsoCode.forEach(item => {
            baseCurrencyIsoCode = baseCurrencyIsoCode + `&baseCurrencyIsoCode=${ item }`;
        })
        const url = process.env.API_URL + '/dailyRates' + `?referenceDate=${ referenceDate }${ baseCurrencyIsoCode }&currencyIsoCode=${ currencyIsoCode }&lang=${ lang }`;
        fetch(url,  { headers: header })
            .then(res => res.json())
            .then(data => {
                res.status(200).json(data);
            })
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}