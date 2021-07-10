export interface MysteryI {
  id: string
  name: string
  decades: DecadeI[]
}

export const defaultMystery: MysteryI = {
  id: '',
  name: '',
  decades: [],
}

export interface DecadeI {
  id: number
  name: string
  number: string
  fruits: string
  scenes: {
    verse: string
    ref: string
  }[]
}

export const defaultDecade: DecadeI = {
  id: 0,
  name: '',
  number: '',
  fruits: '',
  scenes: [],
}
