/*
 * @fetch-accounts-helper.js
 */
"use strict";

const { Client } = require('pg');


class FetchAccountsHelper {

    constructor() {
		// methods
        this.fetchAccounts = this.fetchAccounts.bind(this);
    }

    fetchAccounts() {
        return new Promise((resolve, reject) => {

			console.log('Entered helper fetch accounts functions');

            let currclient = new Client({
                connectionString: process.env.DATABASE_URL,
                ssl: true,
            });

			let dataResult;
			let queryString = 'SELECT id, sfid, name, billingstreet, billingcity, billingstate, billingpostalcode, billingcountry, billinglatitude, billinglongitude FROM salesforce.account WHERE billingcountry = \'USA\' AND billinglatitude IS NOT NULL;';

            currclient.connect();

            currclient.query(queryString).then(res => {

				dataResult = res.rows;

            }).catch(err => {
				console.log(err);
				reject(err);
			}).finally(() => {
				currclient.end();
				resolve(dataResult);
			});
        });

    }
}

module.exports = FetchAccountsHelper;
