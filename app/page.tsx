import Image from "next/image";
import Link from "next/link";
import CustomLink from "./_component/CustomLink";

export default function Home() {
  return (
    <>
      <div>

        <h1 className="text-tes-50">Home</h1>
        <Image src={"/collection-electronic-devices-including-laptop-phone-ipod_1065421-12202.avif"} alt=""
        width={250}
        height={250}></Image>

        <Link href={"/test"} >To test</Link>
        <CustomLink url={"/test"} text={"test"} ></CustomLink>
        
      </div>
    </>
  );
}
