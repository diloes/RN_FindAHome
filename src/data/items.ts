import { ImageSourcePropType } from "react-native"
import { colors } from "../utils/colors"

export interface Item {
  id: number
  text: string
  bgColor: string
  textColor: string
  textColor2?: string
  img: ImageSourcePropType
  imgAnimals?: ImageSourcePropType
  btn?: boolean
}

export const items: Item[] = [
  {
    id: 1,
    text: 'Somos una organización sin fines de lucro que busca ayudar a las mascotas a encontrar un hogar.',
    bgColor: colors.brown,
    textColor: colors.grey[100],
    img: require('../../assets/logoFAHYellow.png')         
  },
  {
    id: 2,
    text: 'Podrás adoptar a tu mascota soñada o encontrarle un mejor hogar a un gatito rescatado.',
    bgColor: colors.pink,
    textColor: colors.grey[100],
    img: require('../../assets/logoFAHYellow.png'),
    imgAnimals: require('../../assets/animals.png')
  },
  {
    id: 3,
    text: 'No discriminamos por raza y priorizamos a los que más tiempo lleven sin un hogar.',
    bgColor: colors.yellow,
    textColor: colors.grey[800],
    img: require('../../assets/logoFAHPink.png') 
  },
  {
    id: 4,
    text: 'Registrate',
    bgColor: colors.brown,
    textColor: colors.grey[300],
    textColor2: colors.grey[800],
    img: require('../../assets/logoFAHYellow.png'),
    btn: true
  },
]