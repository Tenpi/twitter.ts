export interface TwitterUser {
    id: number
    id_str: string
    name: string
    screen_name: string
    location: string
    description: string
    url: string
    entities: TwitterUserEntities
    protected: boolean
    followers_count: number
    friends_count: number
    listed_count: number
    created_at: string
    favourites_count: number
    utc_offset: string | null
    time_zone: string | null
    geo_enabled: boolean
    verified: boolean
    statuses_count: number
    lang: string | null
    status: TwitterTweet
    contributors_enabled: boolean
    is_translator: boolean
    is_translation_enabled: boolean
    profile_background_color: string
    profile_background_image_url: string
    profile_background_image_url_https: string
    profile_background_tile: boolean
    profile_image_url: string
    profile_image_url_https: string
    profile_banner_url: string
    profile_link_color: string
    profile_sidebar_border_color: string
    profile_sidebar_fill_color: string
    profile_text_color: string
    profile_use_background_image: boolean
    has_extended_profile: boolean
    default_profile: boolean
    default_profile_image: boolean
    following: boolean
    follow_request_sent: boolean
    notifications: boolean
    translator_type: string
}

export interface TwitterTweet {
    created_at: string
    id: number
    id_str: string
    text: string
    truncated: boolean
    entities: TwitterTweetEntities
    source: string
    in_reply_to_status_id: string | null
    in_reply_to_status_id_str: string | null
    in_reply_to_user_id: string | null
    in_reply_to_user_id_str: string | null
    in_reply_to_screen_name: string | null
    geo: string | null
    coordinates: string | null
    place: string | null
    contributors: string | null
    is_quote_status: boolean
    retweet_count: number
    favorite_count: number
    favorited: boolean
    retweeted: boolean
    lang: string
}

export interface TwitterUserEntities {
    url: {
        urls: TwitterURLS[]
    }
    description: {
        urls: TwitterURLS[]
    }
}

export interface TwitterURLS {
    url: string
    expanded_url: string
    display_url: string
    indices: number[]
}

export interface TwitterTweetEntities {
    hashtags: string[]
    symbols: string[]
    user_mentions: string[]
    urls: string[]
}

export interface TwitterUserSearchParams {
    q?: string
    page?: number
    count?: number
    include_entities?: boolean
}

export interface TwitterIDs {
    ids: string[]
    next_cursor: number
    next_cursor_str: string
    previous_cursor: number
    previous_cursor_str: string
    total_count: number | null
}

export interface TwitterUserParams {
    user_id?: number
    screen_name?: string
    cursor?: number
    count?: number
}

export interface TwitterIDParams extends TwitterUserParams {
    stringify_ids?: boolean
}

export interface TwitterFriendListParams extends TwitterUserParams {
    skip_status?: boolean
    include_user_entities?: boolean
}

export interface TwitterUserSearch {
    users: TwitterUser[]
    next_cursor: number
    next_cursor_str: string
    previous_cursor: number
    previous_cursor_str: string
    total_count: number | null
}

export interface TwitterFriendshipParams {
    cursor?: number
    stringify_ids?: boolean
}

export interface TwitterUsernameParams {
    screen_name?: string
    user_id?: number
}

export type TwitterUserConnections = "following" | "following_requested" | "followed_by" | "none" | "blocking" | "muting"

export interface TwitterUserRelationship {
    name: string
    screen_name: string
    id: number
    id_str: string
    connections: TwitterUserConnections[]
}

export interface TwitterShowParams {
    source_id?: number
    source_screen_name?: string
    target_id?: number
    target_screen_name?: string
}

export interface TwitterUserFriendship {
    relationship: {
        source: {
            id: number
            id_str: string
            screen_name: string
            following: boolean
            followed_by: boolean
            live_following: boolean
            following_received: boolean
            following_requested: boolean
            notifications_enabled: boolean
            can_dm: boolean
            blocking: boolean
            blocked_by: boolean
            muting: boolean
            want_retweets: boolean
            all_replies: boolean
            marked_spam: boolean
        },
        target: {
            id: number
            id_str: string
            screen_name: string
            following: boolean
            followed_by: boolean
            following_received: boolean
            following_requested: boolean
        }
    }
}

export interface TwitterUserLookupParams {
    screen_name?: string
    user_id?: number
    include_entities?: boolean
    tweet_mode?: "compact" | "extended"
}
