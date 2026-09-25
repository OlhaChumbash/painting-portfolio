#!/bin/sh
set -e

echo "Applying migrations..."
python manage.py migrate

echo "Creating admin user if needed..."
python manage.py shell <<'PYTHON'
import os
from django.contrib.auth import get_user_model

User = get_user_model()

username = os.environ.get("DJANGO_SUPERUSER_USERNAME", "admin")
email = os.environ.get("DJANGO_SUPERUSER_EMAIL", "admin@example.com")
password = os.environ.get("DJANGO_SUPERUSER_PASSWORD", "admin123")

if not User.objects.filter(username=username).exists():
    User.objects.create_superuser(
        username=username,
        email=email,
        password=password,
    )
    print(f"Superuser '{username}' created.")
else:
    print(f"Superuser '{username}' already exists.")
PYTHON

echo "Starting Django..."
exec python manage.py runserver 0.0.0.0:8000
