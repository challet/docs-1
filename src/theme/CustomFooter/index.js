import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { useColorMode, useThemeConfig } from "@docusaurus/theme-common";
import ColorModeToggle from "@theme/ColorModeToggle";
import {
  FaXTwitter,
  FaDiscord,
  FaYoutube,
  FaHandshake,
  FaGithub,
  FaRocket,
} from "react-icons/fa6";
import styles from "./styles.module.css";

const links = [
  {
    html: (
      <>
        Questions?{" "}
        <Link to="https://tableland.xyz/discord">
          Join our Discord & contact us.
        </Link>
      </>
    ),
    icon: <FaDiscord size={16} />,
  },
  {
    html: (
      <>
        Watch our{" "}
        <Link to="https://www.youtube.com/playlist?list=PLAc0xDyQDZbqTNM3lejUkVdiTprS2Gjob">
          developer tutorials.
        </Link>
      </>
    ),
    icon: <FaYoutube size={16} />,
  },
  {
    html: (
      <>
        Want to help? <Link to="/contribute">Contribute.</Link>
      </>
    ),
    icon: <FaHandshake size={16} />,
  },
  {
    html: (
      <>
        Follow us on <Link to="https://twitter.com/tableland"> X/Twitter.</Link>
      </>
    ),
    icon: <FaXTwitter size={16} />,
  },
  {
    html: (
      <>
        Or check out our <Link to="https://tableland.xyz"> main site.</Link>
      </>
    ),
    icon: <FaRocket size={16} />,
  },
];

export default function CustomFooter() {
  const disabled = useThemeConfig().colorMode.disableSwitch;
  const { colorMode, setColorMode } = useColorMode();
  if (disabled) {
    return null;
  }

  return (
    <>
      <footer className="footer">
        <hr />
        <div className="container container-fluid">
          <div className="row">
            <div className="col col--6">
              <div className="row footer__links">
                <div className="col padding-left--none">
                  <div className="footer__title"></div>
                  <ul className="footer__items clean-list">
                    {links.map((item, idx) => (
                      <li
                        key={idx}
                        className={clsx("footer__item", styles.footerIconLeft)}
                      >
                        {item.icon}
                        <span>{item.html}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col col--6">
              <div className="row footer__links">
                <div className="col padding-left--none">
                  <div className="footer__title"></div>
                  <ul className="footer__items clean-list">
                    <li className="footer__item">{/* <NewsletterForm /> */}</li>
                  </ul>
                </div>
                <div className="col col--2 padding-left--none">
                  <div className="footer__title"></div>
                  <ul
                    className={clsx(
                      "footer__items clean-list",
                      styles.footerIconsRight
                    )}
                  >
                    <li className="footer__item">
                      <ColorModeToggle
                        className={styles.colorModeToggle}
                        value={colorMode}
                        onChange={setColorMode}
                      />
                    </li>
                    <li className="footer__item">
                      <div>
                        <Link
                          to="https://github.com/tablelandnetwork"
                          className={clsx("clean-btn", styles.footerIconRight)}
                        >
                          <FaGithub size={18} />
                        </Link>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
