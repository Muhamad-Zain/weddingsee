import { Suspense } from "react";
import OrderClient from "./OrderClient";

export const dynamic = "force-dynamic";
 
export default function page() {
    return(
        <Suspense fallback={
            <div>Loading ....</div>
        }>
            <OrderClient />
        </Suspense>
    )
}