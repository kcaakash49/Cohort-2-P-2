"use server"

import client from "@/db"

export async function signupAction(username: string, password:string){
    try{
        const user = client.user.create({
            data: {
                username, password
            }
        })
        return true
    }catch(e) {
        return false
    }
}