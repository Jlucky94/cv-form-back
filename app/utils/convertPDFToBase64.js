const fs = require('fs');

/**
 * Асинхронно читает PDF файл и конвертирует его содержимое в Base64 строку.
 * @param {string} filePath Путь к PDF файлу.
 * @returns {Promise<string>} Обещание, возвращающее Base64 строку.
 */
function convertPDFToBase64(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if (err) {
                reject(err);
            } else {
                const base64String = data.toString('base64');
                resolve(base64String);
            }
        });
    });
}