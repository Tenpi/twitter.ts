import api from "../API"
import {TwitterUser, TwitterUserLookupParams, TwitterUserSearchParams} from "../types"

export class Search {
    public constructor(private readonly api: api) {}

    public tweets = async (params: any) => {
        const response = await this.api.get(`search/tweets`, params)
        return response as any
    }
}
