---
title: Home
published: true
header: true

process:
    markdown: true
child_type: default
routable: true
cache_enable: true
visible: true
class: home
sitemap:
    changefreq: monthly
    priority: 1.03
content:
    items: '@self.children'
    order:
        by: date
        dir: desc
    limit: 5
    pagination: true
feed:
    description: 'Feed Title'
    limit: 10
---
