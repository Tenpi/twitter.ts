import api from "../API"
import {TwitterList, TwitterListParams, TwitterMemberParams, TwitterUserSearch} from "../types"

export class Lists {
    public constructor(private readonly api: api) {}

    public list = async (params?: TwitterListParams) => {
        const response = await this.api.get(`lists/list`, params)
        return response as Promise<TwitterList[] | []>
    }

    public members = async (params?: TwitterMemberParams) => {
        const response = await this.api.get(`lists/members`, params)
        return response as Promise<TwitterUserSearch>
    }

    public membersShow = async (params?: any) => {
        const response = await this.api.get(`lists/members/show`, params)
        return response as any
    }

    public memberships = async (params?: any) => {
        const response = await this.api.get(`lists/memberships`, params)
        return response as any
    }

    public ownerships = async (params?: any) => {
        const response = await this.api.get(`lists/ownerships`, params)
        return response as any
    }

    public show = async (params?: any) => {
        const response = await this.api.get(`lists/show`, params)
        return response as any
    }

    public statuses = async (params?: any) => {
        const response = await this.api.get(`lists/statuses`, params)
        return response as any
    }

    public subscribers = async (params?: any) => {
        const response = await this.api.get(`lists/subscribers`, params)
        return response as any
    }

    public subscribersShow = async (params?: any) => {
        const response = await this.api.get(`lists/subscribers/show`, params)
        return response as any
    }

    public subscriptions = async (params?: any) => {
        const response = await this.api.get(`lists/subscriptions`, params)
        return response as any
    }

    public create = async (params?: any) => {
        const response = await this.api.post(`lists/create`, params)
        return response as any
    }

    public destroy = async (params?: any) => {
        const response = await this.api.post(`lists/destroy`, params)
        return response as any
    }

    public membersCreate = async (params?: any) => {
        const response = await this.api.post(`lists/members/create`, params)
        return response as any
    }

    public membersCreateAll = async (params?: any) => {
        const response = await this.api.post(`lists/members/create_all`, params)
        return response as any
    }

    public membersDestroy = async (params?: any) => {
        const response = await this.api.post(`lists/members/destroy`, params)
        return response as any
    }

    public membersDestroyAll = async (params?: any) => {
        const response = await this.api.post(`lists/members/destroy_all`, params)
        return response as any
    }

    public subscribersCreate = async (params?: any) => {
        const response = await this.api.post(`lists/subscribers/create`, params)
        return response as any
    }

    public subscribersDestroy = async (params?: any) => {
        const response = await this.api.post(`lists/subscribers/destroy`, params)
        return response as any
    }

    public update = async (params?: any) => {
        const response = await this.api.post(`lists/update`, params)
        return response as any
    }
}
