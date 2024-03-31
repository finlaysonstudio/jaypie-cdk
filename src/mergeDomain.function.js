import { CDK, ConfigurationError, log } from "@jaypie/core";

function mergeDomain(subDomain, hostedZone) {
  if (!hostedZone) {
    throw new ConfigurationError("hostedZone is required");
  }
  if (!subDomain) {
    log
      .lib({ lib: "@jaypie/cdk" })
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

export default mergeDomain;
