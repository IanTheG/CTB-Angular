import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

import ENGLISH from '../../assets/lang/en.json'
import SPANISH from '../../assets/lang/es.json'
import { LanguagesI } from '../models/lang'

@Injectable({
  providedIn: 'root',
})
export class TranslateService {
  userLanguage: string = 'en'
  lang: BehaviorSubject<LanguagesI>

  constructor() {
    const langInStorage = localStorage.getItem('ctb-language')
    langInStorage ? (this.userLanguage = langInStorage || 'en') : localStorage.setItem('ctb-language', 'en')

    this.lang = new BehaviorSubject<LanguagesI>(ENGLISH)
    if (this.userLanguage === 'es') this.lang = new BehaviorSubject<LanguagesI>(SPANISH)
  }

  getLangInStorage(): boolean {
    if (localStorage.getItem('ctb-language') === 'es') {
      return true
    }
    return false
  }

  setLang(lang: string): void {
    if (lang === 'en') {
      localStorage.setItem('ctb-language', 'en')
      this.lang.next(ENGLISH)
    }
    if (lang === 'es') {
      localStorage.setItem('ctb-language', 'es')
      this.lang.next(SPANISH)
    } else {
      localStorage.setItem('ctb-language', 'en')
      this.lang.next(ENGLISH)
    }
  }
}
