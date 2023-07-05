import { UserId } from "./UserId";

export interface ThemeId {
    subscribers: Array<string>;
    posts: Array<string>;
    _id: string
    themeName: string
    userId: string
    created_at: string
    updatedAt: string
    __v: number
  }

export interface Post {
    likes: Array<string>;
    _id: string;
    text: string;
    userId: UserId
    themeId: ThemeId
    created_at: string
    updatedAt: string
    __v: number
  }