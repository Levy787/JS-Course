// CONTROL FLOW
// LOOPS

let i = 0;
for (let i = 0; i < 5; i++) {
  console.log(i);
}

const names = ["Shaun", "Mario", "Luigi"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

i = 0;
while (i < names.length) {
  console.log(names[i]);
  i++;
}

i = 0;
do {
  console.log(names[i]);
  i++;
} while (i + 1 < names.length);

//IFS
const age = 20;
if (age > 20) {
  console.log("You are over 20 years old");
} else {
  console.log("You are under or are 20 years old");
}
