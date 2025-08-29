import CryptoJS from 'crypto-js';

const key = process.env.NEXT_PUBLIC_ENCRYPTION_KEY || '';

export const encryptAES256 = (data: string): string => {
    // Encrypt the data using AES-256
    const encrypted = CryptoJS.AES.encrypt(data, key).toString();
    return encrypted;
}

export const decryptAES256 = (encryptedData: string): string => {
    // Decrypt the data using AES-256
    const bytes = CryptoJS.AES.decrypt(encryptedData, key);
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);
    return decrypted;
}