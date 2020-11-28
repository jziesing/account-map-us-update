/*
 * @fetch-accounts.js
 */
"use strict";


let FetchAccountsHelper = require('./fetch-accounts-helper');

class FetchAccounts {

    constructor() {
        this.ahelper = new FetchAccountsHelper();
        // methods
        this.FetchAccountsGet = this.FetchAccountsGet.bind(this);
    }
    /*  @route: /fetch/accounts/
     *     - GET
     */
    FetchAccountsGet(req, res) {
        console.log('FetchAccountsGet');
        res.setHeader('Content-Type', 'application/json');

        return this.ahelper.fetchAccounts()
                      .then(result => {
                            console.log(result);
                            return res.status(200).json(result);
                      }).catch(err => {
                            console.log(err);
                            return res.sendStatus(400);
                      });
    }
}

module.exports = FetchAccounts;
