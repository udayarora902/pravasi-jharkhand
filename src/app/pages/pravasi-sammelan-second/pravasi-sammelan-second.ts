import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section';
import { FooterComponent } from '../../components/footer/footer';
import { ImageSlideshowComponent } from '../../components/image-slideshow/image-slideshow';
import { NoticeBoardComponent } from '../../components/notice-board/notice-board';
import { HeroContentService, HeroPageContent } from '../../services/hero-content.service';

@Component({
  selector: 'app-pravasi-sammelan-second',
  imports: [HeroSectionComponent, FooterComponent, ImageSlideshowComponent, NoticeBoardComponent],
  templateUrl: './pravasi-sammelan-second.html',
  styleUrl: './pravasi-sammelan-second.css'
})
export class PravasiSammelanSecond implements OnInit {
heroContent: HeroPageContent = {
    noticeBoardTitle: 'NOTICE BOARD',
    noticeBoardIcon: '📢',
    images: [] as any,
    notices: [] as any,
    showSlideshow: true,
    showNoticeBoard: true
  };

  constructor(private heroContentService: HeroContentService) {}

  ngOnInit() {
    this.heroContent = this.heroContentService.getHeroContent('pravasisammelansecond');
  }
}
