import express, { NextFunction, Request, Response } from 'express'
import { verify } from "jsonwebtoken" // import jsonwebtoken




export class Middleware {

    async isAuthenticated(req: any, res: Response, next: NextFunction) {
        const authToken = req.headers.authorization
        
        if(!authToken){
            return res.status(401).end()
        }
    
        const [, token] = authToken.split(' ')
        try{
            const response: any = verify(token, process.env.JWT_PASS ?? '')
            req.userId = response.id
            return next()
        } catch (err){
            return res.status(401).end()
        }
    }
}