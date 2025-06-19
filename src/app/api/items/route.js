import dbConnect from "@/lib/dbConnect"


export async function GET() {

    const data = await dbConnect('collectionName').find({}).toArray()

    return Response.json(data)
}

export async function POST(req) {
    const postData = await req.json()
    const data = await dbConnect('collectionName').insertOne(postData)
    return Response.json(data)
}
