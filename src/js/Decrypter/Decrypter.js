class Decrypter {
    decrypt(stringToDecrypt) {
        stringToDecrypt = stringToDecrypt.toUpperCase(); // tekst wordt een hoofdletters gegeven
        let decryptedString = [];
        for (let i = 0; i < stringToDecrypt.length; i++) { // for loop
            switch (stringToDecrypt[i]) { // Hier wordt de letters gecheckt
                case "D":
                    decryptedString.push("A");
                    break;
                case "E":
                    decryptedString.push("B");
                    break;
                case "F":
                    decryptedString.push("C");
                    break;
                case "G":
                    decryptedString.push("D");
                    break;
                case "H":
                    decryptedString.push("E");
                    break;
                case "I":
                    decryptedString.push("F");
                    break;
                case "J":
                    decryptedString.push("G");
                    break;
                case "K":
                    decryptedString.push("H");
                    break;
                case "L":
                    decryptedString.push("I");
                    break;
                case "M":
                    decryptedString.push("J");
                    break;
                case "N":
                    decryptedString.push("K");
                    break;
                case "O":
                    decryptedString.push("L");
                    break;
                case "P":
                    decryptedString.push("M");
                    break;
                case "Q":
                    decryptedString.push("N");
                    break;
                case "R":
                    decryptedString.push("O");
                    break;
                case "S":
                    decryptedString.push("P");
                    break;
                case "T":
                    decryptedString.push("Q");
                    break;
                case "U":
                    decryptedString.push("R");
                    break;
                case "V":
                    decryptedString.push("S");
                    break;
                case "W":
                    decryptedString.push("T");
                    break;
                case "X":
                    decryptedString.push("U");
                    break;
                case "Y":
                    decryptedString.push("V");
                    break;
                case "Z":
                    decryptedString.push("W");
                    break;
                case "A":
                    decryptedString.push("X");
                    break;
                case "B":
                    decryptedString.push("Y");
                    break;
                case "C":
                    decryptedString.push("Z");
                    break;
                default:
                    decryptedString.push(stringToDecrypt[i]);

            }
        }
        decryptedString = decryptedString.join("");
        return decryptedString;
    }
}