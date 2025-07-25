import { Routes } from '@angular/router';
import { ITandMedia } from './pages/itand-media/itand-media';
import { Home } from './pages/home/home';
import { ContactUs } from './pages/contact-us/contact-us';
import { DelhiContactPerson } from './pages/delhi-contact-person/delhi-contact-person';
import { Feedback } from './pages/feedback/feedback';
import { NationalTeam } from './pages/national-team/national-team';
import { PhotoGallery } from './pages/photo-gallery/photo-gallery';
import { PravasiSammelanSecond } from './pages/pravasi-sammelan-second/pravasi-sammelan-second';
import { PressRelease } from './pages/press-release/press-release';
import { Tokagsp } from './pages/tokagsp/tokagsp';
import { VideoGallery } from './pages/video-gallery/video-gallery';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'tokagsp', component: Tokagsp },
  { path: 'itandmedia', component: ITandMedia },
  { path: 'pravasisammelansecond', component: PravasiSammelanSecond },
  { path: 'nationalteam', component: NationalTeam },
  { path: 'delhicontactperson', component: DelhiContactPerson },
  { path: 'photogallery', component: PhotoGallery },
  { path: 'videogallery', component: VideoGallery },
  { path: 'pressrelease', component: PressRelease },
  { path: 'feedback', component: Feedback },
  { path: 'contactus', component: ContactUs },
];
