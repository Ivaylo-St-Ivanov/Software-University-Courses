import { UserId } from "./UserId";

export interface Theme {
    subscribers: Array<string>;
    posts: Array<string>;
    _id: string;
    themeName: string;
    userId: UserId;
    created_at: string;
    updatedAt: string;
    __v: number;
}
