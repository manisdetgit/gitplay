const flag = true;

if (!flag) {
    console.log("condition is satisfied");
} else {
    console.log(flag);
    console.log("condition is not satisfied");
}

//while loop example
let i = 0;
while (i < 10) {
    i++;
    console.log("while loop is running " + i);
}

//do while loop example
do {
    i++;
    console.log("do while loop is running " + i);
}while (i < 10);


//for loop example
for (let j = 0; j < 10; j++) {
    console.log("for loop is running " + j);
}