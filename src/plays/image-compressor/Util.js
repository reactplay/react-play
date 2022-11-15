export const getImageSize = (file) => (file.size / 1024 / 1024).toFixed(2);
export const createObjectURL = (file) => URL.createObjectURL(file);
