// Investment Accounts Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu");

// Global Variable
let accounts = [];
let maxAmount = 5000; // account values should be b/t 0 and max
for (let n = 1; n <= 200; n++) {
  accounts.push(randInt(0, 5001));
}

// Display Data
drawArray();

function drawArray() {
  let outputStr = "";
  let divHeight;
  for (let i = 0; i < accounts.length; i++) {
    divHeight = (accounts[i] / maxAmount) * 600; // Scale accounts to fit in array visualizer container
    outputStr += `<div style="height:${divHeight}px"></div>`;
  }
  containerEl.innerHTML = outputStr;
}

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
  // Get value of menu select element
  let selection = menuEl.value;

  // Take action based on menu selection
  if (selection === "count-range") {
    countRange();
  } else if (selection === "donor") {
    generousDonor();
  } else if (selection === "hacker") {
    hackerAttack();
  } else if (selection === "stats") {
    investmentStats();
  } else if (selection === "add") {
    addAccount();
  } else if (selection === "remove-low") {
    removeLow();
  } else if (selection === "robin-hood") {
    robinHood();
  }

  // Redraw array to show any changes
  drawArray();
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function countRange() {
  // Output the number of accounts with amounts between $2,000 and $4,000, inclusive
  let count = 0
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] <= 4000 && accounts[i] >= 2000) {
      count++;
    }
  }
  outputEl.innerHTML = "Count Range:" + " " + count;
}

function generousDonor() {
  // A generous donor has decided to give $500 to every investment
  // account that has less than $2000. 
  // Modify the investment account array to apply this donation.
  // Output the total amount of money that was donated.
  let amountDonated = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 2000) {
      accounts[i] += 500;
      amountDonated += 500;
    }
    outputEl.innerHTML = "Generous Donor of:" + " " + amountDonated;
  }
}

function hackerAttack() {
  // A hacker steals 5% from every account.
  // Modify the investment account array to apply this theft.
  // Output the total amount that was stolen.
  let totalStolen = 0;
  for (let i = 0; i < accounts.length; i++) {
    let stolen = accounts[i] * .05;
    totalStolen += stolen;
    accounts[i] -= stolen;
  }
  outputEl.innerHTML = "Hacker Attack, Total Stolen:" + " " + totalStolen;
}

function investmentStats() {
  // Output the minimum account amount, the maximum account amount
  // and the average account amount.
  let min = Math.min(...accounts);
  let max = Math.max(...accounts);
  let total = 0;
  for (let i = 0; i < accounts.length; i++) {
    total += accounts[i];
  }
  let average = total / accounts.length;

  outputEl.innerHTML = "Investment Stats:" + " " + "Minimum account amout:" + " " + "$" + min + " " +
    "Maximum account amount:" + " " + "$" + max + " " + "Average:" + " " + "$" + average;
}

function addAccount() {
  // Prompt for a new account amount and add this to the invesment account
  // array. Output a confirmation that a new account was added with an
  // opening amount of _______.
  let val = +prompt();
  if (val >= 0 && val <= 5000) {
    accounts.push(val);
    outputEl.innerHTML = "Confirmation that a new account was added with an opening amount of:" + " " + val + "$";
  } else {
    outputEl.innerHTML = "Not a valid input, Insert an amount between $0 and $5000 please."
  }
}
function removeLow() {
  // Remove all accounts that are below $500.
  // Output how many accounts were removed.
  let count = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] < 500) {
      accounts.splice(i--, 1);
      count++;
    }
  }
  outputEl.innerHTML = "Number of accounts removed:" + " " + count;
}

function robinHood() {
  // Steal from the rich and give to the poor.
  // Take $400 from every account that has over $4000.
  // Then evenly distribute the total amount taken between all the
  // accounts that have less than $1000.
  // Output how many accounts received money and 
  // how much each account received.
  let totalM = 0;
  let numberofA = 0;
  for (let i = 0; i < accounts.length; i++) {
    if (accounts[i] > 4000) {
      accounts[i] -= 400;
      totalM += 400;
    }
    if (accounts[i] < 1000) {
      numberofA++;
    }
    let even = totalM / numberofA;
    if (accounts[i] < 1000) {
      accounts[i] += even;
    }
  }
  outputEl.innerHTML = "Number of accounts that received money:" + " " + numberofA + "  " + "How much each account received:" + 
  " " + even;
}