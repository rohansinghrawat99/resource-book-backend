import { Request, Response } from "express";
import { ResourceCreateDto } from "../dtos/resource/resource-create.dto";
import { ResourceTransformer } from "../transformers/resource.tansformer";
import { resourceService } from "../services/entities/resource.service";

export class ResourceController {
    static async create(req: Request, res: Response) {
        const inputData = req.body as ResourceCreateDto;

        const resource = await resourceService.create(inputData);

        return res.json({
            data: await new ResourceTransformer().transform(resource)
        });
    }
}