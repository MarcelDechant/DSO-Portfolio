import React from "react";
import Link from "@docusaurus/Link";

import styles from "./Imprint.module.css";

const Imprint: React.FC = () => {
  return (
    <main className={styles.main}>
      <div className={styles.mainContent}>
        <Link to="/" className={styles.backLink}>
          ← Back to Portfolio
        </Link>

        <h1 className={styles.h1}>Imprint</h1>

        <p>Information pursuant to § 5 DDG</p>

        <p>
          Marcel Dechant
          <br />
          Germany
        </p>

        <p>
          Email: marcel.dechant@freenet.de
        </p>

        <h2 className={styles.h2}>Disclaimer</h2>

        <p>
          The content of this website has been created with care and is
          intended for general informational purposes. However, no guarantee
          can be given regarding the accuracy, completeness or timeliness of
          the information provided.
        </p>

        <p>
          This website contains links to external third-party websites. I have
          no influence over the content of these websites and therefore cannot
          assume any liability for external content. The respective provider
          or operator of the linked pages is responsible for their content.
        </p>

        <p>
          If any legal violations become known, affected links will be removed
          immediately.
        </p>
      </div>
    </main>
  );
};

export default Imprint;