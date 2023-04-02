const numberToHex = (color) => {
    const hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? "0" + hexadecimal : hexadecimal;
}

const RGBToHex = (red, green, blue) => {

    return "#" + numberToHex(red) + numberToHex(green) + numberToHex(blue);

}

