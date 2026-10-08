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

MainLayout selects CatalogLayout for Series and Search. Other pages keep the
existing Header and Sidebar. The design is mobile-first; wider viewports use
more grid columns and a separate search filter panel.

All movie information is sample display data. Some poster variants, the profile
photo, and the exact logo differ from the reference because original assets
are unavailable. Artwork sources and font license are recorded with the assets.

Business logic is deferred to next week's task.

