import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="not-found">
      <p className="eyebrow eyebrow--terracotta">Page not found</p>
      <h1 className="not-found__title">This page doesn't exist.</h1>
      <Link className="btn btn--solid" to="/">
        Return home
      </Link>
    </section>
  );
}
