const CDK = {
  ACCOUNT: {
    DEVELOPMENT: "development",
    MANAGEMENT: "management",
    OPERATIONS: "operations",
    PRODUCTION: "production",
    SANDBOX: "sandbox",
    SECURITY: "security",
    STAGE: "stage",
  },
  BUILD: {
    CONFIG: {
      ALL: "all",
      API: "api",
      INFRASTRUCTURE: "infrastructure",
      NONE: "none",
      WEB: "web",
    },
    EPHEMERAL: "ephemeral",
    STATIC: "static",
  },
  CREATION: {
    CDK: "cdk",
    CLOUDFORMATION_TEMPLATE: "template",
    MANUAL: "manual",
  },
  DEFAULT: {
    REGION: "us-east-1",
  },
  DURATION: {
    EXPRESS_API: 30,
    LAMBDA_WORKER: 120,
  },
  ENV: {
    LOCAL: "local",
    MAIN: "main",
    META: "meta",
    PRODUCTION: "production",
    SANDBOX: "sandbox",
  },
  HOST: {
    APEX: "@",
  },
  IMPORT: {
    DATADOG_LOG_FORWARDER: "account-datadog-forwarder",
    DATADOG_ROLE: "account-datadog-role",
    LOG_BUCKET: "account-log-bucket",
    OIDC_PROVIDER: "github-oidc-provider",
  },
  LAMBDA: {
    LOG_RETENTION: 90,
    MEMORY_SIZE: 1024,
  },
  PROJECT: {
    INFRASTRUCTURE: "infrastructure",
  },
  ROLE: {
    API: "api",
    DEPLOY: "deploy",
    HOSTING: "hosting",
    MONITORING: "monitoring",
    NETWORKING: "networking",
    PROCESSING: "processing",
    SECURITY: "security",
    STACK: "stack",
    STORAGE: "storage",
    TOY: "toy",
  },
  SERVICE: {
    DATADOG: "datadog",
    INFRASTRUCTURE: "infrastructure",
    LIBRARIES: "libraries",
    NONE: "none",
    TRACE: "trace",
  },
  TAG: {
    BUILD_DATE: "buildDate",
    BUILD_HEX: "buildHex",
    BUILD_NUMBER: "buildNumber",
    BUILD_TIME: "buildTime",
    BUILD_TYPE: "buildType",
    COMMIT: "commit",
    CREATION: "creation",
    ENV: "env",
    NONCE: "nonce",
    PROJECT: "project",
    ROLE: "role",
    SERVICE: "service",
    SPONSOR: "sponsor",
    STACK: "stack",
    STACK_SHA: "stackSha",
    VENDOR: "vendor",
    VERSION: "version",
  },
  VENDOR: {
    DATADOG: "datadog",
  },
};

module.exports = {
  CDK,
};
