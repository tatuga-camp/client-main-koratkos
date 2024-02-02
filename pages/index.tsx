import Image from "next/image";
import { backgroundImageBase64 } from "../data/base64Images";
import { ButtonListAuth } from "../components/ButtonListAuth";
import { Backgroud } from "../components/svgs/Backgroud";

function HomePage() {
  return (
    <div className="flex flex-col bg-fourth-color w-screen h-screen lg:flex-row">
      <div className="bottom-0 absolute lg:hidden right-0 left-0 m-auto z-10">
        <Backgroud />
      </div>
      <div className="w-8/12 h-full relative hidden lg:block">
        <div className="w-full h-full relative z-10  bg-gradient-to-l from-5% to-80% from-fourth-color"></div>
        <Image
          src="https://storage.googleapis.com/koratkos-stroage/public/backgroud-farm.jpg"
          fill
          className="object-cover"
          placeholder="blur"
          blurDataURL={backgroundImageBase64}
          alt="background"
        />
      </div>
      <div className="font-Anuphan bg-transparent gap-4 md:gap-10 w-screen h-screen flex flex-col items-center justify-center">
        <header className="flex flex-col items-center justify-center">
          <section className="flex justify-center items-end gap-2">
            <h2 className="font-bold text-xl text-super-main-color">
              WELCOME TO
            </h2>
            <div className="w-20 h-20 relative">
              <Image src="/favicon.ico" fill alt="icon" />
            </div>
          </section>
          <section className="flex w-11/12 md:w-max flex-col justify-center items-center">
            <h1 className="text-6xl font-extrabold text-main-color">
              Korat KOS
            </h1>

            <span className="text-center font-normal text-main-color tre text-xl leading-6 md:leading-9">
              ระบบสมัครขอรับการตรวจประเมิน มาตรฐานเกษตรอินทรีย์ขั้นพื้นฐาน
            </span>
            <span className="text-center font-medium text-super-main-color  text-xl leading-6">
              จังหวัดนครราชสีมา
            </span>
          </section>
        </header>
        <main className="flex flex-col gap-3">
          <ButtonListAuth />
        </main>
      </div>
    </div>
  );
}

export default HomePage;
