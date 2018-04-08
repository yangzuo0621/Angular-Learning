import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from './message.service';

@Component({
  selector: 'pm-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private messageService: MessageService,
    private router: Router) { }

  ngOnInit() {
  }

  close(): void {
    // Close the popup.
  }

}
