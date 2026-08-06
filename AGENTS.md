# AGENTS.md

Contributor notes for the Medium theme. The README is for people installing it.

## Layout

- `templates/` holds the Twig templates. `partials/base.html.twig` is the shell every other template embeds.
- `src/styles/` is the SCSS source, `src/scripts/` the JS, `src/images/` the images.
- `dist/` holds the compiled CSS and JS and is committed, so the theme works without a build step. Regenerate it after changing anything under `src/`.
- `_demo/pages/` is the sample content the README tells people to copy into `user/pages/`.
- `blueprints.yaml` drives the admin settings form and carries the version GPM reads. `medium.yaml` carries the shipped defaults. Keep the two in step.

## Build

```bash
npm install
bower install
npx gulp styles
npx gulp scripts
```

Gulp tasks: `styles` compiles `src/styles/**/*.scss` through Sass, autoprefixer, and cssnano into `dist/styles/`. `scripts` concatenates and uglifies `src/scripts/**/*.js` into `dist/scripts/`. `images` runs imagemin over `src/images/`. `default` watches styles and scripts.

Sass resolves Foundation and Motion UI from `bower_components/`, which is committed, so `bower install` is only needed if that folder is missing.

## Gotchas

- The gulpfile is written against gulp 3 (`gulp.watch(glob, ['task'])`, tasks with no returned stream), while `package.json` pins gulp 4. The `default` watch task throws under gulp 4 until the tasks are ported to `gulp.series`. The individual `styles` and `scripts` tasks run.
- Bower is deprecated. The dependencies are already vendored, so the honest fix is dropping bower and pulling Foundation from npm.
- The theme class in `medium.php` is named `Haywire`, left over from the theme this was forked from. Grav looks for a class matching the theme name, does not find one, and falls back to the base `Theme` class, so the asset cache busting and the `external` template redirect in that file never run. `partials/base.html.twig` adds the assets directly, which is why the theme still renders.
- Releases are cut as GitHub tags and picked up by the Grav Package Manager under the slug `medium`. Bump `version` in `blueprints.yaml` and add a `CHANGELOG.md` entry in Grav's format, since GPM parses it.
