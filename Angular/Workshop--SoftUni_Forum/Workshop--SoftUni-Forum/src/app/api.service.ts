import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Post } from './types/Post';
import { Theme } from './types/Theme';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) { }

    getThemes() {
        const { apiUrl } = environment;
        return this.http.get<Theme[]>(`${apiUrl}/themes`);
    }

    getTheme(id: string) {
        const { apiUrl } = environment;
        return this.http.get<Theme>(`${apiUrl}/themes/${id}`);
    }

    createTheme(themeName: string, postText: string) {
        return this.http.post<Theme>('/api/themes', { themeName, postText });
    }

    getPosts(limit?: number) {
        const { apiUrl } = environment;
        const limitFilter = limit ? `?limit=${limit}` : '';
        return this.http.get<Post[]>(`${apiUrl}/posts${limitFilter}`);
    }
}
