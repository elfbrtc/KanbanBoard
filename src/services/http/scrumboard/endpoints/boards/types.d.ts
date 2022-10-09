export type BoardsRequestPayload = {
    id:number,
    title:string
}

export type BoardsResponseType = {
    data : {
        id: number,
        title: string,
        ownerId: number,
        updatedAt:string,
        createdAt: string
    }
}

