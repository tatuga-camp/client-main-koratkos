import { MouseEvent, ReactNode, useEffect, useState } from "react";

type Role = {
  id: string;
  title: string;
  detail: string;
  href: string;
  icon: ReactNode;
  iconTone: string;
};

type RoleGroup = {
  label: string;
  roles: Role[];
};

const farmerRoute = process.env.NEXT_PUBLIC_FARMER_ROUTE as string;
const committeeRoute = process.env.NEXT_PUBLIC_COMMITTEE_ROUTE as string;

// Give control back if the destination app is slow to respond.
const PENDING_TIMEOUT_MS = 8000;

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const groups: RoleGroup[] = [
  {
    label: "สำหรับเกษตรกร",
    roles: [
      {
        id: "farmer-sign-up",
        title: "ลงทะเบียนเกษตรกรใหม่",
        detail: "สร้างบัญชีเพื่อยื่นขอรับการตรวจประเมินครั้งแรก",
        href: `${farmerRoute}/auth/sign-up`,
        iconTone: "bg-main-color text-white",
        icon: (
          <Icon>
            <circle cx="9" cy="8" r="4" />
            <path d="M15 20a6 6 0 0 0-12 0" />
            <path d="M19 8v6M22 11h-6" />
          </Icon>
        ),
      },
      {
        id: "farmer-sign-in",
        title: "เข้าสู่ระบบเกษตรกร",
        detail: "กรอกแบบฟอร์ม KOS และติดตามผลการตรวจประเมิน",
        href: farmerRoute,
        iconTone: "bg-third-color text-super-main-color",
        icon: (
          <Icon>
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <path d="m10 17 5-5-5-5" />
            <path d="M15 12H3" />
          </Icon>
        ),
      },
    ],
  },
  {
    label: "สำหรับผู้ประเมิน",
    roles: [
      {
        id: "committee",
        title: "เข้าสู่ระบบผู้ประเมิน",
        detail: "สำหรับคณะกรรมการและเจ้าหน้าที่ตรวจประเมิน",
        href: committeeRoute,
        iconTone: "bg-secondary-color text-white",
        icon: (
          <Icon>
            <rect x="8" y="2" width="8" height="4" rx="1" />
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            <path d="m9 14 2 2 4-4" />
          </Icon>
        ),
      },
    ],
  },
];

function ButtonListAuth() {
  const [pendingId, setPendingId] = useState<string | null>(null);

  useEffect(() => {
    // Back/forward cache restores the page as it was left, spinner included.
    const handlePageShow = (event: PageTransitionEvent) => {
      if (event.persisted) setPendingId(null);
    };
    window.addEventListener("pageshow", handlePageShow);
    return () => window.removeEventListener("pageshow", handlePageShow);
  }, []);

  useEffect(() => {
    if (!pendingId) return;
    const timer = window.setTimeout(() => setPendingId(null), PENDING_TIMEOUT_MS);
    return () => window.clearTimeout(timer);
  }, [pendingId]);

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    // Opening in a new tab leaves this page usable, so skip the loading state.
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (pendingId) {
      event.preventDefault();
      return;
    }
    setPendingId(id);
  };

  return (
    <nav aria-label="เลือกการเข้าใช้งาน" className="flex flex-col gap-6">
      {groups.map((group) => (
        <section key={group.label}>
          <h2 className="mb-2 text-sm font-medium text-super-main-color/80">{group.label}</h2>
          <ul className="divide-y divide-third-color/40 overflow-hidden rounded-xl border border-third-color/40 bg-white">
            {group.roles.map((role) => {
              const isPending = pendingId === role.id;
              const isLocked = pendingId !== null && !isPending;
              return (
                <li key={role.id}>
                  <a
                    href={role.href}
                    onClick={(event) => handleClick(event, role.id)}
                    aria-busy={isPending}
                    aria-disabled={isLocked}
                    className={`group flex items-center gap-4 px-4 py-4 transition-colors hover:bg-fourth-color
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset
                      focus-visible:ring-main-color active:bg-third-color/15 sm:px-5
                      ${isLocked ? "pointer-events-none opacity-50" : ""}`}
                  >
                    <span
                      className={`flex size-11 shrink-0 items-center justify-center rounded-lg ${role.iconTone}`}
                    >
                      {role.icon}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[17px] font-semibold leading-snug text-super-main-color">
                        {role.title}
                      </span>
                      <span className="mt-0.5 block text-sm leading-relaxed text-super-main-color/80">
                        {isPending ? "กำลังเปิดหน้าระบบ กรุณารอสักครู่" : role.detail}
                      </span>
                    </span>
                    {isPending ? (
                      <svg
                        className="size-5 shrink-0 text-main-color motion-safe:animate-spin"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.5" />
                        <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                      </svg>
                    ) : (
                      <svg
                        className="size-5 shrink-0 text-super-main-color/80 transition-transform group-hover:translate-x-0.5 group-hover:text-super-main-color motion-reduce:transition-none"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="m9 18 6-6-6-6" />
                      </svg>
                    )}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
      <p className="sr-only" aria-live="polite">
        {pendingId ? "กำลังเปิดหน้าระบบ กรุณารอสักครู่" : ""}
      </p>
    </nav>
  );
}

export { ButtonListAuth };
