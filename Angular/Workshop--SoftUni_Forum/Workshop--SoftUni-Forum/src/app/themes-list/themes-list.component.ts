import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Theme } from '../types/Theme';
import { UserService } from '../user/user.service';

@Component({
    selector: 'app-themes-list',
    templateUrl: './themes-list.component.html',
    styleUrls: ['./themes-list.component.css']
})
export class ThemesListComponent implements OnInit {
    isLoading: boolean = true;
    themesList: Theme[] = [];

    constructor(private apiService: ApiService, private userService: UserService) { }

    get isLogged(): boolean {
        return this.userService.isLogged;
    }

    ngOnInit(): void {
        this.apiService.getThemes().subscribe({
            next: (themes) => {
                this.themesList = themes;
                this.isLoading = false;
            },
            error: (err) => {
                this.isLoading = false;
                console.error(`Error: ${err}`);
            }
        });
    }
}
