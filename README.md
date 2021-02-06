# ganeti.org Website

This repository feeds https://www.ganeti.org

## Local Development
To do development, you need ruby/bundler/jekyll installed on your workstation. Here are the steps to get this up and running on a current Ubuntu 20.04.
```
git clone git@github.com:ganeti/ganeti.org
cd ganeti.org
sudo apt install bundler jekyll zlib1g-dev
bundle install
```

Once you have set up everything, you only need to run the following command inside your git folder. This will start a local webserver and serve the website:
```
bundle exec jekyll serve
```



