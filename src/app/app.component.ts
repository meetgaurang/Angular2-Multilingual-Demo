import { Component } from '@angular/core';

import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedLanguage : string = "en";
  translateService : TranslateService;

  constructor(translate: TranslateService) {
      this.translateService = translate;
      // this language will be used as a fallback when a translation isn't found in the current language
      translate.setDefaultLang('en');
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(this.selectedLanguage);
  }

  languageChange (newValue) {
    this.translateService.use(newValue);
  }

}
