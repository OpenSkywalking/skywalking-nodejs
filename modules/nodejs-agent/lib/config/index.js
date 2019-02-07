/*
 * Licensed to the OpenSkywalking under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const uuid = require("uuid/v4");

/**
 *
 * @constructor
 * @author zhang xin
 */
function AgentConfig() {
    this._serviceName = undefined;
    this._serviceId = undefined;
    this._instanceId = undefined;
    this._directServices = undefined;
    this._instanceUUID = uuid();
};

AgentConfig.prototype.getServiceId = function() {
    return this._serviceId;
};
AgentConfig.prototype.setServiceId = function(applicationId) {
    this._serviceId = applicationId;
};

AgentConfig.prototype.getInstanceId = function() {
    return this._instanceId;
};

AgentConfig.prototype.setInstanceId = function(applicationInstanceId) {
    this._instanceId = applicationInstanceId;
};

AgentConfig.prototype.getServiceName = function() {
    return this._serviceName;
};

AgentConfig.prototype.getDirectServices = function() {
    return this._directServices;
};

AgentConfig.prototype.setDirectServices = function(directServices) {
    this._directServices = directServices;
};


AgentConfig.prototype.instanceUUID = function() {
    return this._instanceUUID;
};

AgentConfig.prototype.initConfig = function(agentOptions) {
    if (!agentOptions.hasOwnProperty("serviceName")) {
        throw new Error("service name cannot be empty");
    }
    this._serviceName = agentOptions.serviceName;

    this._directServices = "localhost:11800";
    if (agentOptions.hasOwnProperty("directServers")) {
        this._directServices = agentOptions.directServers;
    }
};


module.exports = exports = new AgentConfig();
