import { CalendarDays, ChevronDown, Funnel, Star } from "lucide-react";

const tabClassName =
  "min-h-8 min-w-0 flex-1 rounded-[22px] border border-[#23372e] bg-[#11201b] px-2.5 py-1.5 text-center text-[11px] text-[#c4ccc3] transition-[background] duration-[180ms] hover:border-[#6faf8f] aria-pressed:border-[#649a81] aria-pressed:bg-[linear-gradient(110deg,#50856f,#79b697)] aria-pressed:text-[#f6fff8] aria-pressed:shadow-[inset_0_1px_0_#a0d6b530]";

export function ContentTypeTabs() {
  return (
    <div
      className="flex gap-3.5 sm:max-w-[440px]"
      role="group"
      aria-label="نوع محتوا"
    >
      <button
        className={tabClassName}
        type="button"
        aria-pressed="true"
        aria-disabled="true"
      >
        همه
      </button>
      <button
        className={tabClassName}
        type="button"
        aria-pressed="false"
        aria-disabled="true"
      >
        فیلم‌ها
      </button>
      <button
        className={tabClassName}
        type="button"
        aria-pressed="false"
        aria-disabled="true"
      >
        سریال‌ها
      </button>
    </div>
  );
}

export default function SearchFilters({
  compact = false,
}: {
  compact?: boolean;
}) {
  const labelClassName = `relative flex min-w-0 flex-1 items-center border ${compact ? "rounded-[18px] border-transparent bg-[linear-gradient(110deg,#172d23,#0e1e18)]" : "rounded-xl border-[#263c33] bg-[#101e19]"}`;
  const selectClassName = `w-full min-w-0 cursor-pointer appearance-none border-0 bg-transparent text-ellipsis text-[#e0e5de] [&>option]:bg-[#11221d] ${compact ? "min-h-[34px] py-1.5 pr-3 pl-7 text-[11px]" : "min-h-[42px] py-2 pr-3 pl-[34px] text-[12px]"}`;
  const iconClassName = compact
    ? "hidden"
    : "pointer-events-none absolute left-3 text-[#cbd1c7]";
  const chevronClassName = compact
    ? "pointer-events-none absolute left-2.5 text-[#cbd1c7]"
    : "hidden";
  return (
    <div className={compact ? "mt-[18px] mb-5" : "mt-[26px] lg:mt-0"}>
      {!compact && <h2 className="mb-5 text-[13px] font-semibold">فیلترها</h2>}
      <div
        className={`flex gap-2.5 sm:max-w-[480px] ${compact ? "" : "flex-row-reverse lg:flex-col"}`}
      >
        <label className={labelClassName}>
          <Funnel className={iconClassName} size={15} aria-hidden="true" />
          <select
            className={selectClassName}
            aria-label="ژانر"
            disabled
            defaultValue=""
          >
            <option value="">ژانر</option>
          </select>
          <ChevronDown
            className={chevronClassName}
            size={13}
            aria-hidden="true"
          />
        </label>
        <label className={labelClassName}>
          <CalendarDays
            className={iconClassName}
            size={15}
            aria-hidden="true"
          />
          <select
            className={selectClassName}
            aria-label="سال انتشار"
            disabled
            defaultValue=""
          >
            <option value="">سال</option>
          </select>
          <ChevronDown
            className={chevronClassName}
            size={13}
            aria-hidden="true"
          />
        </label>
        <label
          className={`${labelClassName} ${compact ? "" : "shrink-0 grow-0 basis-12 lg:flex-1"}`}
        >
          <Star
            className={
              compact
                ? "hidden"
                : "pointer-events-none absolute left-[15px] text-[#cbd1c7]"
            }
            size={15}
            aria-hidden="true"
          />
          <select
            className={
              compact
                ? selectClassName
                : "min-h-[42px] w-full min-w-0 cursor-pointer appearance-none border-0 bg-transparent p-0 text-[12px] text-ellipsis text-transparent lg:py-2 lg:pr-3 lg:pl-[34px] lg:text-[#e0e5de] [&>option]:bg-[#11221d] [&>option]:text-[#e0e5de]"
            }
            aria-label="حداقل امتیاز"
            disabled
            defaultValue=""
          >
            <option value="">امتیاز</option>
          </select>
          <ChevronDown
            className={chevronClassName}
            size={13}
            aria-hidden="true"
          />
        </label>
        {compact && (
          <button
            type="button"
            className="grid min-h-[34px] shrink-0 grow-0 basis-10 place-items-center rounded-[14px] border border-[#2a4035] bg-[#193026] text-[#d3ded1] disabled:cursor-default disabled:opacity-60"
            aria-disabled="true"
            aria-label="پاک کردن فیلترها"
          >
            <Funnel size={17} aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
