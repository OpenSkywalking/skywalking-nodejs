# Install nodejs agent

## Installation nodejs module
Add the skyapm-nodejs module as a dependency to your application:
> npm install skyapm-nodejs@latest --save

## Initialization
It’s important that the agent is started before you require any other modules in your Node.js application. and you should
require and start the agent in your application’s main file.

```javascript
require('skyapm-nodejs').start({
    // Service name is showed in sky-walking-ui. Suggestion: set an unique name for each service, one
    // service's nodes share the same code.
    // this value cannot be empty.
    serviceName: 'test',
    // The identifier of the instance
    instanceName: 'test',
    // Collector agent_gRPC/grpc service addresses.
    // default value: localhost:11800
    directServers: 'localhost:11800'
});
```

*NOTE*: If your application is using egg framework. please read the [deploy agent in egg framework](how-to-deploy-agent-in-egg-framework.md).
