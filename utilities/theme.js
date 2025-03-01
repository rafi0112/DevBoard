function changeTheme(){
    let letter = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i <6; i++) {
        let digit = letter[Math.floor((Math.random() *16))];
        color = color + digit;
    }
    return color;
}