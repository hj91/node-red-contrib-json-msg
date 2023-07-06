/**

 json-msg.js - Copyright 2023 Harshad Joshi and Bufferstack.IO Analytics Technology LLP, Pune

 Licensed under the GNU General Public License, Version 3.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 https://www.gnu.org/licenses/gpl-3.0.html

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.

 **/




module.exports = function(RED) {
    function JsonMsgNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) {
            if (msg.hasOwnProperty('topic')) {
                node.send({ payload: { [msg.topic]: msg.payload } });
            } else {
                // Check if payload is a JSON string.
                if (typeof msg.payload === 'string') {
                    try {
                        // Attempt to parse payload as JSON.
                        var jsonPayload = JSON.parse(msg.payload);
                        node.send({ payload: jsonPayload });
                    } catch (e) {
                        // If payload cannot be parsed as JSON, then send as {topic:payload}
                        node.send({ payload: { "topic": msg.payload } });
                    }
                } else {
                    // If payload is not a string, send it as a JSON object.
                    node.send({ payload: msg.payload });
                }
            }
        });
    }
    RED.nodes.registerType("json-msg", JsonMsgNode);
}

