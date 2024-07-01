module.exports = {
  main: [
    "index",
    {
      type: "category",
      label: "Quick Start",
      collapsible: false,
      items: [
        "quickstart/cloud",
        "quickstart/running-locally",
        "quickstart/api",
        "quickstart/storefront",
      ],
    },
    { type: "html", value: "<hr/>" },
    {
      type: "category",
      label: "Why Saleor",
      items: [
        "overview/why-saleor/headless",
        "overview/why-saleor/composable",
        "overview/why-saleor/extensibility",
        "overview/why-saleor/open-source",
        "overview/why-saleor/graphql",
        "overview/why-saleor/saas-self-host",
        "overview/why-saleor/scalable",
        "overview/why-saleor/multi-market",
      ],
    },
    { type: "html", value: "<hr/>" },
    {
      type: "category",
      label: "GraphQL",
      items: [
        {
          type: "autogenerated",
          dirName: "api-usage",
        },
      ],
    },
    { type: "ref", id: "developer/index" },
    { type: "ref", id: "developer/app-store/overview" },
    { type: "ref", id: "api-reference/api-reference" },
    { type: "html", value: "<hr/>" },
    {
      type: "category",
      label: "Saleor Cloud",
      items: ["restricting-api-access"],
    },
    {
      type: "category",
      label: "Extending Saleor",
      items: [
        "developer/extending/overview",
        require("./sidebars/apps-sidebar"),
        {
          type: "category",
          label: "Webhooks",
          items: [
            "developer/extending/webhooks/overview",
            "developer/extending/webhooks/creating",
            "developer/extending/webhooks/subscription-webhook-payloads",
            "developer/extending/webhooks/payload-signature",
            "developer/extending/webhooks/asynchronous-events",
            {
              type: "category",
              label: "Synchronous Events",
              items: [
                "developer/extending/webhooks/synchronous-events/overview",
                "developer/extending/webhooks/synchronous-events/payment",
                "developer/extending/webhooks/synchronous-events/shipping",
                "developer/extending/webhooks/synchronous-events/tax",
                "developer/extending/webhooks/synchronous-events/transaction",
                "developer/extending/webhooks/synchronous-events/stored-payment-method",
              ],
            },
            "developer/extending/webhooks/ip-addresses",
          ],
        },
        // {
        //   type: "category",
        //   label: "Plugins",
        //   items: [
        //     "developer/extending/plugins/overview",
        //     "developer/extending/payment-gateways",
        //     {
        //       type: "category",
        //       label: "Internal APIs",
        //       items: [
        //         "developer/extending/api/errors",
        //         "developer/extending/api/events",
        //         "developer/extending/api/sorters",
        //         "developer/extending/api/i18n",
        //       ],
        //     },
        //   ],
        // },
        "developer/extending/apollo-federation",
      ],
    },
    {
      type: "category",
      label: "Self-hosting",
      items: [
        "setup/docker-compose",
        "setup/docker-images",
        "setup/configuration",
        "setup/read-replicas",
        "setup/windows",
        {
          type: "category",
          label: "Development",
          items: [
            "developer/running-saleor/debugging-emails",
            "developer/running-saleor/exposing-instance",
          ],
        },
        {
          type: "category",
          label: "Deploying",
          items: [
            "setup/deploy-do",
            "setup/deploy-kubernetes",
            "setup/deploy-linux",
          ],
        },
        {
          type: "category",
          label: "Monitoring",
          items: ["setup/monitoring-jaeger", "setup/monitoring-sentry"],
        },
        {
          type: "category",
          label: "Storing Files",
          items: ["setup/media-gcs", "setup/media-s3"],
        },
        {
          type: "category",
          label: "Upgrade Guides",
          items: [
            "setup/upgrading",
            {
              type: "autogenerated",
              dirName: "upgrade-guides",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "Community",
      items: [
        "developer/community/contributing",
        "developer/community/zero-downtime-migrations",
        "developer/community/faq",
        "developer/community/support",
      ],
    },
  ],
  concepts: [
    "developer/index",
    { type: "html", value: "<hr/>" },
    {
      type: "category",
      label: "Channels",
      collapsible: false,
      items: [
        "developer/channels/overview",
        "developer/channels/configuration",
        "developer/channels/lifecycle",
        "developer/channels/troubleshooting",
        "developer/channels/api",
      ],
    },
    {
      type: "category",
      label: "Products",
      collapsible: false,
      items: [
        "developer/products/overview",
        "developer/products/configuration",
        "developer/products/lifecycle",
        "developer/products/troubleshooting",
        "developer/products/cookbook",
        "developer/products/api",
      ],
    },
    {
      type: "category",
      label: "Attributes",
      collapsible: false,
      items: [
        "developer/attributes/overview",
        "developer/attributes/configuration",
        "developer/attributes/lifecycle",
        "developer/attributes/api",
      ],
    },
    {
      type: "category",
      label: "Checkout and Orders",
      collapsible: false,
      items: [
        "developer/checkout/overview",
        "developer/checkout/lines",
        "developer/checkout/stock",
        "developer/checkout/address",
        "developer/checkout/problems",
        "developer/checkout/finalizing",
        "developer/checkout/order-to-checkout",
        "developer/checkout/order-status",
        "developer/checkout/payment-status",
        "developer/checkout/order-expiration",
      ],
    },
    {
      type: "category",
      label: "Checkout and Orders",
      collapsible: false,
      items: [
        "developer/checkout/overview",
        "developer/checkout/lines",
        "developer/checkout/stock",
        "developer/checkout/address",
        "developer/checkout/problems",
        "developer/checkout/finalizing",
        "developer/checkout/order-to-checkout",
        "developer/checkout/order-status",
        "developer/checkout/payment-status",
        "developer/checkout/order-expiration",
      ],
    },
    "developer/payments",
    "developer/stock-allocation",
    {
      type: "category",
      label: "Discounts",
      collapsible: false,
      items: [
        "developer/discounts/overview",
        "developer/discounts/promotions",
        "developer/discounts/vouchers",
        "developer/discounts/sales",
      ],
    },
    "developer/gift-cards",
    "developer/address",
    "developer/users",
    "developer/permissions",
    "developer/taxes",
    "developer/thumbnails",
    {
      type: "category",
      label: "Importing and Exporting Data",
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Importing Data",
          collapsible: false,
          items: [
            {
              type: "autogenerated",
              dirName: "developer/bulks",
            },
          ],
        },
        {
          type: "category",
          label: "Exporting Data",
          collapsible: false,
          items: [
            {
              type: "autogenerated",
              dirName: "developer/export",
            },
          ],
        },
      ],
    },
  ],
  appStore: [
    "developer/app-store/overview",
    { type: "html", value: "<hr/>" },
    {
      type: "category",
      label: "Adyen",
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "developer/app-store/apps/adyen",
        },
      ],
    },
    {
      type: "category",
      label: "Avalara AvaTax",
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "developer/app-store/apps/avatax",
        },
      ],
    },
    "developer/app-store/apps/crm",
    {
      type: "category",
      label: "Emails and Messages",
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "developer/app-store/apps/emails-and-messages",
        },
      ],
    },
    "developer/app-store/apps/cms",
    "developer/app-store/apps/invoices",
    "developer/app-store/apps/product-feed",
    "developer/app-store/apps/segment",
    "developer/app-store/apps/search",
    {
      type: "category",
      label: "SMTP",
      collapsible: false,
      items: [
        {
          type: "autogenerated",
          dirName: "developer/app-store/apps/smtp",
        },
      ],
    },
    { type: "html", value: "<hr/>" },
    {
      type: "category",
      label: "Legacy Plugins",
      items: [
        "developer/app-store/legacy-plugins/admin-emails",
        "developer/app-store/legacy-plugins/adyen",
        "developer/app-store/legacy-plugins/dummy-credit-card",
        "developer/app-store/legacy-plugins/stripe",
        "developer/app-store/legacy-plugins/oidc",
        "developer/app-store/legacy-plugins/np-atobarai",
        "developer/app-store/legacy-plugins/user-emails",
      ],
    },
  ],
  api: [
    {
      type: "autogenerated",
      dirName: "api-reference",
    },
  ],
};
