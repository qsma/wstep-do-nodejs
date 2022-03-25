const url = require("url");

const myUrl = new url.URL(
  "http://user:pass@some-domain.com:1234/test-page?param1=x#test"
);

const myParam = myUrl.searchParams.get("param1");

console.log({ myUrl, myParam });

const myParams = new url.URLSearchParams({
  user: "admin",
  query: ["test1", "test2"],
}).toString();

const decodedQs = new url.URLSearchParams("user=admin&query=test1%2Ctest2");

console.log({ myParams, decodedQs });
