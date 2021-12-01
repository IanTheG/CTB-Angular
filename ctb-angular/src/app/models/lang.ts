import { MysteryI } from './mysteries'

export interface LanguagesI {
  home: HomeI
  landscape_mobile: string
  landscape_desktop: LandscapeDesktopI
  buttons: {
    continue: string
    home: string
  }
  prayers: PrayersI
  glorious: MysteryI
  joyful: MysteryI
  luminous: MysteryI
  sorrowful: MysteryI
}

/* Home ====================================================================================== */

export interface ContactI {
  title: string
  created_by: string
  issues_p1: string
  issues_p2: string
  issues_p3: string
  compatibility_note: string
  bible_quote: string
  rosary_favicon: string
  how_to: string
  copyr_img_p1: string
  copyr_img_p2: string
  copyr_img_p3: string
  copyright: string
}

export interface SelectableLanguagesI {
  english: string
  spanish: string
}

export interface RosaryPurposeI {
  title: string
  p1: string
  p2: string
}

export interface PrayingRosaryI {
  title: string
  p2: string
  p1: string
  steps: string[]
}

export interface HomeMysteriesI {
  mysteries_title: string
  glorious: string
  joyful: string
  sorrowful: string
  luminous: string
  days: DaysI
}

export interface HomePrayersI {
  opening: string
  say_the: string
  begin_with: string
  for_the_pope: string
  say_three: string
  hail_marys: string
  hail_mary_virtues: string
  final: string
  end_with: string
}

export interface DaysI {
  sunday: string
  monday: string
  tuesday: string
  wednesday: string
  thursday: string
  friday: string
  saturday: string
}

export interface HomeI {
  title: string
  desc: string
  instructions: string
  get_started: string
  languages: SelectableLanguagesI
  rosary_purpose: RosaryPurposeI
  praying_rosary: PrayingRosaryI
  prayers: HomePrayersI
  mysteries: HomeMysteriesI
  contact: ContactI
}

/* ====================================================================================== */

export interface LandscapeDesktopI {
  hook: string
  desc: string
  instructions: string
}

interface PrayerBodyI {
  title: string
  text: string[]
}

export interface PrayersI {
  CREED: PrayerBodyI
  SIGN_OF_CROSS: PrayerBodyI
  OUR_FATHER: PrayerBodyI
  HAIL_MARY: PrayerBodyI
  GLORY_BE: PrayerBodyI
  FATIMA_PRAYER: PrayerBodyI
  HAIL_HOLY_QUEEN: PrayerBodyI
  FINAL_PRAYER: PrayerBodyI
  ST_MICHAEL: PrayerBodyI
}
