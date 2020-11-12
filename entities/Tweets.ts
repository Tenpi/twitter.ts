import api from "../API"
import {TwitterUser, TwitterUserLookupParams, TwitterUserSearchParams} from "../types"

export class Tweets {
    public constructor(private readonly api: api) {}

    public lookup = async (params: any) => {
        const response = await this.api.get(`statuses/lookup`, params)
        return response as any
    }

    public oembed = async (params: any) => {
        const response = await this.api.get(`statuses/oembed`, params)
        return response as any
    }

    public retweeters = async (params: any) => {
        const response = await this.api.get(`statuses/retweeters/id`, params)
        return response as any
    }

    public retweets = async (id: string, params: any) => {
        const response = await this.api.get(`statuses/retweets/${id}`, params)
        return response as any
    }

    public retweetsOfMe = async (params: any) => {
        const response = await this.api.get(`statuses/retweets_of_me`, params)
        return response as any
    }

    public show = async (id: string, params: any) => {
        const response = await this.api.get(`statuses/show/${id}`, params)
        return response as any
    }

    public homeTimeline = async (params: any) => {
        const response = await this.api.get(`statuses/home_timeline`, params)
        return response as any
    }

    public mentionsTimeline = async (params: any) => {
        const response = await this.api.get(`statuses/mentions_timeline`, params)
        return response as any
    }

    public userTimeline = async (params: any) => {
        const response = await this.api.get(`statuses/user_timeline`, params)
        return response as any
    }

    public sample = async (params: any) => {
        const response = await this.api.getStream(`statuses/sample`, params)
        return response as any
    }

    public filter = async (params: any) => {
        const response = await this.api.postStream(`statuses/filter`, params)
        return response as any
    }

    public destroy = async (id: string) => {
        const response = await this.api.post(`statuses/destroy/${id}`)
        return response as any
    }

    public retweet = async (id: string) => {
        const response = await this.api.post(`statuses/retweet/${id}`)
        return response as any
    }

    public unretweet = async (id: string) => {
        const response = await this.api.post(`statuses/unretweet/${id}`)
        return response as any
    }

    public tweet = async (params: any) => {
        const response = await this.api.post(`statuses/update`, params)
        return response as any
    }

}
