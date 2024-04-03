const { CDK } = require("./constants.js");
const { ConfigurationError } = require("@knowdev/errors");
const { moduleLogger } = require("@knowdev/log");

function mergeDomain(subDomain, hostedZone) {
  if (!hostedZone) {
    throw new ConfigurationError("hostedZone is required");
  }
  if (!subDomain) {
    moduleLogger
      .with({ lib: "@jaypie/cdk" })
      .warn(
        "subDomain not passed, returning hostedZone. Pass CDK.HOST.APEX to surpress this message",
      );
    return hostedZone;
  }
  if (subDomain === CDK.HOST.APEX) {
    return hostedZone;
  }
  return `${subDomain}.${hostedZone}`;
}

module.exports = mergeDomain;
