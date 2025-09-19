import express from 'express'
import middleware from './middleware'
import { prismaClient } from 'db/client'

const app = express()
app.use(express.json())
app.post('/api/v1/website',middleware, async(req, res) => {
    const userId = req.body.userid;
    const {url} = req.body;
    const data =await prismaClient.website.create({
       data:{
           url:req.body.url,
           userId:userId
       }
    })
    res.json({
        id:data.id
    })
})
app.get('/api/v1/website/status',middleware, async(req, res) => {
    const websiteId = req.query.websiteId as unknown as string;
    const userId = req.query.userId as unknown as string;
    const data =await prismaClient.website.findFirst({
           where:{
            id:websiteId,
            userId
           },
           include:{
            ticks:true
           }
    })


    res.json(data)
})
app.get('/api/v1/websites',middleware, async(req, res) => {
    const userId = req.query.userId as unknown as string;

    const websites =await prismaClient.website.findMany({
        where:{
            userId,
            disabled:false
        },
        include:{
            ticks:true
        }
    })


    res.json({
        websites
    })
})


app.delete('/api/v1/website',middleware, async(req, res) => {
    const userId = req.query.userId as unknown as string;
    const websiteId = req.query.websiteId as unknown as string;
    const website =await prismaClient.website.update({
        where:{
            id:websiteId,
            userId
        },
         data:{
             disabled:true
         }
    })
    res.json({
        message:"website deleted successfully"
    })
})

app.listen(8080);