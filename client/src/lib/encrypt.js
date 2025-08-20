import CryptoJS from "crypto-js";

var SECRET_KEY = "ictkart";

function encrypt(data) {
    if (!data) return;
    data = CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY);
    data = data.toString();
    return data;
}

function decrypt(data) {
    if (!data) return;
    data = CryptoJS.AES.decrypt(data, SECRET_KEY);
    data = data.toString(CryptoJS.enc.Utf8);
    return data;
}

export { encrypt, decrypt };