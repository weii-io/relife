import CircularJson from "circular-json";
import CryptoJS from "crypto-js";

export class Storage {
  static STORAGE_KEY = "relife";

  constructor() {}

  public write(instance: Object) {
    const existingEncryptedData = localStorage.getItem(Storage.STORAGE_KEY);
    if (existingEncryptedData) {
      const existingDecryptedData = CryptoJS.AES.decrypt(
        existingEncryptedData as string,
        process.env.NEXT_PUBLIC_CRYPTOJS_ENCRYPTION_KEY as string
      ).toString(CryptoJS.enc.Utf8);
      localStorage.setItem(
        Storage.STORAGE_KEY,
        CryptoJS.AES.encrypt(
          CircularJson.stringify({
            [instance.constructor.name.toLowerCase()]: instance,
            ...CircularJson.parse(existingDecryptedData),
          }),
          process.env.NEXT_PUBLIC_CRYPTOJS_ENCRYPTION_KEY as string
        ).toString()
      );
    } else {
      localStorage.setItem(
        Storage.STORAGE_KEY,
        CryptoJS.AES.encrypt(
          CircularJson.stringify({
            [instance.constructor.name.toLowerCase()]: instance,
          }),
          process.env.NEXT_PUBLIC_CRYPTOJS_ENCRYPTION_KEY as string
        ).toString()
      );
    }
  }

  public read() {
    const encryptedData = localStorage.getItem(Storage.STORAGE_KEY);
    if (encryptedData) {
      const decryptedData = CryptoJS.AES.decrypt(
        encryptedData as string,
        process.env.NEXT_PUBLIC_CRYPTOJS_ENCRYPTION_KEY as string
      ).toString(CryptoJS.enc.Utf8);
      return CircularJson.parse(decryptedData);
    } else return null;
  }

  public isEmpty() {
    return localStorage.getItem(Storage.STORAGE_KEY) === null;
  }
}
