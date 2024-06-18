import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
export function GET(){
    return Response.json({
        name: "Aakash KC",
        email:"kcaakash@gmail.com"
    })
}

export async function POST(req: NextRequest){
    const body = await req.json()
    console.log(body)
    const user = await client.user.create({
        data:{
            username: body.username,
            password:body.password
        }
    })
        

    return Response.json({
        message:"signup successful",
        userData: user
    })
}