import Markdown from 'react-markdown';
import { LinkUnderlined, MarkdownTextStyle } from './styles';

/** Render Markdown translations retrieved with `t.raw(...)`. */
export function MarkdownText({ children }: { children: string }) {
  return (
    <MarkdownTextStyle>
      <Markdown
        components={{
          a: ({ href, children }) => (
            <LinkUnderlined href={href} target="_blank" rel="noopener noreferrer">
              {children}
            </LinkUnderlined>
          ),
        }}
      >
        {children}
      </Markdown>
    </MarkdownTextStyle>
  );
}
