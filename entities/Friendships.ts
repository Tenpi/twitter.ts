import api from "../API"
import {TwitterFriendshipParams, TwitterIDParams, TwitterIDs, TwitterShowParams, TwitterUserFriendship, TwitterUsernameParams, TwitterUserRelationship, TwitterUserSearch} from "../types"

export class Friendships {
    public constructor(private readonly api: api) {}

    public incoming = async (params?: TwitterFriendshipParams) => {
        const response = await this.api.get(`friendships/incoming`, params)
        return response as Promise<TwitterIDs>
    }

    public lookup = async (params: TwitterUsernameParams) => {
        const response = await this.api.get(`friendships/lookup`, params)
        return response as Promise<TwitterUserRelationship[]>
    }

    public noRetweetsIds = async <B extends boolean>(params?: {stringify_ids: B}) => {
        if (!params) params = {} as {stringify_ids: B}
        if (!params.stringify_ids) params.stringify_ids = true as B
        const response = await this.api.get(`friendships/no_retweets/ids`, params)
        return response as Promise<B extends true ? string[] : number[]>
    }

    public outgoing = async (params?: TwitterFriendshipParams) => {
        const response = await this.api.get(`friendships/outgoing`, params)
        return response as Promise<TwitterIDs>
    }

    public show = async (params: TwitterShowParams) => {
        const response = await this.api.get(`friendships/show`, params)
        return response as Promise<TwitterUserFriendship>
    }

    public create = async (params?: any) => {
        const response = await this.api.post(`friendships/create`, params)
        return response as any
    }

    public destroy = async (params?: any) => {
        const response = await this.api.post(`friendships/destroy`, params)
        return response as any
    }

    public update = async (params?: any) => {
        const response = await this.api.post(`friendships/update`, params)
        return response as any
    }
}
