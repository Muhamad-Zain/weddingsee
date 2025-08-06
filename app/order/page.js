import { Suspense } from "react";
import OrderClient from "./orderClient";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <OrderClient />
    </Suspense>
  );
}
