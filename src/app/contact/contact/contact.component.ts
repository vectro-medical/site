import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  contacts = [
    {
      name: 'Kapil Redishettywar',
      building: 'Kartik Niwas',
      area: 'Sonai Nagar',
      city: 'Nanded',
      state: 'Maharashtra',
      country: 'India',
      pincode: '431605',
      mob: '+91 9975634785',
      email: '',
      gmapUrl:
        'https://www.google.co.in/maps/place/Kartik+Niwas/@19.186354,77.3069246,17z/data=!4m12!1m6!3m5!1s0x3bd1d69258caec97:0x11cb8da96aa0c026!2sKartik+Niwas!8m2!3d19.1858178!4d77.306507!3m4!1s0x3bd1d69258caec97:0x11cb8da96aa0c026!8m2!3d19.1858178!4d77.306507',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
