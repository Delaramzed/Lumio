function Skeleton({ className = "" }: { className?: string }) {
  return (
    <div
      className={`bg-surface-secondary animate-pulse rounded-md ${className}`}
    />
  );
}
export function MovieCardSkeleton() {
  return (
    <div className="w-48">
      <Skeleton className="h-64 w-full rounded-xl" />

      <div className="mt-3">
        <Skeleton className="h-4 w-32" />

        <div className="mt-2 flex justify-between">
          <Skeleton className="h-3 w-10" />
          <Skeleton className="h-3 w-10" />
        </div>
      </div>
    </div>
  );
}

export function HeroSectionSkeleton() {
  return (
    <section className="relative min-h-125 overflow-hidden rounded-xl">
      <Skeleton className="absolute inset-0 h-full w-full rounded-none" />

      <div className="relative z-10 flex min-h-125 items-end justify-between px-6 pb-10 lg:px-8">
        <div className="flex max-w-lg flex-col gap-3">
          <Skeleton className="h-10 w-56" />
          <Skeleton className="h-4 w-80 max-w-full" />
          <Skeleton className="h-10 w-32 rounded-full" />
        </div>

        <div className="flex flex-col items-end gap-2">
          <Skeleton className="h-6 w-14" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
        <Skeleton className="h-1.5 w-6 rounded-full" />
        <Skeleton className="h-1.5 w-2 rounded-full" />
        <Skeleton className="h-1.5 w-2 rounded-full" />
      </div>
    </section>
  );
}

export function MostPopularSkeleton() {
  return (
    <section className="mt-10">
      <div className="mb-5 flex items-center justify-between">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-6 w-32" />
      </div>

      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        <div className="relative h-64 overflow-hidden rounded-2xl">
          <Skeleton className="h-full w-full rounded-2xl" />

          <div className="absolute inset-x-0 bottom-0 p-3">
            <Skeleton className="h-4 w-28" />

            <div className="mt-2 flex justify-between">
              <Skeleton className="h-3 w-10" />
              <Skeleton className="h-3 w-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
