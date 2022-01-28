function greetings(firstName)
{
    console.log(`Hello ${firstName} , How are you?`);
}

greetings("Prince");
function createEmail(firstName,price)
{
    let shipping=100;

    console.log(
        `Hi ${firstName}, Thanks for shopping!
        Total:$${price}
        shipping:$${shipping}
        Grand Total:$${price+shipping}
        `
    )
}

createEmail("Prince",56);