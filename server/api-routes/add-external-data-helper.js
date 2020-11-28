/*
 * @add-external-data-helper.js
 */
"use strict";

const { Client } = require('pg');

class AddExtDataHelper {

	constructor() {
		// methods
		this.addExtDataPost = this.addExtDataPost.bind(this);
	}

	addExtDataPost(reqBodyForm) {
		return new Promise((resolve, reject) => {
			console.log(reqBodyForm);

			let currclient = new Client({
				connectionString: process.env.DATABASE_URL,
				ssl: true,
			});

			let dataResult;
			let queryString = 'INSERT INTO Salesforce.external_data(account_id, data) VALUES($1, $2) RETURNING ID;';

			currclient.connect();

			currclient.query(queryString, [reqBodyForm.account, reqBodyForm.data_val]).then(res => {
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

module.exports = AddExtDataHelper;
