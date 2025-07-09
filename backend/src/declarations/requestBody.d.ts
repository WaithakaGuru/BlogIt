declare namespace express {
    interface Request{
        body:{
            userToken: string,
            id: string
        }
    }
}

