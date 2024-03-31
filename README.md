# Jaypie CDK ☃️

AWS CDK utilities for Jaypie

## 📋 Usage

`@jaypie/cdk` is an optional package that should be installed alongside the main `jaypie` package.

### Installation

```bash
npm install jaypie @jaypie/cdk
```

### Example

TODO: Example should include one trivial and possibly one thorough example of using the library

## 📖 Reference

``` javascript
import {
  cfnOutput,
  isValidHostname,
  isValidSubdomain,
  mergeDomain,
  projectTagger,
} from "jaypie";
```

### `cfnOutput`

Creates a CloudFormation output for each key in the output object.

``` javascript
import { CfnOutput } from "aws-cdk-lib";
import { cfnOutput } from "jaypie";

const output = {};
output["key"] = "value";

// ...

cfnOutput({ CfnOutput, output, stack: this });
```

### `isValidHostname`

What it says on the tin. Returns boolean

``` javascript
import { isValidHostname } from "jaypie";

const hostname = "example.com";
const isValid = isValidHostname(hostname);
```

### `isValidSubdomain`

What it says on the tin. Returns boolean

``` javascript
import { isValidSubdomain } from "jaypie";

const subdomain = "sub.example.com";
const isValid = isValidSubdomain(subdomain);
```

### `mergeDomain`

Merges a subdomain with a domain

``` javascript
import { mergeDomain } from "jaypie";

const domain = "example.com";
const subdomain = "sub";
const merged = mergeDomain(subdomain, domain); // "sub.example.com"
```

### `projectTagger`

Tags the stack with stack name and project conventions.

``` javascript
import cdk from "aws-cdk-lib";
import { projectTagger } from "jaypie";

// ...

projectTagger({
  cdk,
  stack,
  stackName,
});
```

Tags:

* buildDate
* buildTime
* commit
* creation
* env
* nonce
* project
* service
* sponsor
* stack
* version

## 📝 Changelog

| Date       | Version | Summary        |
| ---------- | ------- | -------------- |
|  3/30/2024 |   1.0.0 | First complete version |
|  3/30/2024 |   0.0.1 | Initial commit |

## 📜 License

Published by Finlayson Studio. All rights reserved
