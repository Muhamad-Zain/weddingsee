export const dynamic = "force-dynamic";

import { Suspense } from "react";
import OrderClient from "./OrderClient";

 
export default function page() {
    return(
        <Suspense fallback={
            <div>Loading ....</div>
        }>
            <OrderClient />
        </Suspense>
    )
}