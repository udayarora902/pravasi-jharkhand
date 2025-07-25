import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

export interface NoticeItem {
  date: {
    day: string;
    month: string;
  };
  title: string;
  description: string;
  location: string;
  time: string;
  link?: string; // Optional link for clickable notices
}

@Component({
  selector: 'app-notice-board',
  imports: [CommonModule],
  templateUrl: './notice-board.html',
  styleUrl: './notice-board.css'
})
export class NoticeBoardComponent {
  @Input() notices: NoticeItem[] = [];
  @Input() title: string = 'NOTICE BOARD';
  @Input() titleIcon: string = '📢';
  @Input() maxHeight: string = 'h-80';

  constructor(private router: Router) {}

  onNoticeClick(notice: NoticeItem): void {
    if (notice.link) {
      this.router.navigate([notice.link]);
    }
  }
}
