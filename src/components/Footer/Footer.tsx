import { Link } from "react-router-dom";

type LinkItem = {
  label: string;
  href: string;
  external?: boolean;
  ariaLabel?: string;
};

const legalLinks: LinkItem[] = [
  {
    label: "contact",
    href: "https://blank",
  },
  {
    label: "terms",
    href: "https://blank",
  },
  {
    label: "privacy",
    href: "https://blank",
  },
  {
    label: "accessibility",
    href: "https://blank",
  },
  {
    label: "cookies",
    href: "https://blank",
  },
  {
    label: "libro de reclamaciones",
    href: "/libro-reclamaciones",
  },
];

function FooterLink({
  href,
  label,
  external = false,
  ariaLabel,
}: LinkItem) {

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {label}
      </a>
    );
  }

  return (
    <Link
      to={href}
      aria-label={ariaLabel}
    >
      {label}
    </Link>
  );
}

import "./Footer.css";

export default function Footer() {
  return (
    <footer id="colophon" className="site-footer">
    <div className="site-footer__main theme-dark">

      <div className="site-footer__top">

        <div className="site-footer__brand">
          <img src="/assets/smiley.gif" alt="Smiley animado" loading="lazy" decoding="async" width="200" height="200" style={{ color: "transparent" }}/>
          <h2 className="site-footer__title caps dot-array">maboroshi</h2>
        </div>
      </div>

      <ul id="menu-footer-legal" className="footer-menu">
        {legalLinks.map((item) => (
          <li key={item.label} className="menu-item">
            <FooterLink {...item} />
          </li>
        ))}
      </ul>

      <div className="footer__social-links">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <svg className="footer__social-logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
            <path d="M303 205.05a93.64 93.64 0 0 1 48.13 13 96.54 96.54 0 0 1 35.16 35.16 95.79 95.79 0 0 1 0 96.26 96.54 96.54 0 0 1-35.16 35.16 95.79 95.79 0 0 1-96.26 0 96.59 96.59 0 0 1-35.15-35.16 95.72 95.72 0 0 1 0-96.26 96.59 96.59 0 0 1 35.1-35.21A93.66 93.66 0 0 1 303 205.05zm0 159q25.95 0 44.37-18.42t18.41-44.36q0-25.95-18.41-44.36T303 238.53q-25.95 0-44.36 18.42t-18.42 44.36q0 25.95 18.42 44.36T303 364.09zm123-163.19a26.14 26.14 0 0 1-7.11 15.91 20.41 20.41 0 0 1-15.49 6.69 22.49 22.49 0 1 1 22.6-22.6zm63.62 22.6q.83 23.44.83 77.85t-1.25 78.26q-1.26 23.87-7.12 41.44a98 98 0 0 1-59.43 59.43q-17.58 5.87-41.43 7.11T303 488.81q-54.4 0-78.26-1.26t-41.43-7.95a89.12 89.12 0 0 1-36.42-22.18 97.68 97.68 0 0 1-23-36.41q-5.85-17.58-7.11-41.44t-1.26-78.26q0-54.4 1.26-78.26t7.11-41.44a98 98 0 0 1 59.44-59.43q17.56-5.85 41.43-7.11t78.24-1.26q54.42 0 78.27 1.26t41.43 7.11a98 98 0 0 1 59.43 59.43q5.82 17.58 7.49 41.85zM449.44 411.8q5-14.24 6.69-45.2.84-18.42.84-51.9v-26.78q0-34.32-.84-51.9-1.67-31.82-6.69-45.2-10.05-25.95-36-36-13.38-5-45.2-6.7-18.4-.84-51.89-.84h-26.79q-33.48 0-51.9.84-31 1.68-45.2 6.7-26 10-36 36-5 13.4-6.7 45.2-.83 18.42-.83 51.9v26.78q0 33.48.83 51.9 1.68 31 6.7 45.2 10.88 25.95 36 36 14.23 5 45.2 6.7 18.42.84 51.9.84h26.79q34.32 0 51.89-.84 31.81-1.68 45.2-6.7 25.95-10.88 36-36z"></path>
          </svg>
        </a>
        
        <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <svg className="footer__social-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
            <path d="M27.51 13.435a5.258 5.258 0 0 1-.455-.264 6.389 6.389 0 0 1-1.167-.992c-.87-.995-1.195-2.005-1.314-2.712h.004c-.1-.587-.058-.967-.052-.967h-3.963v15.324c0 .206 0 .41-.009.61l-.003.075c0 .011 0 .023-.003.035v.008a3.366 3.366 0 0 1-1.693 2.671c-.5.284-1.065.434-1.64.433-1.846 0-3.343-1.506-3.343-3.365 0-1.86 1.497-3.365 3.343-3.365.35 0 .697.054 1.03.163l.004-4.035a7.36 7.36 0 0 0-5.672 1.659 7.777 7.777 0 0 0-1.697 2.092c-.168.289-.799 1.448-.875 3.329-.048 1.068.272 2.174.425 2.631v.01c.096.269.469 1.188 1.076 1.962a8.05 8.05 0 0 0 1.717 1.62v-.01l.01.01c1.918 1.303 4.045 1.218 4.045 1.218.368-.015 1.602 0 3.003-.664 1.553-.736 2.438-1.833 2.438-1.833a7.618 7.618 0 0 0 1.329-2.208c.358-.942.478-2.073.478-2.525v-8.13c.048.029.688.453.688.453s.923.59 2.362.976c1.033.274 2.424.332 2.424.332V14.04c-.488.053-1.477-.1-2.49-.606Z" fill="#fff"></path>
          </svg>
        </a>
        
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <svg className="footer__social-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40">
            <path d="M27.189 8.75h3.833l-8.375 9.572L32.5 31.348h-7.715l-6.042-7.9-6.913 7.9H7.993l8.957-10.239L7.5 8.75h7.91l5.462 7.22 6.317-7.22Zm-1.346 20.303h2.125L14.256 10.924h-2.28l13.867 18.129Z"></path>
          </svg>
        </a>
      
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <svg className="footer__social-logo" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
            <path d="M482.9 209.18q4.8 18.62 6.87 56.53l.68 34.46-.68 34.47q-2.07 38.61-6.87 57.22a48.18 48.18 0 0 1-12.36 20.68 47.55 47.55 0 0 1-21.3 12.4q-17.85 4.83-83.79 6.9l-62.5.69-62.5-.69q-65.92-2.07-83.79-6.9a47.51 47.51 0 0 1-21.29-12.4A48.18 48.18 0 0 1 123 391.86q-4.82-18.62-6.87-57.22l-.69-34.47q0-15.17.69-34.46 2.06-37.92 6.87-56.53a48.09 48.09 0 0 1 33.65-33.78q17.86-4.82 83.79-6.89l62.5-.69 62.5.69q65.94 2.07 83.79 6.89a48.08 48.08 0 0 1 33.66 33.78zM264.49 356.7l98.22-56.53-98.22-55.83z"></path>
          </svg>
        </a>

        <a href="https://discord.gg" target="_blank" rel="noopener noreferrer">
          <svg className="footer__social-logo footer__social-logo--discord" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36">
            <path d="M107.7 8.07A105.15 105.15 0 0 0 81.47 0a72.06 72.06 0 0 0-3.36 6.83 97.68 97.68 0 0 0-29.11 0A72.37 72.37 0 0 0 45.64 0a105.89 105.89 0 0 0-26.25 8.09C2.79 32.65-1.71 56.6.54 80.21a105.73 105.73 0 0 0 32.17 16.15 77.7 77.7 0 0 0 6.89-11.11 68.42 68.42 0 0 1-10.85-5.18c.91-.66 1.8-1.34 2.66-2a75.57 75.57 0 0 0 64.32 0c.87.71 1.76 1.39 2.66 2a68.68 68.68 0 0 1-10.87 5.19 77 77 0 0 0 6.89 11.1 105.25 105.25 0 0 0 32.19-16.14c2.64-27.38-4.51-51.11-18.9-72.15ZM42.45 65.69C36.18 65.69 31 60 31 53s5-12.74 11.43-12.74S54 46 53.89 53s-5.05 12.69-11.44 12.69Zm42.24 0C78.41 65.69 73.25 60 73.25 53s5-12.74 11.44-12.74S96.23 46 96.12 53s-5.04 12.69-11.43 12.69Z"></path>
          </svg>
        </a>
        
      </div>

      <p className="site-footer__copyright">
        © 2026 Maboroshi. All Rights Reserved.
      </p>

    </div>
  </footer>
  );
}