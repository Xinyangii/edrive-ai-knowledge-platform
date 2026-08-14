import assert from "node:assert/strict";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${path}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

async function expectPage(path, patterns) {
  const response = await render(path);
  assert.equal(response.status, 200, `${path} should return 200`);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();
  for (const pattern of patterns) assert.match(html, pattern);
}

test("renders the restructured home page", async () => {
  await expectPage("/", [
    /把 AI 学成/, /业务层/, /数据层/, /模型层/, /应用层/,
    /车辆诊断/, /AI 自主标定/, /控制件声学故障/,
  ]);
});

test("renders the four core knowledge layers", async () => {
  await expectPage("/business", [/业务层/, /车辆诊断/, /AI标定|AI 自主标定/]);
  await expectPage("/data", [/数据层/, /时序数据/, /数据泄漏/]);
  await expectPage("/models", [/模型层/, /Random Forest/, /Bayesian Optimization/]);
  await expectPage("/applications", [/应用层/, /RAG/, /Agent/]);
});

test("renders representative knowledge-detail templates", async () => {
  await expectPage("/models/fft", [/FFT/, /核心原理/, /工程案例/]);
  await expectPage("/models/random-forest", [/Random Forest/, /特征重要性/]);
  await expectPage("/models/bayesian-optimization", [/Bayesian Optimization/, /AI 标定/]);
  await expectPage("/applications/agent", [/Agent/, /Human-in-the-loop/, /LangGraph/]);
});
