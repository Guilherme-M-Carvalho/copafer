import { Request, Response } from "express";
import { StoreDto } from "../dto/store.dto";
import { CreateStore } from "../use-case/store/create-store/create-store";

export class StoreController {
    async handleCreate(req: Request, res: Response) {
        console.log(req.body);
        const dto = new StoreDto()
        const dtoValidation = dto.handleCreate(req.body)

        
        const useCase = new CreateStore()
        const create = await useCase.handle(dtoValidation)
        res.send(create)
    }
    
    // async handleFindOne(req: Request, res: Response) {
    //     const dto = new PhoneDto()
    //     const dtoValidation = dto.handleFindOne({id: Number(req.params.id)})

    //     const useCase = new FindOnePhone()
    //     const findOne = await useCase.handle(dtoValidation)

    //     res.send(findOne)
    // }

    // async handleFind(req: Request, res: Response) {
    //     const useCase = new FindPhone()
    //     const find = await useCase.handle()
    //     res.send(find)
    // }
}