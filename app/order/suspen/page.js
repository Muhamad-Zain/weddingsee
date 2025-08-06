import { Suspense } from "react";
import Order from "../page";
export default function OrderClient() {
    return(
        <Suspense fallback={
            <div>Loading ....</div>
        }>
            <Order />
        </Suspense>
    )
}