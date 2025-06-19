import dbConnect from "@/lib/dbConnect"

export async function GET() {

    const data = await dbConnect("collectionName").find({}).toArray()

    return Response.json( data )
}


export async function POST(req) {


    console.log(req)

    const postedData = await req.json()

    return Response.json({ postedData })
}

