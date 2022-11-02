# typescript library project template

use rollup and terser to bundle in a single umd file

```bash
# start to watch ts files's change
tsc -w
```

# src

ts files in src folder

# dis

* js: js folder to hold all js files generate by typescript
* bound.esm.js: auto generate when ts file changed, and load by `index.html`
* bound.umd.js: generate by `npm run build:rel`