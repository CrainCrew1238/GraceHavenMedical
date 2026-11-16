import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import styles from './service-page.module.css';

type Detail = { title: string; text: string };

type ServicePageProps = {
  eyebrow: string;
  title: string;
  introduction: string;
  focusTitle: string;
  focusItems: Detail[];
  technologyTitle: string;
  technologyItems: string[];
  closing: string;
};

export default function ServicePage({
  eyebrow,
  title,
  introduction,
  focusTitle,
  focusItems,
  technologyTitle,
  technologyItems,
  closing,
}: ServicePageProps) {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Container>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1>{title}</h1>
          <p className={styles.lede}>{introduction}</p>
          <Link className={styles.primaryButton} href="https://www.vagaro.com/gracehavenmedical/book-now">
            Book a consultation
          </Link>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>Designed around you</p>
            <h2>{focusTitle}</h2>
          </div>
          <div className={styles.cardGrid}>
            {focusItems.map((item) => (
              <article className={styles.card} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className={`${styles.section} ${styles.technologySection}`}>
        <Container>
          <div className={styles.sectionHeading}>
            <p className={styles.kicker}>Our technology</p>
            <h2>{technologyTitle}</h2>
          </div>
          <div className={styles.techList}>
            {technologyItems.map((item) => <span key={item}>{item}</span>)}
          </div>
        </Container>
      </section>

      <section className={styles.closing}>
        <Container>
          <h2>Let&apos;s find the right next step.</h2>
          <p>{closing}</p>
          <Link className={styles.secondaryButton} href="/contact-us">Contact Grace Haven Medical</Link>
        </Container>
      </section>
    </div>
  );
}
