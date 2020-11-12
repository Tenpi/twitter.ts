import api from "../API"
import {TwitterUser, TwitterUserLookupParams, TwitterUserSearchParams} from "../types"

export class Users {
    public constructor(private readonly api: api) {}

    public search = async (params: TwitterUserSearchParams & {q: string}) => {
        const response = await this.api.get(`users/search`, params)
        return response as Promise<TwitterUser[]>
    }

    public lookup = async (params: TwitterUserLookupParams) => {
        const response = await this.api.get(`users/lookup`, params)
        return response as Promise<TwitterUser[]>
    }

    public show = async (params: any) => {
        const response = await this.api.get(`users/show`, params)
        return response as any
    }

    public profileBanner = async (params: any) => {
        const response = await this.api.get(`users/profile_banner`, params)
        return response as any
    }

    public reportSpam = async (params: any) => {
        const response = await this.api.post(`users/report_spam`, params)
        return response as any
    }

}
