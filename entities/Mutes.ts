import api from "../API"
import {TwitterUser, TwitterUserLookupParams, TwitterUserSearchParams} from "../types"

export class Mutes {
    public constructor(private readonly api: api) {}

    public ids = async (params: any) => {
        const response = await this.api.get(`mutes/users/ids`, params)
        return response as any
    }

    public list = async (params: any) => {
        const response = await this.api.get(`mutes/users/list`, params)
        return response as any
    }

    public create = async (params: any) => {
        const response = await this.api.post(`mutes/users/create`, params)
        return response as any
    }

    public destroy = async (params: any) => {
        const response = await this.api.post(`mutes/users/destroy`, params)
        return response as any
    }

}
