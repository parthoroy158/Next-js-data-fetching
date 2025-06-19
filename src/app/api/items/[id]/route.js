import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb"

export async function GET(req, { params }) {
    const id = await params
    const oneData = await dbConnect('collectionName').findOne({ _id: new ObjectId(id) })
    return Response.json(oneData)
}

export async function DELETE(req, { params }) {
    const id = await params
    const oneData = await dbConnect('collectionName').deleteOne({ _id: new ObjectId(id) })
    return Response.json(oneData)
}

export async function PATCH(req, { params }) {
    const id = await params
    const filter = { _id: new ObjectId(id) }
    const postedData = await req.json()
    const updateData = await dbConnect('collectionName').updateOne(filter, { $set: { ...postedData } }, { upsert: true })
    return Response.json(updateData)
}

