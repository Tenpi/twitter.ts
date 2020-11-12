import {TwitterUser} from "./index"

export interface TwitterList {
    id: number
    id_str: string
    name: string
    uri: string
    subscriber_count: number
    member_count: number
    mode: string
    description: string
    slug: string
    full_name: string
    created_at: string
    following: boolean
    user: TwitterUser
}

export interface TwitterListParams {
    user_id?: string
    screen_name?: string
    reverse?: boolean
}

export interface TwitterMemberParams {
    list_id?: string,
    slug?: string
    owner_screen_name?: string
    owner_id?: string
    count?: number
    cursor?: number
    include_entities?: boolean
    skip_status?: boolean
}
