import { Post } from "./Post";
import { UserId } from "./UserId";

export interface Theme {
    subscribers: Array<string>;
    posts: any; // Array<string> | Post[];
    _id: string;
    themeName: string;
    userId: UserId;
    created_at: string;
    updatedAt: string;
    __v: number;
}
