import React from "react";
import Link from "@docusaurus/Link";

import styles from "./Privacy.module.css";

const Privacy: React.FC = () => {
    return (
        <main className={styles.main}>
            <div className={styles.mainContent}>
                <Link to="/" className={styles.backLink}>
                    ← Back to Portfolio
                </Link>
                <h1 className={styles.h1}>Privacy Policy</h1>
                <p>
                    Last updated: August 2026
                </p>

                <h2 className={styles.h2}>1. General Information</h2>
                <p>
                    The protection of your personal data is important to me. This website
                    can generally be used without providing personal data. If personal
                    data is collected, this is done in accordance with the applicable data
                    protection regulations, in particular the General Data Protection
                    Regulation (GDPR).
                </p>

                <h2 className={styles.h2}>2. Data Controller</h2>
                <p>Controller responsible for data processing on this website:</p>
                <p>
                    Marcel Dechant
                    <br />
                    Email: marcel.dechant@freenet.de
                </p>

                <h2 className={styles.h2}>3. Hosting</h2>
                <p>
                    This website is hosted by an external hosting provider. The hosting
                    provider may process technical data such as IP addresses, access times
                    and server log files to ensure the secure and reliable operation of the
                    website.
                </p>
                <p>
                    The processing of this data is carried out solely for the purpose of
                    maintaining the functionality, security and stability of the website.
                </p>

                <h2 className={styles.h2}>4. Access Data and Server Log Files</h2>
                <p>
                    When visiting this website, the hosting provider automatically
                    collects and stores information in so-called server log files. This
                    includes:
                </p>
                <ul>
                    <li>IP address</li>
                    <li>Date and time of the request</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Referrer URL</li>
                </ul>
                <p>
                    This data is not merged with other data sources and is used solely for
                    technical monitoring and security purposes.
                </p>

                <h2 className={styles.h2}>5. Contact via Email</h2>
                <p>
                    If you contact me via email, the transmitted data (e.g. email address
                    and message content) will be stored in order to process your request.
                    This data will only be processed for handling your request and will not be
                    shared with third parties unless there is a legal obligation to do so.
                </p>

                <h2 className={styles.h2}>6. External Links</h2>
                <p>
                    This website contains links to external websites (e.g. GitHub or
                    LinkedIn). When clicking on such links, you leave this website. I have
                    no influence over the data processing on external websites and assume
                    no responsibility for their content, security or privacy practices.
                </p>

                <h2 className={styles.h2}>7. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Request information about your stored personal data</li>
                    <li>Request correction or deletion of your data</li>
                    <li>Restrict processing of your data</li>
                    <li>Object to data processing</li>
                    <li>Data portability</li>
                </ul>

                <h2 className={styles.h2}>8. Right to Lodge a Complaint</h2>
                <p>
                    You have the right to lodge a complaint with a supervisory authority
                    if you believe that the processing of your personal data violates data
                    protection law.
                </p>

                <h2 className={styles.h2}>9. Changes to this Privacy Policy</h2>
                <p>
                    I reserve the right to update this privacy policy to reflect changes
                    in legal requirements or website functionality.
                </p>
            </div>
        </main>
    );
};

export default Privacy;