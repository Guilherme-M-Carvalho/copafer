import { Request, Response } from "express";
import { StoreDto } from "../dto/store.dto";
import { CreateStore } from "../use-case/store/create-store/create-store";
import { FindStore } from "../use-case/store/find-store/find-store";
import { UpdateStore } from "../use-case/store/update-store/update-store";
import { FindOneStore } from "../use-case/store/find-one-store/find-one-store";
import { DeleteStore } from "../use-case/store/delete-store/delete-store";

export class StoreController {
    async handleCreate(req: Request, res: Response) {
        const dto = new StoreDto()
        const dtoValidation = dto.handleCreate(req.body)
        
        const useCase = new CreateStore()
        const create = await useCase.handle(dtoValidation)
        res.send(create)
    }

    async handleUpdate(req: Request, res: Response) {
        const useCase = new UpdateStore()
        const create = await useCase.handle(req.body)
        res.send(create)
    }
    
    async handleFindOne(req: Request, res: Response) {
        const useCase = new FindOneStore()
        const findOne = await useCase.handle({
            id: Number(req.params.id)
        })
        res.send(findOne)
    }

    async handleDelete(req: Request, res: Response) {
        const useCase = new DeleteStore()
        const findOne = await useCase.handle({
            id: Number(req.params.id)
        })
        res.send(findOne)
    }

    async handleFind(req: Request, res: Response) {
        const useCase = new FindStore()
        const find = await useCase.handle()
        const dto = new StoreDto()
        const dtoValidation = dto.handleFindOne(find)
        res.send(dtoValidation)
    }
}