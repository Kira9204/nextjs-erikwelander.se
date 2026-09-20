import { ReactNode } from 'react';

/**
 * Shared rich-text tag handlers for next-intl `t.rich(...)` calls.
 *
 * Usage in messages (JSON):
 *   "MY_KEY": "Some <i>italic</i> and <b>bold</b> text"
 *
 * Usage in components:
 *   {t.rich('MY_KEY', RICH_TEXT_TAGS)}
 *
 * Note: next-intl v4 removed `defaultTranslationValues`, so the tags have to be
 * passed at the call site.
 */
export const RICH_TEXT_TAGS = {
  i: (chunks: ReactNode) => <i>{chunks}</i>,
  em: (chunks: ReactNode) => <em>{chunks}</em>,
  b: (chunks: ReactNode) => <b>{chunks}</b>,
  strong: (chunks: ReactNode) => <strong>{chunks}</strong>,
  u: (chunks: ReactNode) => <u>{chunks}</u>,
  br: () => <br />,
} as const;


