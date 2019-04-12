import crypto from 'crypto'

export const getAES256Ciphered = value => {
  const cipher = crypto.createCipher("aes256", 'privateKey');
  cipher.update(value, "ascii", "hex");
  return cipher.final("hex");
}

export const getAES256Deciphered = value => {
  const decipher = crypto.createDecipher("aes256", 'privateKey');
  decipher.update(value, "hex", "ascii");
  return decipher.final("ascii");
}