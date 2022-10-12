import { lazy, Suspense } from "react";
import "./banner.css";

const LazyBanner = lazy(() =>
  true
    ? import("common/activities/hackathon/HackathonBanner")
    : import("common/defaultBanner/DefaultBanner")
);

export default function Banner() {
  return (
    <Suspense fallback={<div className="home_banner_fallback" />}>
      <LazyBanner />
    </Suspense>
  );
}
