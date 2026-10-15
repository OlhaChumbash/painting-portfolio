# Використовуємо офіційний легкий образ Python
FROM python:3.12-slim

# Встановлюємо робочу директорію всередині контейнера
WORKDIR /app

# Встановлюємо системні залежності, якщо вони потрібні для збірки пакунків
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Копіюємо файл із залежностями та встановлюємо їх
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Копіюємо весь решту коду бекенду в контейнер
COPY . .

# Робимо скрипт entrypoint.sh виконуваним для Linux-контейнера
RUN chmod +x entrypoint.sh

# Відкриваємо порти (8000 для локального розгортання, 10000 для Render)
EXPOSE 8000
EXPOSE 10000

# Головна точка входу: завжди запускає наш розумний entrypoint.sh
ENTRYPOINT ["./entrypoint.sh"]