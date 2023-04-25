import cors from "cors"
import express,{Request, Response} from "express"

const app = express()

app.use(express.json())
app.use(cors())

app.get("/",(req: Request,res: Response)=> {
    res.send("welcome to typescript")
})

app.listen(3000,()=> {
    console.log("listening on port 3000")
})