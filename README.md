# node-red-contrib-json-msg

## Introduction

We're excited to introduce `node-red-contrib-json-msg`, a unique Node-RED node that enhances data consistency, facilitates downstream processing, and aids in debugging within your Node-RED flows.

## What does it do?

This node transforms any incoming message into a specific JSON format. If the incoming message has a `topic`, the output will be `{topic: payload}`. If there's no `topic` and the payload is a JSON string, it converts the string into a JSON object and outputs it as is. If the payload is not a JSON string, it sends the payload as `{topic: payload}`.

## Examples

1. For an incoming message like `{topic: 'temperature', payload: '25'}`, this node will transform it to `{payload: {temperature: '25'}}`.

2. For a message like `{payload: '{"temp":25, "unit":"C"}'}` (notice no `topic` here, and the payload is a JSON string), it will parse the JSON string and output `{payload: {temp: 25, unit: "C"}}`.

3. If the payload isn't a JSON string, for a message like `{payload: 'Some message'}`, the output will be `{payload: {topic: 'Some message'}}`.

## Summary

This node offers an elegant solution for maintaining consistency across your flows and ensuring that your messages are formatted correctly for downstream operations. It can handle both string and object payloads, and ensures they are correctly transformed into a standard format.

Happy coding! 🚀

## Keywords
NodeRED, OpenSource, JSON, DataTransformation, Coding

