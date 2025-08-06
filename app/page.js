import Image from "next/image";
import Customer from "./page1/page";
import Theme from "./theme/page";

export default function Home() {
  return (
    <div>
      <Customer />
      <Theme />
    </div>
  );
}
