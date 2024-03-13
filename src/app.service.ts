import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  public OOC: string[] = [
    'Fuyez! Il est plus nombreux que nous!',
    'Vous savez les enfants, moi j\'ai connu Jeanne d\'Arc.',
    'T\'as plus de muscle que de force.'
  ];

  getHello(): string {
    return 'Hello World!';
  }

  getMbappe(): string {
    return 'Pas content? Triplé.';
  }

  getOOC(index: number): string {
    return this.OOC.at(index);
  }
}
