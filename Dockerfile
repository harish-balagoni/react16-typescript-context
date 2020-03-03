FROM ubuntu:18.04
RUN echo 'Creating NGINX'
RUN apt-get update
RUN yes | apt-get -y install nginx
RUN yes | apt-get -y install vim

WORKDIR /var/www/html
COPY dist/ /var/www/html/

EXPOSE 80
COPY site.conf /etc/nginx/sites-enabled/default
CMD nginx -g "daemon off;" && mkdir logs && chown -R www-data:"$USER"
