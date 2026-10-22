import Image from "next/image";
import { backgroundImageBase64 } from "../data/base64Images";
import { ButtonListAuth } from "../components/ButtonListAuth";
import { CertificationSteps } from "../components/CertificationSteps";
import Head from "next/head";
import { sponsors } from "../data/menu";

function HomePage() {
  return (
    <div className="min-h-screen lg:grid lg:grid-cols-2 xl:grid-cols-[640px_minmax(0,1fr)]">
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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
      </Head>

      <div className="flex min-h-screen flex-col">
        <header className="flex items-center gap-3 border-b border-third-color/40 bg-white px-5 py-3 sm:px-8 lg:px-12">
          <Image
            src="/logo/KORATOrganicStandard.png"
            width={40}
            height={40}
            alt=""
            priority
            className="size-10 rounded-full"
          />
          <div className="leading-tight">
            <p className="font-bold text-main-color">Korat KOS</p>
            <p className="text-xs text-super-main-color/80">Korat Organic Standard</p>
          </div>
        </header>

        <main className="flex flex-1 flex-col justify-center px-5 py-10 sm:px-8 lg:px-12">
          <div className="w-full max-w-[520px]">
            <h1 className="text-[28px] font-semibold leading-[1.35] text-main-color sm:text-[34px] sm:leading-[1.3]">
              ระบบสมัครขอรับการตรวจประเมิน
              <span className="sm:block">มาตรฐานเกษตรอินทรีย์ขั้นพื้นฐาน</span>
            </h1>
            <p className="mt-2 text-lg font-medium text-super-main-color">จังหวัดนครราชสีมา</p>

            <div className="mt-8">
              <ButtonListAuth />
            </div>

            <CertificationSteps className="mt-8 lg:hidden" />
          </div>
        </main>

        <footer className="border-t border-third-color/40 px-5 py-6 sm:px-8 lg:px-12">
          <p className="text-sm font-medium text-super-main-color/80">หน่วยงานสนับสนุน</p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {sponsors.map((sponsor) => (
              <li key={sponsor.url}>
                <Image
                  src={sponsor.url}
                  width={40}
                  height={40}
                  alt={sponsor.title}
                  title={sponsor.title}
                  className="size-10 rounded-full bg-white object-contain ring-1 ring-third-color/40"
                />
              </li>
            ))}
          </ul>
          <div className="mt-5 flex items-center gap-3 text-sm text-super-main-color/80">
            <span>พัฒนาและดูแลระบบโดย</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tatugacamp.com"
              className="overflow-hidden rounded-md ring-1 ring-third-color/40 transition-opacity hover:opacity-80
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-main-color"
            >
              <Image
                alt="Tatuga Camp"
                src="/logo/tatugacamp.jpg"
                width={78}
                height={32}
                className="h-8 w-[78px] object-cover"
              />
            </a>
          </div>
        </footer>
      </div>

      <aside className="hidden p-3 lg:sticky lg:top-0 lg:block lg:h-screen">
        <div className="relative h-full overflow-hidden rounded-2xl bg-main-color/20">
          <Image
            src="https://storage.googleapis.com/koratkos-stroage/public/backgroud-farm.jpg"
            fill
            sizes="(min-width: 1280px) calc(100vw - 640px), 50vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL={backgroundImageBase64}
            alt=""
          />
          <CertificationSteps className="absolute bottom-6 left-6 right-6 max-w-sm shadow-xl shadow-super-main-color/20" />
        </div>
      </aside>
    </div>
  );
}

export default HomePage;
