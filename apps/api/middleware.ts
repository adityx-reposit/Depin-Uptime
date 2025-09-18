
import { NextFunction, Request, Response } from 'express';

export function middleware(req:Request, res:Response, next:NextFunction) {
      const authHeader = req.headers['authorization'];
      if(authHeader){
      
        req.userid="1";
        next();
      }


    }