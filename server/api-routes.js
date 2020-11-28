/*
 * @api-routes.js
 */
"use strict";

let express = require('express'),
    PublicFetchAccounts = require('./api-routes/fetch-accounts'),
    ApiRoutes = express.Router(),
    PubFetchAccounts = new PublicFetchAccounts();

// let express = require('express'),
//     PublicAddAccount = require('./api-routes/add-account'),
//     PublicAddExtData = require('./api-routes/add-external-data'),
//     PublicFetchAccounts = require('./api-routes/fetch-accounts'),
//     ApiRoutes = express.Router(),
//     PubAddAccount = new PublicAddAccount(),
//     PubAddExtData = new PublicAddExtData(),
//     PubFetchAccounts = new PublicFetchAccounts();



/*
 *  routes
 */
// add account
// ApiRoutes.post("/new/account/", PubAddAccount.AddAccountPost);
// add external data
// ApiRoutes.post("/new/extdata/", PubAddExtData.AddExtDataPost);

// get parent accounts
ApiRoutes.get("/fetch/accounts/", PubFetchAccounts.FetchAccountsGet);


/*
 * export
 */
module.exports = ApiRoutes;
