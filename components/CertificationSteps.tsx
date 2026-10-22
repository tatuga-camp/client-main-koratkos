import { certificationSteps } from "../data/menu";

function CertificationSteps({ className = "" }: { className?: string }) {
  return (
    <section className={`rounded-xl border border-third-color/40 bg-white p-5 ${className}`}>
      <h2 className="font-semibold text-super-main-color">ขั้นตอนการขอรับรองมาตรฐาน KOS</h2>
      <ol className="mt-4">
        {certificationSteps.map((step, index) => (
          <li key={step.title} className="relative flex gap-3 pb-5 last:pb-0">
            {index < certificationSteps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-[13px] top-8 w-px bg-third-color/50"
              />
            )}
            <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-third-color/25 text-sm font-semibold text-super-main-color">
              {index + 1}
            </span>
            <div className="pt-0.5">
              <p className="font-medium leading-snug text-super-main-color">{step.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-super-main-color/80">{step.detail}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export { CertificationSteps };
