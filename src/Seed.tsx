/**
 * Created by Antonio on 21/02/2017.
 */

export interface  IProduct {
  id: number;
  title: string;
  description: string;
  url: string;
  votes: number;
  submitterAvatarUrl: string;
  productImageUrl: string;
}

export class Datos {

 public static getProducts(): IProduct[] {

  const products: IProduct[] = [
   {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: this.generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/daniel.jpg',
    productImageUrl: 'images/products/image-aqua.png',
   },
   {
    id: 2,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn points when your favorite politicians pass legislation.',
    url: '#',
    votes: this.generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/kristy.png',
    productImageUrl: 'images/products/image-rose.png',
   },
   {
    id: 3,
    title: 'Tinfoild: Tailored tinfoil hats',
    description: 'We already have your measurements and shipping address.',
    url: '#',
    votes: this.generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/veronika.jpg',
    productImageUrl: 'images/products/image-steel.png',
   },
   {
    id: 4,
    title: 'Haught or Naught',
    description: 'High-minded or absent-minded? You decide.',
    url: '#',
    votes: this.generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/molly.png',
    productImageUrl: 'images/products/image-yellow.png',
   }
  ];

  return products;
 }

 private static generateVoteCount(): number {
   return Math.floor((Math.random() * 50) + 15);
 }

}

export default Datos;