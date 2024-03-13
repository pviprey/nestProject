import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  public compteur: {
    get: number,
    post: number,
    put: number
  };
  
  constructor() {
    this.compteur = {
      get: 0,
      post: 0,
      put: 0
    }
  }

  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Verbe HTTP utilisé : ${req.method}`)

    switch(req.method) {
      case 'GET':
        this.compteur.get++;
        console.log(`\t-> Nombre de requêtes GET : ${this.compteur.get}`);
        break;
      case 'POST':
        this.compteur.post++;
        console.log(`\t-> Nombre de requêtes POST : ${this.compteur.post}`);
        break;
      case 'PUT':
        this.compteur.put++;
        console.log(`\t-> Nombre de requêtes PUT : ${this.compteur.put}`);
        break;
    }
    next();
  }
}
