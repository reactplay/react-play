import { lazy, Suspense } from "react";
import "./banner.css";

const LazyBanner = lazy(() =>
  process.env.REACT_APP_ACTIVITIES_ON
    ? import("common/activities/hackathon/HackathonBanner")
    : import("common/defaultBanner/DefaultBanner")
);

export default function Banner() {
  return (
    <Suspense fallback={<div className="home-banner-fallback" />}>
      <LazyBanner />
    </Suspense>
  );
}
