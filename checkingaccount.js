"use strict";

class CheckingAccount extends Account {
    /**
     * @param {number} overdraftLimit  the overdraftLimit of this account
     * @param {number} number  the number of this account
     */
    constructor(overdraftLimit, number) {
        super(number); 
        this._overdraftLimit = overdraftLimit;
    }

    /**
     * @returns {number}  account overdraft limit
     */
    getOverdraftLimit() {
        return this._overdraftLimit;
    }

    /**
     * @param {number} overdraftLimit overdrafit limit for this account
     * @returns {undefined}
     */
    setOverdraftLimit(overdraftLimit) {
        this._overdraftLimit = overdraftLimit;
    }

    /**
     * Method to take money from the account
     *
     * @param {number} amount money to be taken from this account
     * @returns {undefined}
     * @throws {RangeError}  amount is less than or equal to zero
     * @throws {Error}  the account has insufficient funds (balance)
     */
     withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount must be greater than zero");
        }
        if (amount > this._overdraftLimit + this._balance) {
            throw Error("Over the draft limit");
        }
        this._balance -= amount;
    }


    /**
     * Performs needed actions at the end of the month
     *
     * @returns {undefined}
     */
     endOfMonth() {
        if(this.getBalance() < 0) {
            return `Warning, low balance CheckingAccount ${this.getNumber()}: balance: ${this.getBalance()} overdraft limit: ${this._overdraftLimit}`;
        }
        return "";
    }

    /**
     * @returns {string} display of this account
     */
    toString() {
        return "Checking Account " + this.getNumber() + ": balance " + this.getBalance() + ": overdraft limit " + this._overdraftLimit;
    }
}