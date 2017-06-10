import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact-component.css']
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // this.contactForm = this.formBuilder.group({
    //   name: ['', Validators.required],
    //   email: ['', Validators.required],
    //   content: ['', [Validators.required, Validators.minLength(10)]]
    // });
  }
}
