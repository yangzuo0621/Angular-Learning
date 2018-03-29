import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  private messages: string[] = [];

  constructor() { }

  public addMessage(message: string): void {
    const currentDate = new Date();
    this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
  }
}
