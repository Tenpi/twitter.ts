import api from "../API"
import {TwitterUser, TwitterUserLookupParams, TwitterUserSearchParams} from "../types"

export class Blocks {
    public constructor(private readonly api: api) {}

    public ids = async (params: any) => {
        const response = await this.api.get(`blocks/ids`, params)
        return response as any
    }

    public list = async (params: any) => {
        const response = await this.api.get(`blocks/list`, params)
        return response as any
    }

    public create = async (params: any) => {
        const response = await this.api.post(`blocks/create`, params)
        return response as any
    }

    public destroy = async (params: any) => {
        const response = await this.api.post(`blocks/destroy`, params)
        return response as any
    }

}
