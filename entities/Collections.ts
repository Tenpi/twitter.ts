import api from "../API"
import {TwitterUser, TwitterUserLookupParams, TwitterUserSearchParams} from "../types"

export class Collections {
    public constructor(private readonly api: api) {}

    public entries = async (params: any) => {
        const response = await this.api.get(`collections/entries`, params)
        return response as any
    }

    public list = async (params: any) => {
        const response = await this.api.get(`collections/list`, params)
        return response as any
    }

    public show = async (params: any) => {
        const response = await this.api.get(`collections/show`, params)
        return response as any
    }

    public create = async (params: any) => {
        const response = await this.api.post(`collections/create`, params)
        return response as any
    }

    public destroy = async (params: any) => {
        const response = await this.api.post(`collections/destroy`, params)
        return response as any
    }

    public add = async (params: any) => {
        const response = await this.api.post(`collections/entries/add`, params)
        return response as any
    }

    public curate = async (params: any) => {
        const response = await this.api.post(`collections/entries/curate`, params)
        return response as any
    }

    public move = async (params: any) => {
        const response = await this.api.post(`collections/entries/move`, params)
        return response as any
    }

    public remove = async (params: any) => {
        const response = await this.api.post(`collections/entries/remove`, params)
        return response as any
    }

    public update = async (params: any) => {
        const response = await this.api.post(`collections/update`, params)
        return response as any
    }

}
