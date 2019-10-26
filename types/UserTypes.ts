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
