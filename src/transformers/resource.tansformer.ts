import {TransformerAbstract} from "./transformer.abstract";
import {Resource} from "../models/resource.model";
import {Dictionary} from "async";

export class ResourceTransformer extends TransformerAbstract<Resource> {
     protected _map(resource: Resource): Dictionary<any> {
        return {
            title: resource.title,
            description: resource.description,
            highlights: resource.highlights
        };
    }
}