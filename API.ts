import crypto from "crypto"
import {stringify} from "querystring"
import request from "request-promise-native"
const apiURL = "https://api.twitter.com/1.1/"

export default class API {
    constructor(private readonly credentials: {
        consumerKey: string
        consumerSecret: string
        accessToken: string
        accessSecret: string
    }) {}

    public get = async (endpoint: string, params?: any) => {
        if (!params) params = {}
        if (endpoint.startsWith("/")) endpoint = endpoint.slice(1)
        endpoint = apiURL + endpoint + ".json"
        const oauth = {
            consumer_key: this.credentials.consumerKey,
            consumer_secret: this.credentials.consumerSecret,
            token: this.credentials.accessToken,
            token_secret: this.credentials.accessSecret
        }
        const response = await request.get(endpoint, {oauth, qs: params})
        return JSON.parse(response)
    }

    public post = async (endpoint: string, params?: any) => {
        if (!params) params = {}
        if (endpoint.startsWith("/")) endpoint = endpoint.slice(1)
        endpoint = apiURL + endpoint + ".json"
        const oauth = {
            consumer_key: this.credentials.consumerKey,
            consumer_secret: this.credentials.consumerSecret,
            token: this.credentials.accessToken,
            token_secret: this.credentials.accessSecret
        }
        const response = await request.post(endpoint, {oauth, qs: params})
        return JSON.parse(response)
    }

    private readonly generateSignature = async (params: any, requestURL: string, sigKey: string) => {
        console.log(requestURL)
        sigKey = sigKey.replace(/query=/g, "").replace(/%26/, "&")
        const sorted = []
        for (const i in params) {
            sorted.push([i, params[i]])
        }

        sorted.sort((a, b) => {
            if (a[1].toLowerCase() < b[1].toLowerCase()) return -1
            if (a[1].toLowerCase() > b[1].toLowerCase()) return 1
            return 0
        })

        let parameterString = ""

        for (let i = 0; i < sorted.length; i++) {
            if (i === 0) {
                parameterString += stringify({query: `${sorted[i][0]}=${sorted[i][1]}`})
            } else {
                parameterString += stringify({query: `&${sorted[i][0]}=${sorted[i][1]}`})
            }
        }
        const fullString = `${requestURL}${parameterString}`.replace(/query=/g, "")
        return crypto.createHmac("sha1", sigKey).update(fullString).digest("base64")
    }

    private readonly oauthHeader = (oauthParams: any, signature: string) => {
        let header = `OAuth `
        for (const [key, value] of Object.entries(oauthParams)) {
            header += `${stringify({query: key})}="${stringify({query: value})}", `
        }
        return header.replace(/query=/g, "").slice(0, -2)
    }

    /*
    const nonce = [...Array(32)].map(() => Math.random().toString(36)[2]).join("")
        const oauthParameters = {
            oauth_consumer_key: this.credentials.consumerKey,
            oauth_nonce: nonce,
            oauth_signature_method: "HMAC-SHA1",
            oauth_timestamp: String(Date.now()),
            oauth_token: this.credentials.accessToken,
            oauth_version: "1.0"
        }
        const allParameters = {...params, ...oauthParameters}
        oauthParams.oauth_signature = signature
        const requestURL = `GET&${stringify({query: endpoint})}&`.replace(/query=/g, "")
        const sigKey = stringify({query: `${this.credentials.consumerSecret}&${this.credentials.accessSecret}`})
        const sig =  await this.generateSignature(allParameters, requestURL, sigKey)
        const oauthHeader = this.oauthHeader(oauthParameters, sig)
    */
}
