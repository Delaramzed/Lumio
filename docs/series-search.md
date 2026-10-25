# Series and Search — UI only

- Branch: `feature/series-search`.
- Routes: `/series` and `/search`.
- Components: `components/series` and `components/search`.
- Static display data: `lib/catalog.ts`; types: `types/catalog.ts`.
- Styles: `pages/catalog.css`, with a locally bundled Persian font.
- Icons: Lucide React.

This week's scope is presentation only. Series displays nine fixed cards.
Search displays the fixed text "dune" and three sample results matching the
reference layout. Search input is read-only; filters and action buttons are
inactive. There is no search, filtering, reset behavior, URL parameter handling,
API integration, or business state. Page navigation remains available for review.

MainLayout selects CatalogLayout for Series and Search. Both layouts now use
the shared `components/layout/Sidebar.tsx`, styled independently in `Sidebar.css`.
The sidebar uses the same five links and active-page styling throughout the app.
It appears at the bottom on mobile and on the left on desktop, without a logo.
Search retains its standalone mobile screen using `<Sidebar hideOnMobile />`.
Other pages keep their existing Header and page content.

To reuse it, render `<Sidebar />` within a React Router and add `sidebar-layout`
to the layout wrapper. Reserve `var(--sidebar-width)` on the left of the content
and `var(--sidebar-mobile-space)` below it on mobile. These shared dimensions
track the sidebar's responsive sizes. Do not duplicate navigation in page files.

All movie information is sample display data. Some poster variants, the profile
photo, and the exact logo differ from the reference because original assets
are unavailable. Artwork sources and font license are recorded with the assets.

Business logic is deferred to next week's task.

