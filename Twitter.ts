import api from "./API"
import {Users} from "./entities"

export default class Twitter {
    public static consumerKey: string
    public static consumerSecret: string
    public static accessToken: string
    public static accessSecret: string
    public api: api
    public users: Users

    public constructor(credentials: {
        consumerKey: string,
        consumerSecret: string,
        accessToken: string,
        accessSecret: string}) {
            Twitter.consumerKey = credentials.consumerKey
            Twitter.consumerSecret = credentials.consumerSecret
            Twitter.accessToken = credentials.accessToken
            Twitter.accessSecret = credentials.accessSecret
            this.api = new api({
                consumerKey: Twitter.consumerKey,
                consumerSecret: Twitter.consumerSecret,
                accessToken: Twitter.accessToken,
                accessSecret: Twitter.accessSecret
            })
            this.users = new Users(this.api)
    }
}

module.exports.default = Twitter
export * from "./entities/index"
export * from "./types/index"
