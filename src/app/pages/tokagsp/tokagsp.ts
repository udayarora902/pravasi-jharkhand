import { Component, OnInit } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section';
import { FooterComponent } from '../../components/footer/footer';
import { ImageSlideshowComponent } from '../../components/image-slideshow/image-slideshow';
import { NoticeBoardComponent } from '../../components/notice-board/notice-board';
import { HeroContentService, HeroPageContent } from '../../services/hero-content.service';

@Component({
  selector: 'app-tokagsp',
  imports: [HeroSectionComponent, FooterComponent, ImageSlideshowComponent, NoticeBoardComponent],
  templateUrl: './tokagsp.html',
  styleUrl: './tokagsp.css'
})
export class Tokagsp implements OnInit {
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
    this.heroContent = this.heroContentService.getHeroContent('tokagsp');
  }
}
