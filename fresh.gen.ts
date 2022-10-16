// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/api/home.ts";
import * as $1 from "./routes/api/latest.ts";
import * as $2 from "./routes/api/recent_articles.ts";
import * as $3 from "./routes/edit/index.tsx";
import * as $4 from "./routes/index.tsx";
import * as $5 from "./routes/pages/[title].tsx";
import * as $6 from "./routes/signin/index.tsx";
import * as $7 from "./routes/signup/index.tsx";
import * as $$0 from "./islands/Editor.tsx";
import * as $$1 from "./islands/SignIn.tsx";
import * as $$2 from "./islands/SignUp.tsx";

const manifest = {
  routes: {
    "./routes/api/home.ts": $0,
    "./routes/api/latest.ts": $1,
    "./routes/api/recent_articles.ts": $2,
    "./routes/edit/index.tsx": $3,
    "./routes/index.tsx": $4,
    "./routes/pages/[title].tsx": $5,
    "./routes/signin/index.tsx": $6,
    "./routes/signup/index.tsx": $7,
  },
  islands: {
    "./islands/Editor.tsx": $$0,
    "./islands/SignIn.tsx": $$1,
    "./islands/SignUp.tsx": $$2,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
