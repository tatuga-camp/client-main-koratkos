import Link from "next/link";
import { Farmer } from "./svgs/Farmer";
import Swal from "sweetalert2";

function ButtonListAuth() {
  const handleShowLoading = () => {
    Swal.fire({
      title: "กำลังโหลด...",
      html: "กรุณารอสักครู่",
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
      },
    });
  };
  return (
    <>
      <Link
        onClick={handleShowLoading}
        href={`${process.env.NEXT_PUBLIC_FARMER_ROUTE as string}/auth/sign-up`}
        className="flex justify-center hover:scale-110 transition  ring-super-main-color
        duration-100 active:ring-2  bg-main-color btn-hoever p-2 py-1 rounded-full items-center gap-2"
      >
        <Farmer />
        <span className="text-white font-medium">
          ลงทะเบียน สำหรับเกษตรกรใหม่
        </span>
      </Link>

      <Link
        onClick={handleShowLoading}
        href={`${process.env.NEXT_PUBLIC_FARMER_ROUTE as string}`}
        className="flex justify-center min-h-11 hover:scale-110 transition ring-super-main-color 
        duration-100 active:ring-2 bg-third-color p-2 py-1 rounded-full items-center gap-2"
      >
        <span className="text-white font-medium">
          เข้าสู่ระบบ สำหรับเกษตรกร
        </span>
      </Link>
      <Link
        href={process.env.NEXT_PUBLIC_COMMITTEE_ROUTE as string}
        onClick={handleShowLoading}
        className="flex justify-center relative z-20 min-h-11 hover:scale-110 transition 
        duration-100 active:ring-2 ring-super-main-color  bg-secondary-color p-2 py-1 rounded-full items-center gap-2"
      >
        <span className="text-white font-medium">สำหรับผู้ประเมิน</span>
      </Link>
    </>
  );
}

export { ButtonListAuth };
