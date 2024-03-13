import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  public compteur: {
    get: number,
    post: number
  };
  
  constructor() {
    this.compteur = {
      get: 0,
      post: 0
    }
  }

  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Verbe HTTP utilisé : ${req.method}`)

    if(req.method === 'GET') {
      this.compteur.get++;
      console.log(`\t-> Nombre de requêtes GET : ${this.compteur.get}`);
    }else if(req.method === 'POST') {
      this.compteur.post++;
      console.log(`\t-> Nombre de requêtes POST : ${this.compteur.post}`);
    }
    
    next();
  }
}
