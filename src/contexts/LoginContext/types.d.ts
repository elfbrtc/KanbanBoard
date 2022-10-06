export type StateType = {
    isLoggedIn:boolean,
    token:string
    username:string
}
export type ContextType = {
    login : any,
    logout : any,
    state: StateType
}