'use client'
import { useParams } from "next/navigation"
import PageUser from "../coppy-link/page"

export default function id() {
    const {id} = useParams()
    const idParams = id ? id : ''
return(
    <section>
        <PageUser id={idParams} />
    </section>
)    
}