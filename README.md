# Medium

![Medium](screenshot.jpg)

Medium is a simple and modern blogging theme based on Medium.com's design language, built for Grav CMS.

### Key Features
* Built using Foundation 6.
* Responsive and mobile friendly.
* Lightweight and minimal for optimal performance.
* Beautiful, legible typography.
* Super clean and modern design.
* Support for Disqus comments.
* Google Analytics built-in.
* Twitter integration.

# Installation
Installing the Medium theme can be done in one of two ways. Our GPM (Grav Package Manager) installation method enables you to quickly and easily install the theme with a simple terminal command, while the manual method enables you to do so via a zip file.

### GPM Installation (Recommended)
The simplest way to install this theme is  the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm) through your system's Terminal (also called the command line).  From the root of your Grav install type:

    bin/gpm install medium

This will install the Medium theme into your `/user/themes` directory within Grav. Its files can be found under `/your/site/grav/user/themes/medium`.

### Manual Installation

To install this theme, just download the zip version of this repository and unzip it under `/your/site/grav/user/themes`. Then, rename the folder to `medium`. You can find these files either on [GitHub](https://github.com/mblode/grav-theme-medium) or via [GetGrav.org](http://getgrav.org/downloads/themes).

You should now have all the theme files under

    /your/site/grav/user/themes/medium

### GPM Update

The simplest way to update this theme is via the [Grav Package Manager (GPM)](http://learn.getgrav.org/advanced/grav-gpm). You can do this with this by navigating to the root directory of your Grav install using your system's Terminal (also called command line) and typing the following:

    bin/gpm update medium

# Setup

If you want to set Medium as the default theme, you can do so by following these steps:

* Navigate to `/your/site/grav/user/config`.
* Open the **system.yaml** file.
* Change the `theme:` setting to `theme: medium`.
* Save your changes.
* Clear the Grav cache. The simplest way to do this is by going to the root Grav directory in Terminal and typing `bin/grav clear-cache`.

### Pages Structure
To get your blog up and running, copy the `pages` folder from  `/your/site/grav/user/themes/medium/_demo` and replace it with `/your/site/grav/user/pages`. This will help set-up a basic structure of your website using the templates.

### Configuration

The Medium theme has a few simple options that help you configure the theme (`medium.yaml`):

```
enabled: true
default_lang: en
infinite_scroll: true
analytics: UA-YOURCODE
social:
    twitter: @getgrav
```

In order to configure Medium, you should copy the theme's `medium.yaml` file into a file of your own: `user/config/themes/medium.yaml` and make your modifications there.

# Other information

### Editing the Theme
1. In the terminal: `cd /your/site/grav/user/themes/medium`.
1. Install NPM dependencies: `npm install`.
2. Install Bower dependencies: `bower install`.
3. Run Gulp: `gulp`.
4. You can edit the SCSS, JS and Images files in the `src` folder.
5. You can edit the Twig templates in `templates`.

### Supported plugins
* [Pagination](https://github.com/getgrav/grav-plugin-pagination)
* [Archives](
https://github.com/getgrav/grav-plugin-archives)
* [Random](
https://github.com/getgrav/grav-plugin-random)
* [SimpleSearch](
https://github.com/getgrav/grav-plugin-simplesearch)
* [Taxonomy List](
  https://github.com/getgrav/grav-plugin-taxonomylist)

### Contributing

Pull requests are the way to go.

### Creators

**Matthew Blode**
- <https://twitter.com/mblode>
- <https://github.com/mblode>
- <http://codepen.io/mblode>

### License
MIT © [Matthew Blode](http://mblode.github.io)
