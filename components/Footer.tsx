import type { NextPage } from 'next';

const Footer: NextPage = () => {
  return (
    <footer className="flex h-24 w-full items-center justify-center border-t mt-16">
      <a
        className="flex items-center justify-center gap-2"
        href="https://github.com/DVitsme/randomfacts"
        target="_blank"
        rel="noopener noreferrer"
      >
        Built By Derrick Valentine
      </a>
    </footer>
  );
};

export default Footer;
