FROM python:3.8-slim

WORKDIR /app
COPY . .
RUN pip3 install --upgrade pip
RUN pip3 install wheel setuptools pip --upgrade
RUN pip3 install -r requirements.txt --no-cache-dir

CMD ["daphne", "-b", "0.0.0.0", "-p", "8000", "django_rest_api.asgi:application"]