export const addHashKey = (obj) => ({ ...obj, key: obj.hash });

export const addHashKeyToObjArray = (arr) => arr.map(addHashKey);
