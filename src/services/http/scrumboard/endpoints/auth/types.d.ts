export type LoginRequestPayload = {
    username:string,
    password:string
}

export type RegisterRequestPayload = {
    username:string,
    password:string
    passwordConfirm:string
}

export type RegisterResponseType = {
    data : {
        username : string,
        token: string
    }
}