import Image from "next/image";
import { backgroundImageBase64 } from "../data/base64Images";
import { ButtonListAuth } from "../components/ButtonListAuth";
import { Backgroud } from "../components/svgs/Backgroud";
import Head from "next/head";

function HomePage() {
  return (
    <div className="flex flex-col h-screen justify-center items-center bg-fourth-color lg:flex-row">
      <Head>
        <meta
          property="og:title"
          content=" Korat Organic Standard KOS - ระบบสมัครขอรับการตรวจประเมินมาตรฐานเกษตรอินทรีย์ขั้นพื้นฐาน จังหวัดนครราชสีมา"
        />
        <meta
          property="og:description"
          content="ระบบขอรับรองมาตรฐานเกษตรอินทรีย์ขั้นพื้นฐาน จังหวัดนครราชสีมา Korat Organic Standard KOS "
        />
        <meta
          property="og:image"
          content="https://storage.googleapis.com/koratkos-stroage/public/Image-thumbnail.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://storage.googleapis.com/koratkos-stroage/public/Image-thumbnail.jpg"
        />
        <meta
          name="twitter:image:src"
          content="https://storage.googleapis.com/koratkos-stroage/public/Image-thumbnail.jpg"
        />
        <meta
          name="keywords"
          content={`TaTuga camp, tatugacamp, tatuga camp, English, English camp, camp for 
            learning English, card game, activities in classroom, กิจกรรมค่ายภาษาอังกฤษ,
             การ์ดเกมเพื่อการเรียนรู้, การ์ดเกม, `}
        />
        <meta
          name="description"
          content="ระบบขอรับรองมาตรฐานเกษตรอินทรีย์ขั้นพื้นฐาน จังหวัดนครราชสีมา Korat Organic Standard KOS 
          ม.ราชภัฏโคราช นำขับเคลื่อนเกษตรอินทรีย์ 5 ดี วิถีคนโคราช ยกระดับมาตรฐานเกษตรอินทรีย์ KORAT Organic Standard
           พัฒนาในการขับเคลื่อนเกษตรอินทรีย์5ดีวิถีคนโคราช ผ่านองค์ความรู้และกลไกการเปลี่ยนแปลงกระบวนการทำงานสู่ระบบดิจิทัลอย่างเหมาะสม
           ด้วยระบบสารสนเทศเชิงพื้นที่ GISKOS (Geoinformatics Korat Organic Standard)  ด้วยกระบวนการมีส่วนร่วมและการถ่ายทอดองค์ความรู้ นวัตกรรม 
           สู่องค์กรปกครองส่วนท้องถิ่นและเครือข่าย ให้เกิดกลไกการพัฒนาระบบเศรษฐกิจหมุนเวียน 
           สร้างความเจริญและลดความเหลื่อมล้ำทางสังคมในพื้นที่ตามเป้าหมายการพัฒนาเมืองโคราชน่าอยู่ที่ยั่งยืนต่อไป 
           โดยมีคณะกรรมการขับเคลื่อนเกษตรอินทรีย์ขั้นพื้นฐานจังหวัดนครราชสีมา(KOS) และมหาวิทยาลัยราชภัฏนครราชสีมา 
           รวมถึงหน่วยงานที่เกี่ยวข้องทำหน้าที่คอยหนุนเสริมและกำกับติดตามเพื่อให้บรรลุตามเป้าหมาย 
           จะทำให้เห็นการปฏิบัติงานและการทำงานร่วมกันโดยใช้กระบวนการวิจัยและพัฒนาเพื่อยกระดับการขับเคลื่อนเกษตรอินทรีย์ 5 ดีวิถีคนโคราช 
           สู่กระบวนการปฏิบัติ หรือระบบงานด้านมาตรฐานเกษตรอินทรีย์ขั้นพื้นฐานจังหวัดนครราชสีมา(KOS) ในองค์กรให้มีความทันสมัยด้วยเทคโนโลยีดิจิทัล GISKOS 
           ที่เหมาะสมและมีประสิทธิภาพยิ่งขึ้นและยั่งยืนต่อการพัฒนาพื้นที่จังหวัดนครราชสีมา
          "
        />
        <title>
          Korat Organic Standard KOS - ระบบสมัครขอรับการตรวจประเมิน
          มาตรฐานเกษตรอินทรีย์ขั้นพื้นฐาน จังหวัดนครราชสีมา
        </title>
        <meta
          name="viewport"
          content="width=device-width; initial-scale=1.0;"
        />
        <meta charSet="UTF-8" />
      </Head>
      <div className="bottom-0 absolute lg:hidden right-0 left-0 m-auto z-10">
        <Backgroud />
      </div>
      <div className="w-full h-full relative hidden lg:block">
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
      <div
        className="font-Anuphan lg:mr-20  relative z-20 bg-transparent gap-4 md:gap-10
       flex flex-col items-center justify-center"
      >
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
