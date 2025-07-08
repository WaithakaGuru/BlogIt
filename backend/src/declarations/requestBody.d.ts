type UserInfo = {
    id: string
    firstName: string
    lastName: string
    userName: string
}

declare namespace express {
    interface Request{
        body:{
            userData: UserInfo
        }
    }
}

