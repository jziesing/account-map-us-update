/*
 * @add-account-helper.js
 */
"use strict";

const { Client } = require('pg');

class AddAccountHelper {

	constructor() {
		// methods
		this.addAccount = this.addAccount.bind(this);
	}

	addAccount(reqBodyForm) {
		return new Promise((resolve, reject) => {
			console.log(reqBodyForm);

			let currclient = new Client({
				connectionString: process.env.DATABASE_URL,
				ssl: true,
			});

			let dataResult;
			let queryString = 'INSERT INTO Salesforce.Account(Name, BillingStreet, BillingCity, BillingState, BillingPostalCode, BillingCountry) VALUES($1, $2, $3, $4, $5, $6) RETURNING ID;';

			currclient.connect();

			currclient.query(queryString, [reqBodyForm.name, reqBodyForm.street, reqBodyForm.city, reqBodyForm.state, reqBodyForm.zip, reqBodyForm.country]).then(res => {
				dataResult = res.rows;
			}).catch(err => {
				console.log('ERROR');
				console.log(err);
				reject(err);
			}).finally(() => {
				currclient.end();
				resolve(dataResult);
			});
		});
	}

}

module.exports = AddAccountHelper;
