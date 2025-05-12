import { useParams } from "react-router-dom"

export default function Paramter() {

    const {id} = useParams()

    return <>
             <p>User id is: {id}</p>
            </>
}