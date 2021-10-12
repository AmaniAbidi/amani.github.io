"use strict";

class SavingsAccount extends Account {
    /**
     * @param {number} interest  interest of this account
     * @param {number} number  number of this account
     */
    constructor(interest, number) {
        super(number); 
        this._intreset = interest;
    }

    /**
     * @returns {number} account interest
     */
    getInterest() {
        return this._intreset;
    }

    /**
     * @param {number} the intreset of this account
     * @returns {undefined}
     */
    setInterest(intreset) {
        this._intreset = intreset;
    }

    /**
     * Method to deposit the calculated interest into account
     *
     * @returns {undefined}
     */
    addInterest() {
        this.deposit(this.getBalance() * this.getInterest() / 100);
    }

    /**
     *  Needed actions at the end of the month
     *
     * @returns {undefined}
     */
    endOfMonth() {
        this.addInterest();
        return `Interest added SavingsAccount ${this.getNumber()}: balance: ${this.getBalance()} interest: ${this._intreset}`;
    }

    /**
     * @returns {string} display of this savings account
     */
    toString() {
        return "Savings Account " + this.getNumber() + ": balance " + this.getBalance() + ": intreset " + this.getInterest();
    }
}