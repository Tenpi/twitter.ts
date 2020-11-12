import api from "../API"
import {TwitterIDParams, TwitterIDs, TwitterListParams, TwitterUserSearch} from "../types"

export class Followers {
    public constructor(private readonly api: api) {}

    public ids = async (params?: TwitterIDParams) => {
        if (!params) params = {} as TwitterIDParams
        if (!params.stringify_ids) params.stringify_ids = true
        const response = await this.api.get(`followers/ids`, params)
        return response as Promise<TwitterIDs>
    }

    public list = async (params?: TwitterListParams) => {
        const response = await this.api.get(`followers/list`, params)
        return response as Promise<TwitterUserSearch>
    }
}
