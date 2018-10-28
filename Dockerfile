FROM ruby:2.4.2
ENV LANG C.UTF-8

RUN apt-get update && \
    apt-get install -y nodejs mysql-client --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*
WORKDIR /usr/src/app

COPY Gemfile /usr/src/app/
COPY Gemfile.lock /usr/src/app/
RUN bundle install

COPY . /usr/src/app

EXPOSE 3000
CMD ["./bin/rails", "server", "-b", "0.0.0.0"]
