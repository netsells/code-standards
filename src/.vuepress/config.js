import { path } from "@vuepress/utils";
import { tocPlugin } from "@vuepress/plugin-toc";
import { defineUserConfig } from "vuepress";
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { searchPlugin } from "@vuepress/plugin-search";
import { defaultTheme } from "@vuepress/theme-default";

export default defineUserConfig({
  title: "Netsells Code Standards",

  dest: "docs",

  base: process.env.NETLIFY ? "/" : "/code-standards/",

  theme: defaultTheme({
    repo: "https://github.com/netsells/code-standards",
    editLinks: true,
    editLinkText: "Edit this page on GitHub",

    lastUpdated: "Last Updated",

    logo: "/images/netsells-logo.png",

    navbar: [
      {
        text: "Sections",
        children: [
          "/general/README.md",
          "/frontend/README.md",
          "/backend/README.md",
          "/ios/README.md",
          "/android/README.md",
          "/flutter/README.md",
          "/dotNet/README.md",
        ],
      },
      {
        text: "Netsells",
        link: "https://netsells.co.uk",
      },
    ],

    sidebar: [
      {
        text: "General",
        children: [
          {
            text: "Introduction",
            link: "/general/README.md",
          },
          "/general/git.md",
          "/general/pull-requests.md",
        ],
      },
      {
        text: "Frontend",
        children: [
          {
            text: "Introduction",
            link: "/frontend/README.md",
          },
          "/frontend/html.md",
          "/frontend/css.md",
          "/frontend/javascript.md",
          "/frontend/vue.md",
          "/frontend/accessibility.md",
          "/frontend/storybook.md",
          "/frontend/performance.md",
          {
            text: "Recommended Packages",
            link: "/frontend/recommended-packages.md",
          },
          {
            text: "Linting",
            link: "/frontend/linting/README.md",
            children: [
              "/frontend/linting/eslint/README.md",
              "/frontend/linting/stylelint/README.md",
            ],
          },
          {
            text: "Testing",
            link: "/frontend/testing/README.md",
            children: [
              "/frontend/testing/unit-testing.md",
              "/frontend/testing/visual-regression-testing.md",
            ],
          },
          "/frontend/automated-workflows.md",
          "/frontend/required-qa.md",
        ],
      },
      {
        text: "Backend",
        children: [
          {
            text: "Introduction",
            link: "/backend/README.md",
          },
          "/backend/general.md",
          "/backend/apis.md",
          "/backend/php.md",
          "/backend/laravel.md",
          "/backend/hatchly.md",
          {
            text: "Recommended Packages",
            link: "/backend/recommended-packages.md",
          },
        ],
      },
      {
        text: "Mobile",
        children: [
          "/mobile/pull-requests.md",
          "/flutter/project-setup.md",
          "/flutter/multiple-firebase-environments.md",
          "/flutter/linting-rules.md",
          "/flutter/testing.md",
          "/flutter/naming-widgets.md",
          "/flutter/state-management.md",
          "/flutter/monarch.md",
          "/flutter/third-party-packages.md",
          "/flutter/recommended-packages.md",
          "/flutter/codesigning.md",
          "/flutter/security-practices.md",
          "/flutter/continuous-integration.md",
          "/flutter/continuous-delivery.md",
          "/flutter/crash-reporting.md",
          {
            text: "Legacy Flutter Projects",
            collapsable: true,
            children: [
              "/flutter/legacy/architecture.md",
              "/flutter/legacy/handling-errors.md",
              "/flutter/legacy/localization.md",
              "/flutter/legacy/state-management.md",
            ],
          },
        ],
      },
      {
        text: "DotNet",
        children: [
          {
            text: "Introduction",
            link: "/dotNet/README.md",
          },
          "/dotNet/c-sharp.md",
          "/dotNet/general-guidelines.md",
          {
            text: "Recommended Packages",
            link: "/dotNet/recommended-packages.md",
          },
        ],
      },
    ],
  }),

  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@/, path.resolve(__dirname, "../../")),
    },
  },

  configureWebpack(config, isServer) {
    if (!isServer && process.env.NODE_ENV === "production") {
      config.output.filename = "assets/js/[name].[contenthash:8].js";
    }
  },

  plugins: [
    // Not currently working
    //googleAnalyticsPlugin({
    //    id: 'UA-49744331-5',
    //}),
    //
    registerComponentsPlugin({
      components: {
        CodeHighlight: path.resolve(
          __dirname,
          "./components/CodeHighlight.vue"
        ),
        Spoiler: path.resolve(__dirname, "./components/Spoiler.vue"),
      },
    }),

    // Not currently working
    //searchPlugin({
    // options
    //}),

    // Not currently working
    //tocPlugin({
    //    // options
    //}),
  ],
});
