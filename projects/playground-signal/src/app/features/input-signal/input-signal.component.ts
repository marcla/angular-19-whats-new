import { Component, inject, Injectable } from '@angular/core';

import { AccountComponent } from './ui/message.component';

@Injectable()
class UserService {
  readonly #list = [
    'Natalie Wilson',
    'Lisa Rutherford',
    'Frank Lyman',
    'Ava Paige',
    'Sue Wallace',
    'Theresa Sutherland',
    'Penelope Arnold',
    'Victor Watson',
    'Piers Ince',
    'Nicola Edmunds',
  ];

  getRandomUser(): string {
    const pos = Math.floor(Math.random() * this.#list.length);

    return this.#list[pos];
  }
}

@Component({
  imports: [AccountComponent],
  template: `<app-account [username]="username" />`,
  providers: [UserService],
})
export class InputSignalComponent {
  readonly #userService = inject(UserService);

  username = this.#userService.getRandomUser();

  constructor() {
    setInterval(() => {
      this.username = this.#userService.getRandomUser();
    }, 6000);
  }
}
