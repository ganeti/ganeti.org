# ganeti.org Development Website

This is the draft for a new ganeti.org website, once the transition from Google to the community has finished.

## Local Development
To do development, you need ruby/bundler/jekyll installed on your workstation. Here are the steps to get this up and running a current Ubuntu 19.04. It probably applies to Debian stretch/buster and Ubuntu 18.04 as well:
```
git clone git@github.com:sipgate/ganeti.org
cd ganeti.org
sudo apt install jekyll zlib1g-dev
bundle install --path vendor
```

Once you have set up everything, you only need to run the following command inside your git folder. This will start a local webserver and serve the website:
```
bundle exec jekyll serve
```



