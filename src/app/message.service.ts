import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: string[] = []; // initialese as an emtpy array of strings

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  constructor() { }

}
