import { Injectable } from '@angular/core';

import * as CryptoJS from 'crypto-js';

@Injectable()
export class EncrDecrService {

    // The set method is use for encrypt the value.
    public encrypt(keys): string {
        const encodedString = btoa(`${keys}`);
        const key = CryptoJS.enc.Utf8.parse(encodedString);
        const iv = CryptoJS.enc.Utf8.parse(encodedString);
        const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(keys.toString()), key,
            {
                keySize: 128 / 8,
                iv: iv,
                mode: CryptoJS.mode.CBC,
                padding: CryptoJS.pad.Pkcs7
            });
        return encrypted.toString();
    }

    // The get method is use for decrypt the value.
    public decrypt(keys, value): string {
        const key = CryptoJS.enc.Utf8.parse(keys);
        const iv = CryptoJS.enc.Utf8.parse(keys);
        const decrypted = CryptoJS.AES.decrypt(value, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}
