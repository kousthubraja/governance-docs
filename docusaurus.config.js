// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Newrl Docs",
  tagline: "Newrl Documentation",
  url: "https://docs.realms.today",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "newrlfoundation", // Usually your GitHub org/user name.
  projectName: "newrl-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "/",
          editUrl:
            "https://github.com/newrlfoundation/newrl-doc/tree/master",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Newrl",
        logo: {
          alt: "Newrl",
          src: "https://newrl.net/img/newrl_logo.png",
        },
        items: [
          {
            type: "doc",
            docId: "About/welcome",
            position: "left",
            label: "Docs",
          },
          {
            href: "https://github.com/newrlfoundation/newrl-docs/",
            label: "Docs GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.com/invite/bVh5d3UYwf",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/newrl_media",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/newrlfoundation/newrl-docs",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Newrl Foundation`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
