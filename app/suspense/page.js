import { Suspense } from "react";
import Order from "../order/page";

export const dynamic = "force-dynamic";
 
export default function page() {
    return(
        <Suspense fallback={
            <div>Loading ....</div>
        }>
            <Order />
        </Suspense>
    )
}