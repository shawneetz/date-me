import "./HobbyCard.css";
import { truncateHobbyDescription } from "../../utils/hobbyCard";

/**
 * HobbyCard
 * Purpose: Standalone hobby card (not used by the arcade HobbiesSection —
 * the arcade layout renders media inline). Kept for potential reuse.
 */
export default function HobbyCard({ title, description, imageUrl, imageAlt }) {
  const text = truncateHobbyDescription(description);

  return (
    <article className="hobby-card">
      <h3 className="hobby-card-title">{title}</h3>

      <div className="hobby-card-screen">
        {imageUrl ? (
          <img src={imageUrl} alt={imageAlt || title} loading="lazy" />
        ) : (
          <div className="hobby-card-placeholder" aria-hidden="true">
            NO SIGNAL
          </div>
        )}
        <div className="hobby-card-scanlines" aria-hidden="true" />
      </div>

      <div className="hobby-card-body">
        <p className="hobby-card-description">{text}</p>
      </div>
    </article>
  );
}
