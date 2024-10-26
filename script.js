let rollCount = 0;

document.getElementById("rollButton").addEventListener("click", () => {
    const roll1 = Math.floor(Math.random() * 6) + 1;
    const roll2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById("dice1").src = 'Assignment4/dice${roll1}.png';
    document.getElementById("dice2").src = 'Assignment4/dice${roll2}.png';

    const sum = roll1 + roll2;
    document.getElementById("sum").innerText = `Sum: ${sum}`;

    rollCount++;
    document.getElementById("counter").innerText = `Rolls: ${rollCount}`;

    const message = document.getElementById("message");
    if (roll1 === roll2) {
        message.innerText = "Doubles! You rolled the same number!";
    } else {
        //message.innerHTML = '<img src = "casino.jpg" alt="casino">';
        message.innerText = "";
    }
});
