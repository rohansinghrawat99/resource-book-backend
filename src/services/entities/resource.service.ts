import {ResourceCreateDto} from "../../dtos/resource/resource-create.dto";
import {Resource} from "../../models/resource.model";

class ResourceService {

    static getInstance(): ResourceService {
        return new ResourceService();
    }

    async create(data: ResourceCreateDto): Promise<Resource> {
        return Resource.create({
            title: data.title,
            description: data.description,
            highlight: data.highlight,
            pic_namespace: data.pic_namespace
        })
    }
}

export const resourceService = ResourceService.getInstance();
