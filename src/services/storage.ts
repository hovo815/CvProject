export const Storage = {
    setDataInLocalStorage: (nameStorageItem:string, data:string) => {
       return  localStorage.setItem(`${nameStorageItem}`, data);
    },
    removeDataInLocalStorage: (nameStorageItem:string) => {
       return  localStorage.removeItem(`${nameStorageItem}`);
    },
    getDataInLocalStorageByName: (nameStorageItem:string) => {
       return  localStorage.getItem(`${nameStorageItem}`);
    },
};