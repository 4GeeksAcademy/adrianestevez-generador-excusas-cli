const who = ["A giant banana", "A ninja grandma", "The pizza delivery guy", "The neighbor"];
const action = ["hypnotized", "kidnapped", "sat on", "ate"];
const what = ["my carnivorous plant", "my dog", "my homework", "my sock collection"];
const when = ["while singing in the shower.", "during a breakdance battle.", "during the duck parade.", "right before I left the house."];

const randomArrElement = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
}

console.log(`${randomArrElement(who)} ${randomArrElement(action)} ${randomArrElement(what)} ${randomArrElement(when)}`);