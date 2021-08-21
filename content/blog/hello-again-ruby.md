---
title: Hello Again, Ruby
description: 'Documenting the start of a Ruby on Rails project in 2021.'
authors:
  - Thom Bruce
date:
categories:
series:
tags:
draft: true
---

```
rvm list known
rvm install ruby-3.0.0
rvm gemset create dynamite
rvm use 3.0.0@dynamite
```

```
gem install rails
```

```
rails new dynamite --database=postgresql --webpack=vue
```

_NOTE: The `--database` and `--webpack` flags are optional. I've actually added them both to my `~/.railsrc` config as `--database=postgresql` and `--webpack=vue`, which means I was able to omit them when executing the command. They are included above for posterity; to be clear of my Rails project's configuration at time of creation._
