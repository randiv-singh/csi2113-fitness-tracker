FROM nginx:alpine

COPY index.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css
COPY workout.js /usr/share/nginx/html/workout.js
COPY script.js /usr/share/nginx/html/script.js

EXPOSE 80