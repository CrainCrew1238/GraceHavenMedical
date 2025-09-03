'use client';

import { useId, useMemo, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import styles from './memberships.module.css';

type Plan = {
  planName: string;
  planText?: string;
  planPrice?: string;
  autoRenewNotice?: string;
  bookingLink?: string;
  getStarted?: string;
  listItems?: string[] | unknown; // tolerate odd typings coming in
};

interface MembershipBlockProps {
  plan: Plan | { [key: string]: any };
}

export default function MembershipBlock(props: MembershipBlockProps) {
  const plan = props.plan as Plan;
  const [open, setOpen] = useState(false);
  const uid = useId();

  // Normalize/guard listItems
  const listItems: string[] = useMemo(() => {
    const raw = plan.listItems as unknown;
    if (Array.isArray(raw)) return raw.map(String);
    // Some sources provide a CSV or object – try to coerce
    if (typeof raw === 'string') return raw.split('|').map(s => s.trim()).filter(Boolean);
    return [];
  }, [plan.listItems]);

  const visible = listItems.slice(0, 3);
  const hidden = listItems.slice(3);
  const hasToggle = hidden.length > 0;

  return (
      <Col lg="6" className="p-2">
        <div className={styles.membershipBlock}>
          <h3 className={styles.planName}>{plan.planName}</h3>

          {plan.planText && <p className={styles.planText}>{plan.planText}</p>}

          <hr className={styles.hr} />

          {plan.planPrice && <h3 className={styles.planPrice}>{plan.planPrice}</h3>}
          {plan.autoRenewNotice && <p className={styles.autoRenew}>{plan.autoRenewNotice}</p>}

          {plan.bookingLink && (
              <Button
                  className={`${styles.cta} w-100`}
                  href={plan.bookingLink}
              >
                {(plan.getStarted || 'Get Started').toUpperCase()}
              </Button>
          )}

          <hr className={styles.hr} />

          <ul className={styles.planList} id={`plan-list-${uid}`}>
            {visible.map((li, idx) => (
                <li key={`visible-${idx}`} className={styles.planListItem}>
                  <p>{li}</p>
                </li>
            ))}

            {/* Collapsible extra items */}
            <Collapse in={open}>
              <div>
                {hidden.map((li, idx) => (
                    <li key={`hidden-${idx}`} className={`${styles.planListItem} ${styles.planListItemHidden}`}>
                      <p>{li}</p>
                    </li>
                ))}
              </div>
            </Collapse>
          </ul>

          {hasToggle && (
              <Button
                  type="button"
                  className={styles.toggle}
                  aria-expanded={open}
                  aria-controls={`plan-list-${uid}`}
                  onClick={() => setOpen(v => !v)}
              >
    <span className={styles.toggleLabel}>
      {open ? 'Hide details' : 'See all benefits'}
    </span>
                <svg
                    className={styles.chevron}
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    focusable="false"
                >
                  <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Button>
          )}
        </div>
      </Col>
  );
}
