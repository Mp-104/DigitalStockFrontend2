import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>

        <h1 className="text-tes-50">Home</h1>

        <Link href={"/test"} >To test</Link>
        
      </div>
    </>
  );
}
