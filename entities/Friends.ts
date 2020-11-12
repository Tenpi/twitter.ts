import api from "../API"
import {TwitterFriendListParams, TwitterIDParams, TwitterIDs, TwitterUserSearch} from "../types"

export class Friends {
    public constructor(private readonly api: api) {}

    public ids = async (params?: TwitterIDParams) => {
        if (!params) params = {} as TwitterIDParams
        if (!params.stringify_ids) params.stringify_ids = true
        const response = await this.api.get(`friends/ids`, params)
        return response as Promise<TwitterIDs>
    }

    public list = async (params?: TwitterFriendListParams) => {
        const response = await this.api.get(`friends/list`, params)
        return response as Promise<TwitterUserSearch>
    }
}
