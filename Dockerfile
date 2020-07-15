FROM httpd:alpine

WORKDIR '/usr/local/apache2/htdocs/'

EXPOSE 80

COPY dist/UsersManagement .
