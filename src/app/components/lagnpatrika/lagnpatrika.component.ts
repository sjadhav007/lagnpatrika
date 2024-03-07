import { Component } from '@angular/core';

@Component({
  selector: 'app-lagnpatrika',
  templateUrl: './lagnpatrika.component.html',
  styleUrls: ['./lagnpatrika.component.scss']
})
export class LagnpatrikaComponent {
  coupleName: string = 'राधा & सुनिल';
  weddingDate: string = '28 ,मार्च, 2024';
  weddingVenue: string = 'लिंबाला तांडा';
  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.startCountdown();
  }

  startCountdown() {
    // Set the target date to March 28, 2024 at 2:15 PM
    const weddingDate = new Date('2024-03-28T14:15:00Z').getTime();

    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = weddingDate - now;

      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(countdown);
        this.days = 0;
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
      }
    }, 1000);
  }

  
}
