import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { ProfExperienceComponent } from './prof-experience/prof-experience.component';
import { EducationComponent } from './education/education.component';
import { DomainKnlwoedgeComponent } from './domain-knlwoedge/domain-knlwoedge.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TechSkillsComponent } from './tech-skills/tech-skills.component';
import { ProfSearsComponent } from './prof-sears/prof-sears.component';
import { ProfNtComponent } from './prof-nt/prof-nt.component';
import { ProfAppleComponent } from './prof-apple/prof-apple.component';
import { ProfNokiaComponent } from './prof-nokia/prof-nokia.component';
import { ProfPearsonComponent } from './prof-pearson/prof-pearson.component';
import { ProfJostensComponent } from './prof-jostens/prof-jostens.component';
import { ProfOvationComponent } from './prof-ovation/prof-ovation.component';
import { ProfExpressScriptsComponent } from './prof-express-scripts/prof-express-scripts.component';
import { ProfWellsfargoComponent } from './prof-wellsfargo/prof-wellsfargo.component';
import { ProfBellsouthComponent } from './prof-bellsouth/prof-bellsouth.component';
import { ProfCoalindiaComponent } from './prof-coalindia/prof-coalindia.component';
import { ProfSummaryComponent } from './prof-summary/prof-summary.component';
import { BinitCarouselComponent } from './binit-carousel/binit-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotoGalleryComponent,
    NavbarComponent,
    HeaderComponent,
    AboutComponent,
    FeaturesComponent,
    ProfExperienceComponent,
    EducationComponent,
    DomainKnlwoedgeComponent,
    ContactComponent,
    FooterComponent,
    TechSkillsComponent,
    ProfSearsComponent,
    ProfNtComponent,
    ProfAppleComponent,
    ProfNokiaComponent,
    ProfPearsonComponent,
    ProfJostensComponent,
    ProfOvationComponent,
    ProfExpressScriptsComponent,
    ProfWellsfargoComponent,
    ProfBellsouthComponent,
    ProfCoalindiaComponent,
    ProfSummaryComponent,
    BinitCarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
