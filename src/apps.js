function moreRecipes() {
    let name = prompt("What is your name?");
    let email = prompt("What is your email address?")
    let food = prompt("Do you prefer savory or sweet dishes?")
    food = food.toLowerCase();
    food = food.trim();

    if (food === "savory") {
        alert(`Thank you, ${name}! Please check your inbox for some savory dish recipes! 🍝`)
    } else {
        alert(` Thank you, ${name}! Please check your inbox for some sweet dish recipes! 🧁`)
    }
}
let moreRecipesButton = document.querySelector("button");
moreRecipesButton.addEventListener("click", moreRecipes);