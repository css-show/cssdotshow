import { createRequestHandler } from "@css-show/remix-aliyunfc";
import * as build from "@remix-run/dev/server-build";

module.exports.handler = createRequestHandler({ build, mode: process.env.NODE_ENV });
