/*
 * @api-routes.js
 */
"use strict";

let express = require('express'),
	PublicAddAccount = require('./api-routes/add-account'),
	PublicAddExtData = require('./api-routes/add-external-data'),
	PublicFetchAccounts = require('./api-routes/fetch-accounts'),
	ApiRoutes = express.Router(),
	PubAddAccount = new PublicAddAccount(),
	PubAddExtData = new PublicAddExtData(),
	PubFetchAccounts = new PublicFetchAccounts();


// add account
ApiRoutes.post("/new/account/", PubAddAccount.AddAccountPost);
// add external data
ApiRoutes.post("/new/extdata/", PubAddExtData.AddExtDataPost);
// get accounts for map
ApiRoutes.get("/fetch/accounts/", PubFetchAccounts.FetchAccountsGet);


/*
 * export
 */
module.exports = ApiRoutes;
