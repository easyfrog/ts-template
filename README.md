# typescript library project template

use rollup and terser to bundle in a single umd file

```bash
# clone to local 
git clone git@github.com:easyfrog/ts-template.git PROJECT-NAME
# start to watch ts files's change
npm start
```

# src folder

place ts files in src folder

# dist folder

* `js`: js folder to hold all js files generate by typescript
* `bound.esm.js`: auto generate when ts file changed, and load by `index.html`
* `bound.umd.js`: generate by `npm run build:rel`