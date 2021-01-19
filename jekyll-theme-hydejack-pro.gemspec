# -*- encoding: utf-8 -*-
# stub: jekyll-theme-hydejack-pro 8.1.1 ruby lib

Gem::Specification.new do |s|
  s.name = "jekyll-theme-hydejack-pro".freeze
  s.version = "8.1.1"

  s.required_rubygems_version = Gem::Requirement.new(">= 0".freeze) if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib".freeze]
  s.authors = ["Florian Klampfer".freeze]
  s.date = "2018-09-14"
  s.email = ["mail@qwtel.com".freeze]
  s.files = ["LICENSE.md".freeze, "_includes/body/analytics.html".freeze, "_includes/body/comments.html".freeze, "_includes/body/footer.html".freeze, "_includes/body/index.html".freeze, "_includes/body/main.html".freeze, "_includes/body/menu.html".freeze, "_includes/body/nav.html".freeze, "_includes/body/scripts.html".freeze, "_includes/body/sidebar.html".freeze, "_includes/components/about.html".freeze, "_includes/components/author.html".freeze, "_includes/components/avatar-tag.html".freeze, "_includes/components/from-to.html".freeze, "_includes/components/hy-img.html".freeze, "_includes/components/link.html".freeze, "_includes/components/message.html".freeze, "_includes/components/pagination.html".freeze, "_includes/components/post-list-item.html".freeze, "_includes/components/post.html".freeze, "_includes/components/related-posts.html".freeze, "_includes/components/social-list-item.html".freeze, "_includes/components/social.html".freeze, "_includes/components/tag-list.html".freeze, "_includes/head/feed-tag.html".freeze, "_includes/head/index.html".freeze, "_includes/head/links.html".freeze, "_includes/head/meta.html".freeze, "_includes/head/page-style.html".freeze, "_includes/head/scripts.html".freeze, "_includes/head/seo-fallback.html".freeze, "_includes/head/seo-tag.html".freeze, "_includes/head/styles.html".freeze, "_includes/header.txt".freeze, "_includes/icon-github.html".freeze, "_includes/my-body.html".freeze, "_includes/my-comments.html".freeze, "_includes/my-head.html".freeze, "_includes/my-newsletter.html".freeze, "_includes/my-scripts.html".freeze, "_includes/pro/newsletter.html".freeze, "_includes/pro/other-projects.html".freeze, "_includes/pro/project-card.html".freeze, "_includes/pro/random-posts.html".freeze, "_includes/pro/resume/awards.html".freeze, "_includes/pro/resume/basics.html".freeze, "_includes/pro/resume/education.html".freeze, "_includes/pro/resume/header.html".freeze, "_includes/pro/resume/interests.html".freeze, "_includes/pro/resume/languages.html".freeze, "_includes/pro/resume/profiles.html".freeze, "_includes/pro/resume/publications.html".freeze, "_includes/pro/resume/references.html".freeze, "_includes/pro/resume/skills.html".freeze, "_includes/pro/resume/volunteer.html".freeze, "_includes/pro/resume/work.html".freeze, "_includes/scripts/cssrelpreload.min.js".freeze, "_includes/scripts/load-js.js".freeze, "_includes/scripts/load-js.min.js".freeze, "_includes/scripts/loadCSS.min.js".freeze, "_includes/smart-url.txt".freeze, "_includes/styles/inline.scss".freeze, "_includes/styles/pro/projects.scss".freeze, "_includes/styles/pro/resume.scss".freeze, "_includes/styles/style.scss".freeze, "_includes/templates/animation.html".freeze, "_includes/templates/back.html".freeze, "_includes/templates/error.html".freeze, "_includes/templates/index.html".freeze, "_includes/templates/loading.html".freeze, "_includes/templates/permalink.html".freeze, "_includes/templates/pro/cookies-banner.html".freeze, "_includes/templates/pro/dark-mode.html".freeze, "_layouts/about.html".freeze, "_layouts/base.html".freeze, "_layouts/blog.html".freeze, "_layouts/compress.html".freeze, "_layouts/default.html".freeze, "_layouts/home.html".freeze, "_layouts/list.html".freeze, "_layouts/not-found.html".freeze, "_layouts/page.html".freeze, "_layouts/post.html".freeze, "_layouts/project.html".freeze, "_layouts/projects.html".freeze, "_layouts/redirect.html".freeze, "_layouts/resume.html".freeze, "_layouts/welcome.html".freeze, "_sass/_mixins.scss".freeze, "_sass/_reboot-mod.scss".freeze, "_sass/_spinner.scss".freeze, "_sass/_syntax.scss".freeze, "_sass/_variables.scss".freeze, "_sass/hydejack/__inline__/_avatar.scss".freeze, "_sass/hydejack/__inline__/_base.scss".freeze, "_sass/hydejack/__inline__/_break-layout.scss".freeze, "_sass/hydejack/__inline__/_content.scss".freeze, "_sass/hydejack/__inline__/_footer.scss".freeze, "_sass/hydejack/__inline__/_images.scss".freeze, "_sass/hydejack/__inline__/_katex.scss".freeze, "_sass/hydejack/__inline__/_links.scss".freeze, "_sass/hydejack/__inline__/_mark-external.scss".freeze, "_sass/hydejack/__inline__/_menu.scss".freeze, "_sass/hydejack/__inline__/_sidebar.scss".freeze, "_sass/hydejack/__inline__/_social.scss".freeze, "_sass/hydejack/__inline__/_utilities.scss".freeze, "_sass/hydejack/__link__/_avatar.scss".freeze, "_sass/hydejack/__link__/_base.scss".freeze, "_sass/hydejack/__link__/_break-layout.scss".freeze, "_sass/hydejack/__link__/_content.scss".freeze, "_sass/hydejack/__link__/_footer.scss".freeze, "_sass/hydejack/__link__/_images.scss".freeze, "_sass/hydejack/__link__/_katex.scss".freeze, "_sass/hydejack/__link__/_links.scss".freeze, "_sass/hydejack/__link__/_mark-external.scss".freeze, "_sass/hydejack/__link__/_menu.scss".freeze, "_sass/hydejack/__link__/_sidebar.scss".freeze, "_sass/hydejack/__link__/_social.scss".freeze, "_sass/hydejack/__link__/_utilities.scss".freeze, "_sass/hydejack/_avatar.pre.scss".freeze, "_sass/hydejack/_base.pre.scss".freeze, "_sass/hydejack/_break-layout.pre.scss".freeze, "_sass/hydejack/_content.pre.scss".freeze, "_sass/hydejack/_footer.pre.scss".freeze, "_sass/hydejack/_images.pre.scss".freeze, "_sass/hydejack/_katex.pre.scss".freeze, "_sass/hydejack/_links.pre.scss".freeze, "_sass/hydejack/_mark-external.pre.scss".freeze, "_sass/hydejack/_menu.pre.scss".freeze, "_sass/hydejack/_sidebar.pre.scss".freeze, "_sass/hydejack/_social.pre.scss".freeze, "_sass/hydejack/_utilities.pre.scss".freeze, "_sass/my-inline.scss".freeze, "_sass/my-style.scss".freeze, "_sass/my-variables.scss".freeze, "_sass/pooleparty/__inline__/_base.scss".freeze, "_sass/pooleparty/__inline__/_code.scss".freeze, "_sass/pooleparty/__inline__/_footer.scss".freeze, "_sass/pooleparty/__inline__/_footnotes.scss".freeze, "_sass/pooleparty/__inline__/_message.scss".freeze, "_sass/pooleparty/__inline__/_pagination.scss".freeze, "_sass/pooleparty/__inline__/_posts.scss".freeze, "_sass/pooleparty/__inline__/_read-more.scss".freeze, "_sass/pooleparty/__inline__/_related.scss".freeze, "_sass/pooleparty/__inline__/_table.scss".freeze, "_sass/pooleparty/__inline__/_type.scss".freeze, "_sass/pooleparty/__link__/_base.scss".freeze, "_sass/pooleparty/__link__/_code.scss".freeze, "_sass/pooleparty/__link__/_footer.scss".freeze, "_sass/pooleparty/__link__/_footnotes.scss".freeze, "_sass/pooleparty/__link__/_message.scss".freeze, "_sass/pooleparty/__link__/_pagination.scss".freeze, "_sass/pooleparty/__link__/_posts.scss".freeze, "_sass/pooleparty/__link__/_read-more.scss".freeze, "_sass/pooleparty/__link__/_related.scss".freeze, "_sass/pooleparty/__link__/_table.scss".freeze, "_sass/pooleparty/__link__/_type.scss".freeze, "_sass/pooleparty/_base.pre.scss".freeze, "_sass/pooleparty/_code.pre.scss".freeze, "_sass/pooleparty/_footer.pre.scss".freeze, "_sass/pooleparty/_footnotes.pre.scss".freeze, "_sass/pooleparty/_message.pre.scss".freeze, "_sass/pooleparty/_pagination.pre.scss".freeze, "_sass/pooleparty/_posts.pre.scss".freeze, "_sass/pooleparty/_read-more.pre.scss".freeze, "_sass/pooleparty/_related.pre.scss".freeze, "_sass/pooleparty/_table.pre.scss".freeze, "_sass/pooleparty/_type.pre.scss".freeze, "_sass/pro/_dark-mode.scss".freeze, "_sass/pro/_message-newsletter.scss".freeze, "_sass/pro/_projects.scss".freeze, "_sass/pro/_resume.scss".freeze, "_sass/pro/_syntax-dark.scss".freeze, "_sass/pro/bootstrap-mod/_buttons.scss".freeze, "_sass/pro/bootstrap-mod/_forms.scss".freeze, "_sass/pro/bootstrap-mod/_functions.scss".freeze, "_sass/pro/bootstrap-mod/_grid.scss".freeze, "_sass/pro/bootstrap-mod/_input-group.scss".freeze, "_sass/pro/bootstrap-mod/_mixins.scss".freeze, "_sass/pro/bootstrap-mod/_utilities.scss".freeze, "_sass/pro/bootstrap-mod/_variables.scss".freeze, "_sass/pro/bootstrap-mod/bootstrap.scss".freeze, "_sass/pro/bootstrap-mod/mixins/_border-radius.scss".freeze, "_sass/pro/bootstrap-mod/mixins/_box-shadow.scss".freeze, "_sass/pro/bootstrap-mod/mixins/_breakpoints.scss".freeze, "_sass/pro/bootstrap-mod/mixins/_buttons.scss".freeze, "_sass/pro/bootstrap-mod/mixins/_forms.scss".freeze, "_sass/pro/bootstrap-mod/mixins/_gradients.scss".freeze, "_sass/pro/bootstrap-mod/mixins/_grid-framework.scss".freeze, "_sass/pro/bootstrap-mod/mixins/_grid.scss".freeze, "_sass/pro/bootstrap-mod/mixins/_hover.scss".freeze, "_sass/pro/bootstrap-mod/mixins/_transition.scss".freeze, "_sass/pro/bootstrap-mod/utilities/_spacing.scss".freeze, "assets/Resume.pdf".freeze, "assets/bower.json".freeze, "assets/bower_components/fontfaceobserver/.bower.json".freeze, "assets/bower_components/fontfaceobserver/.gitignore".freeze, "assets/bower_components/fontfaceobserver/.travis.yml".freeze, "assets/bower_components/fontfaceobserver/Gruntfile.js".freeze, "assets/bower_components/fontfaceobserver/LICENSE".freeze, "assets/bower_components/fontfaceobserver/bower.json".freeze, "assets/bower_components/fontfaceobserver/exports.js".freeze, "assets/bower_components/fontfaceobserver/externs-commonjs.js".freeze, "assets/bower_components/fontfaceobserver/externs.js".freeze, "assets/bower_components/fontfaceobserver/fontfaceobserver.js".freeze, "assets/bower_components/fontfaceobserver/fontfaceobserver.standalone.js".freeze, "assets/bower_components/fontfaceobserver/package.json".freeze, "assets/bower_components/fontfaceobserver/src/descriptors.js".freeze, "assets/bower_components/fontfaceobserver/src/observer.js".freeze, "assets/bower_components/fontfaceobserver/src/ruler.js".freeze, "assets/bower_components/fontfaceobserver/vendor/google/base.js".freeze, "assets/bower_components/html5shiv/.bower.json".freeze, "assets/bower_components/html5shiv/Gruntfile.js".freeze, "assets/bower_components/html5shiv/bower.json".freeze, "assets/bower_components/html5shiv/dist/html5shiv-printshiv.js".freeze, "assets/bower_components/html5shiv/dist/html5shiv-printshiv.min.js".freeze, "assets/bower_components/html5shiv/dist/html5shiv.js".freeze, "assets/bower_components/html5shiv/dist/html5shiv.min.js".freeze, "assets/bower_components/html5shiv/package.json".freeze, "assets/bower_components/katex/.bower.json".freeze, "assets/bower_components/katex/bower.json".freeze, "assets/bower_components/katex/dist/contrib/auto-render.js".freeze, "assets/bower_components/katex/dist/contrib/auto-render.min.js".freeze, "assets/bower_components/katex/dist/contrib/copy-tex.css".freeze, "assets/bower_components/katex/dist/contrib/copy-tex.js".freeze, "assets/bower_components/katex/dist/contrib/copy-tex.min.css".freeze, "assets/bower_components/katex/dist/contrib/copy-tex.min.js".freeze, "assets/bower_components/katex/dist/contrib/mathtex-script-type.js".freeze, "assets/bower_components/katex/dist/contrib/mathtex-script-type.min.js".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_AMS-Regular.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_AMS-Regular.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_AMS-Regular.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Fraktur-Bold.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Fraktur-Regular.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Main-Bold.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Main-Bold.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Main-Bold.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Main-BoldItalic.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Main-Italic.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Main-Italic.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Main-Italic.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Main-Regular.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Main-Regular.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Main-Regular.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Math-Italic.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Math-Italic.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Math-Italic.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_SansSerif-Bold.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_SansSerif-Italic.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_SansSerif-Regular.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Script-Regular.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Script-Regular.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Script-Regular.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Size1-Regular.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Size1-Regular.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Size1-Regular.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Size2-Regular.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Size2-Regular.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Size2-Regular.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Size3-Regular.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Size3-Regular.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Size3-Regular.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Size4-Regular.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Size4-Regular.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Size4-Regular.woff2".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Typewriter-Regular.woff".freeze, "assets/bower_components/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2".freeze, "assets/bower_components/katex/dist/katex.css".freeze, "assets/bower_components/katex/dist/katex.js".freeze, "assets/bower_components/katex/dist/katex.min.css".freeze, "assets/bower_components/katex/dist/katex.min.js".freeze, "assets/bower_components/katex/flow-typed/match-at.js".freeze, "assets/bower_components/katex/flow-typed/object-assign.js".freeze, "assets/bower_components/katex/package-lock.json".freeze, "assets/css/hydejack-8.1.1.css".freeze, "assets/icomoon/fonts/icomoon.eot".freeze, "assets/icomoon/fonts/icomoon.svg".freeze, "assets/icomoon/fonts/icomoon.ttf".freeze, "assets/icomoon/fonts/icomoon.woff".freeze, "assets/icomoon/selection.json".freeze, "assets/icomoon/style.css".freeze, "assets/icons/favicon.ico".freeze, "assets/icons/icon.png".freeze, "assets/icons/icon@0,25x.png".freeze, "assets/icons/icon@0,5x.png".freeze, "assets/icons/icon@0,75x.png".freeze, "assets/icons/icon@2x.png".freeze, "assets/icons/icon@3x.png".freeze, "assets/icons/tile-large.png".freeze, "assets/icons/tile-medium.png".freeze, "assets/icons/tile-small.png".freeze, "assets/icons/tile-wide.png".freeze, "assets/ieconfig.xml".freeze, "assets/img/blog/COLOURlovers.com-Hydejack.png".freeze, "assets/img/blog/blog-layout.jpg".freeze, "assets/img/blog/caleb-george-old.jpg".freeze, "assets/img/blog/caleb-george.jpg".freeze, "assets/img/blog/cover-page.jpg".freeze, "assets/img/blog/dark-mode.jpg".freeze, "assets/img/blog/example-content-ii.jpg".freeze, "assets/img/blog/example-content-iii.jpg".freeze, "assets/img/blog/hydejack-8.png".freeze, "assets/img/blog/hydejack-8@0,25x.png".freeze, "assets/img/blog/hydejack-8@0,5x.png".freeze, "assets/img/blog/lazy-images.jpg".freeze, "assets/img/blog/resume.png".freeze, "assets/img/blog/w3m.png".freeze, "assets/img/docs/google-fonts.png".freeze, "assets/img/projects/hy-drawer.svg".freeze, "assets/img/projects/hy-img.svg".freeze, "assets/img/projects/hy-push-state.svg".freeze, "assets/img/sidebar-bg.jpg".freeze, "assets/img/swipe.svg".freeze, "assets/js/hydejack-8.1.1.js".freeze, "assets/js/sw.js".freeze, "assets/manifest.json".freeze, "assets/resume.json".freeze, "assets/version.json".freeze, "assets/video/blog-layout.mp4".freeze, "assets/video/cover-page.mp4".freeze, "assets/video/dark-mode.mp4".freeze, "assets/video/lazy-images.mp4".freeze, "licenses/Apache-2.0.md".freeze, "licenses/GPL-3.0.md".freeze, "licenses/MIT.md".freeze, "licenses/PRO.md".freeze, "licenses/README.md".freeze, "licenses/W3C.md".freeze]
  s.homepage = "https://hydejack.com/".freeze
  s.licenses = ["GPL-3.0".freeze]
  s.required_ruby_version = Gem::Requirement.new("~> 2.2".freeze)
  s.rubygems_version = "2.5.2.3".freeze
  s.summary = "\"Best Jekyll Theme by a Mile\"".freeze

  s.installed_by_version = "2.5.2.3" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<jekyll>.freeze, ["~> 3.7"])
      s.add_development_dependency(%q<bundler>.freeze, ["~> 1.12"])
      s.add_development_dependency(%q<rake>.freeze, ["~> 10.0"])
    else
      s.add_dependency(%q<jekyll>.freeze, ["~> 3.7"])
      s.add_dependency(%q<bundler>.freeze, ["~> 1.12"])
      s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
    end
  else
    s.add_dependency(%q<jekyll>.freeze, ["~> 3.7"])
    s.add_dependency(%q<bundler>.freeze, ["~> 1.12"])
    s.add_dependency(%q<rake>.freeze, ["~> 10.0"])
  end
end