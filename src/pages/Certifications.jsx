import "../styles/Certifications.css";
import { certificationsData } from "../data/certificationsData";
import { FaAward, FaEye, FaDownload } from "react-icons/fa";

const Certifications = () => {
  return (
    <section className="certifications-section">
      {/* HEADER */}
      <div className="certifications-header">
        <div className="icon">
          <FaAward />
        </div>
        <h2>Certifications</h2>
        <p>
          Professional certifications that validate my expertise and commitment
          to continuous learning
        </p>
      </div>

      {/* GRID */}
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <div className="cert-card" key={index}>
            {/* IMAGE PREVIEW */}
            <div className="cert-image">
              <a
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                title="View Certificate PDF"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                />
              </a>

              <span className="cert-year">{cert.year}</span>
            </div>

            {/* CONTENT */}
            <div className="cert-content">
              <h3>{cert.title}</h3>
              <span className="provider">{cert.provider}</span>
              <p>{cert.description}</p>

              <div className="cert-actions">
                <a
                  href={cert.pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-link"
                >
                  <FaEye /> View PDF
                </a>

                <a
                  href={cert.pdf}
                  download
                  className="download-link"
                >
                  <FaDownload /> Download
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
