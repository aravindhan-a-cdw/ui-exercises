// User Account Data
const accounts = [
    {
        accountNo: 10012001,
        cardNo: 1234500010012001,
        pin: 1231,
        balance: 11539,
    },
    {
        accountNo: 10012002,
        cardNo: 1234500010012102,
        pin: 5678,
        balance: 20230,
    },
    {
        accountNo: 10012003,
        cardNo: 1234500010012203,
        pin: 9876,
        balance: 10000,
    },
    {
        accountNo: 10012004,
        cardNo: 1234500010012304,
        pin: 2398,
        balance: 5000,
    },
    {
        accountNo: 10012005,
        cardNo: 1234500010012405,
        pin: 8723,
        balance: 100000,
    }
]

// Function to create user account which returns an object of closures
const createAccount = (dataObj) => {
    const accountNo = dataObj.accountNo;
    const cardNo = dataObj.cardNo;
    let accountPin = dataObj.pin;
    let accountBalance = dataObj.balance;
    let retries = 3;

    return {
        displayAccountInfo: () => {
            console.log("Account Number:", accountNo);
            console.log("Card Number:", cardNo);
            console.log("Balance:", accountBalance);
        },
        getBalance: () => accountBalance,
        depositMoney: (amount, pin) => {
            if(retries !== 0){
                if(pin !== accountPin){
                    console.log(`Invalid Pin. You have ${retries} times to retry!`);
                    retries--;
                    return;
                }
                console.log(`You have deposited Rs. ${amount}`);
                accountBalance += amount;
                console.log(`You have Rs. ${accountBalance} in your account! Happy banking.`);
            } else {
                console.log("Your account has been locked!");
            }
        },
        withdrawMoney: (amount, pin) => {
            if(retries !== 0){
                if(pin !== accountPin){
                    console.log(`Invalid Pin. You have ${retries} times to retry!`);
                    retries--;
                    return;
                }
                console.log(`You have withdrew Rs. ${amount}`);
                accountBalance -= amount;
                console.log(`You have Rs. ${accountBalance} in your account! Happy banking.`);
            } else {
                console.log("Your account has been locked!");
            }
        }
    }
}

// Bank object with user accounts / user account closures

const bank = {};
accounts.forEach(obj => {
    bank[obj.accountNo] = createAccount(obj);
})

console.log(bank);

// User Accessing the account
let account = '10012002';

bank[account].displayAccountInfo();
console.log("Balance is ", bank[account].getBalance());

// User Deposit money with valid pin
bank[account].depositMoney(1000, 5678);
bank[account].withdrawMoney(5000, 5678);

// User attempts with wrong pin
bank[account].depositMoney(1000, 1232);
bank[account].depositMoney(1000, 1232);
bank[account].depositMoney(1000, 1232);
bank[account].depositMoney(1000, 1232);

// User attempts with valid pin after account gets locked
bank[account].depositMoney(1000, 5678);
bank[account].withdrawMoney(1000, 5678);


