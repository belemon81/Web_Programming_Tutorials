import { useParams } from "react-router-dom"

export default function UpdatePage() {
    
    const {id} = useParams();
    
    return <h1>Update Page {id}</h1>
}