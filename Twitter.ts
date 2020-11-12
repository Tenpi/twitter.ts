import api from "./API"
import {Followers, Friends, Friendships, Lists, Users} from "./entities"

export default class Twitter {
    public static consumerKey: string
    public static consumerSecret: string
    public static accessToken: string
    public static accessSecret: string
    public api: api
    public users: Users
    public followers: Followers
    public friends: Friends
    public friendships: Friendships
    public lists: Lists

    public constructor(credentials: {
        consumerKey: string,
        consumerSecret: string,
        accessToken: string,
        accessSecret: string}) {
            Twitter.consumerKey = credentials.consumerKey
            Twitter.consumerSecret = credentials.consumerSecret
            Twitter.accessToken = credentials.accessToken
            Twitter.accessSecret = credentials.accessSecret
            this.api = new api()
            this.users = new Users(this.api)
            this.followers = new Followers(this.api)
            this.friends = new Friends(this.api)
            this.friendships = new Friendships(this.api)
            this.lists = new Lists(this.api)
    }
}

module.exports.default = Twitter
export * from "./entities/index"
export * from "./types/index"
