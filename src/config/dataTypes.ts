export  type LoginState = {
    username: string,
    password: string
}

export type UserType = {
    username: string | null,
    token: string | null
}


export type Tasks = {
    id: number | null,
    title: string | null,
    upvotes: number | null,
    date: Date | null
}