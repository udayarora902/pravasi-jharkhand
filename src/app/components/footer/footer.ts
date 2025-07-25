import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
})
export class FooterComponent implements OnInit, OnDestroy {
  currentTestimonialIndex = 0;
  fadeOpacity = 1;
  private testimonialSubscription?: Subscription;

  testimonials = [
    {
      quote: "Pravasi Jharkhand made me feel connected to my roots even while living abroad. It's more than a platform — it's an emotion that brings us all together.",
      author: "Pradeep Ray"
    },
    {
      quote: "Thanks to Pravasi Jharkhand, I found a network of like-minded people from my home state. It's inspiring to see our culture and identity celebrated globally.",
      author: "Komal Saxena"
    },
    {
      quote: "The community support through Pravasi Jharkhand has been incredible. From career guidance to cultural events, it's been a lifeline for diaspora like us.",
      author: "Rajesh Kumar"
    }
  ];

  ngOnInit() {
    this.testimonialSubscription = interval(5000).subscribe(() => {
      this.fadeOutAndIn();
    });
  }

  ngOnDestroy() {
    this.testimonialSubscription?.unsubscribe();
  }

  fadeOutAndIn() {
    // Step 1: Fade out
    this.fadeOpacity = 0;

    // Step 2: After fade out (500ms), change testimonial and fade in
    setTimeout(() => {
      this.currentTestimonialIndex =
        (this.currentTestimonialIndex + 1) % this.testimonials.length;
      this.fadeOpacity = 1;
    }, 500); // match fade duration
  }
}
