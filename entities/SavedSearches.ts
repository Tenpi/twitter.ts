import api from "../API"
import {TwitterUser, TwitterUserLookupParams, TwitterUserSearchParams} from "../types"

export class SavedSearches {
    public constructor(private readonly api: api) {}

    public list = async (params: any) => {
        const response = await this.api.get(`saved_searches/list`, params)
        return response as any
    }

    public show = async (id: string) => {
        const response = await this.api.get(`saved_searches/show/${id}`, params)
        return response as any
    }

    public create = async (params: any) => {
        const response = await this.api.post(`saved_searches/create`, params)
        return response as any
    }

    public destroy = async (id: string) => {
        const response = await this.api.post(`saved_searches/destroy/${id}`)
        return response as any
    }

}
