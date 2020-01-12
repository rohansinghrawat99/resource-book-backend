import { isUndefined } from "util";

export class Helpers {

    public static generateRandomString(length = 8, chars: string[]) {
        let result = "";
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    // const rString = randomString(32, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');

    public static iterateEnum<T>(enumRef: any): T[] {
        return Object.keys(enumRef).map(key => enumRef[key]);
    }

    public static replaceUndefinedWithNull(object: any) {
        if (isUndefined(object)) {
            return null;
        }
        return object;
    }
}
