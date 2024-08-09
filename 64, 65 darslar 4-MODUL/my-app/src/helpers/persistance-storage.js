export const setItem = (key, data) => {
    try {
        localStorage.setItem(key, data);
    } catch (error) {
        console.log("Errorrr saving data");
    }
};

export const getItem = (key) => {
    try {
        return localStorage.getItem(key);
    } catch (error) {
        console.log("Errorrr getting data");
    }
};

export const removeItem = (key) => {
    try {
        localStorage.removeItem(key);
    } catch (error) {
        console.log("Errorrr removing data");
    }
};//local storagedagi userni server bergan tokenini udalit qilish uchun dynamic tarzda yozilgan funksiya
