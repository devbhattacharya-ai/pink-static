import Image from "next/image";
import { LOOKBOOK } from "@/lib/products";

export default function EditorialTiles() {
  return (
    <ul className="editorial-tiles lookbook-strip">
      {LOOKBOOK.map((frame, i) => (
        <li key={frame.id}>
          <figure className="lookbook-card editorial-tile">
            <div className="lookbook-frame">
              <Image
                src={frame.src}
                alt=""
                width={640}
                height={800}
                className="editorial-photo"
                sizes="(max-width: 700px) 70vw, 240px"
              />
              <span className="tile-index" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <figcaption>{frame.label}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}
