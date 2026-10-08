import { CalendarDays, ChevronDown, Funnel, Star } from "lucide-react";

export function ContentTypeTabs() {
  return (
    <div className="catalog-tabs" role="group" aria-label="نوع محتوا">
      <button type="button" aria-pressed="true" aria-disabled="true">
        همه
      </button>
      <button type="button" aria-pressed="false" aria-disabled="true">
        فیلم‌ها
      </button>
      <button type="button" aria-pressed="false" aria-disabled="true">
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
  return (
    <div
      className={
        compact ? "catalog-filters catalog-filters-compact" : "catalog-filters"
      }
    >
      {!compact && <h2>فیلترها</h2>}
      <div className="catalog-filter-fields">
        <label className="catalog-select">
          <Funnel size={15} aria-hidden="true" />
          <select aria-label="ژانر" disabled defaultValue="">
            <option value="">ژانر</option>
          </select>
          <ChevronDown size={13} aria-hidden="true" />
        </label>
        <label className="catalog-select">
          <CalendarDays size={15} aria-hidden="true" />
          <select aria-label="سال انتشار" disabled defaultValue="">
            <option value="">سال</option>
          </select>
          <ChevronDown size={13} aria-hidden="true" />
        </label>
        <label className="catalog-select catalog-rating-select">
          <Star size={15} aria-hidden="true" />
          <select aria-label="حداقل امتیاز" disabled defaultValue="">
            <option value="">امتیاز</option>
          </select>
          <ChevronDown size={13} aria-hidden="true" />
        </label>
        {compact && (
          <button
            type="button"
            className="catalog-filter-reset"
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
