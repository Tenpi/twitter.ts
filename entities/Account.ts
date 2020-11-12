import api from "../API"
import {TwitterList, TwitterListParams, TwitterMemberParams, TwitterUserSearch} from "../types"

export class Account {
    public constructor(private readonly api: api) {}

    public settings = async (params?: any) => {
        const response = await this.api.get(`account/settings`, params)
        return response as any
    }

    public verifyCredentials = async (params?: any) => {
        const response = await this.api.get(`account/verify_credentials`, params)
        return response as any
    }

    public removeProfileBanner = async (params?: any) => {
        const response = await this.api.post(`account/remove_profile_banner`, params)
        return response as any
    }

    public settingsPOST = async (params?: any) => {
        const response = await this.api.post(`account/settings`, params)
        return response as any
    }

    public updateProfile = async (params?: any) => {
        const response = await this.api.post(`account/update_profile`, params)
        return response as any
    }

    public updateProfileBanner = async (params?: any) => {
        const response = await this.api.post(`account/update_profile_banner`, params)
        return response as any
    }

    public updateProfileImage = async (params?: any) => {
        const response = await this.api.post(`account/update_profile_image`, params)
        return response as any
    }

}
