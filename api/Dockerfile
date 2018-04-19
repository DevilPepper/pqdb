# Using official python runtime base image
FROM python:3.6.5-alpine3.7

# Set the application directory
WORKDIR /app

RUN apk update \
 && apk add --virtual build-deps gcc python-dev musl-dev \
 && apk add --no-cache postgresql-dev

# Install our requirements.txt
ADD requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt

# Copy our code from the current folder to /app inside the container
ADD . /app

# Make port 80 available for links and/or publish
EXPOSE 80

CMD ["python", "app.py"]
