    const display = document.querySelector("input"),
    button = document.querySelector("button");

    let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    button.onclick = ()=>{
        let i,
        randomPassword = "";
        for (i = 0; i < 16; i++) {
            randomPassword = randomPassword + chars.charAt(
                Math.floor(Math.random() * chars.length)
            );
        }
        display.value = randomPassword;
    }