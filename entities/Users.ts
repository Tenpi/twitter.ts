import api from "../API"
import {TwitterUser} from "../types"

export class Users {
    constructor(private readonly api: api) {}

    public search = async (params: any & {q: string}) => {
        const response = await this.api.get(`users/search`, params)
        return response as Promise<TwitterUser[]>
    }
}
