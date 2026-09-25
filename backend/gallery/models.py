from django.db import models


class Page(models.Model):
    name = models.CharField(
        max_length=100
    )

    slug = models.SlugField(
        unique=True
    )

    class Meta:
        ordering = ["name"]

    def __str__(self):
        return self.name


class PageContent(models.Model):
    page = models.OneToOneField(
        Page,
        on_delete=models.CASCADE,
        related_name="content"
    )

    hero_name_english = models.CharField(
        max_length=200,
        blank=True,
        default=""
    )

    hero_name_german = models.CharField(
        max_length=200,
        blank=True,
        default=""
    )

    hero_name_ukrainian = models.CharField(
        max_length=200,
        blank=True,
        default=""
    )

    hero_title_english = models.CharField(
        max_length=300,
        blank=True,
        default=""
    )

    hero_title_german = models.CharField(
        max_length=300,
        blank=True,
        default=""
    )

    hero_title_ukrainian = models.CharField(
        max_length=300,
        blank=True,
        default=""
    )

    hero_description_english = models.TextField(
        blank=True,
        default=""
    )

    hero_description_german = models.TextField(
        blank=True,
        default=""
    )

    hero_description_ukrainian = models.TextField(
        blank=True,
        default=""
    )

    resume_button_english = models.CharField(
        max_length=100,
        blank=True,
        default=""
    )

    resume_button_german = models.CharField(
        max_length=100,
        blank=True,
        default=""
    )

    resume_button_ukrainian = models.CharField(
        max_length=100,
        blank=True,
        default=""
    )

    contact_button_english = models.CharField(
        max_length=100,
        blank=True,
        default=""
    )

    contact_button_german = models.CharField(
        max_length=100,
        blank=True,
        default=""
    )

    contact_button_ukrainian = models.CharField(
        max_length=100,
        blank=True,
        default=""
    )

    def __str__(self):
        return f"{self.page.name} content"
    
class Painting(models.Model):
    title = models.CharField(
        max_length=200,
        blank=True,
        null=True
    )

    description = models.TextField(
        blank=True,
        null=True
    )

    image = models.ImageField(
        upload_to="paintings/"
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    updated_at = models.DateTimeField(
        auto_now=True
    )

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return self.title or "Without name"