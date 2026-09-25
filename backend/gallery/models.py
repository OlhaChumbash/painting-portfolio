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
    profile_image = models.ImageField(
        upload_to="profile/",
        blank=True,
        null=True
    )
    # =========================
    # HOME PAGE
    # =========================

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

    # =========================
    # ABOUT PAGE
    # =========================

    about_title_english = models.CharField(
        max_length=300,
        blank=True,
        default=""
    )

    about_title_german = models.CharField(
        max_length=300,
        blank=True,
        default=""
    )

    about_title_ukrainian = models.CharField(
        max_length=300,
        blank=True,
        default=""
    )

    about_biography_english = models.TextField(
        blank=True,
        default=""
    )

    about_biography_german = models.TextField(
        blank=True,
        default=""
    )

    about_biography_ukrainian = models.TextField(
        blank=True,
        default=""
    )

    about_paragraph_2_english = models.TextField(
        blank=True,
        default=""
    )

    about_paragraph_2_german = models.TextField(
        blank=True,
        default=""
    )

    about_paragraph_2_ukrainian = models.TextField(
        blank=True,
        default=""
    )

    about_paragraph_3_english = models.TextField(
        blank=True,
        default=""
    )

    about_paragraph_3_german = models.TextField(
        blank=True,
        default=""
    )

    about_paragraph_3_ukrainian = models.TextField(
        blank=True,
        default=""
    )

    def __str__(self):
        return f"{self.page.name} content"


class AboutStatistic(models.Model):
    value = models.CharField(
        max_length=50
    )

    label_english = models.CharField(
        max_length=100
    )

    label_german = models.CharField(
        max_length=100
    )

    label_ukrainian = models.CharField(
        max_length=100
    )

    order = models.PositiveIntegerField(
        default=0
    )

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"{self.value} - {self.label_english}"


class Skill(models.Model):
    name = models.CharField(
        max_length=100
    )

    category = models.CharField(
        max_length=100,
        blank=True,
        default=""
    )

    order = models.PositiveIntegerField(
        default=0
    )

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return self.name


class Experience(models.Model):
    position_english = models.CharField(
        max_length=200
    )

    position_german = models.CharField(
        max_length=200
    )

    position_ukrainian = models.CharField(
        max_length=200
    )

    company = models.CharField(
        max_length=200
    )

    period = models.CharField(
        max_length=100
    )

    location = models.CharField(
        max_length=200,
        blank=True,
        default=""
    )

    description_english = models.TextField(
        blank=True,
        default=""
    )

    description_german = models.TextField(
        blank=True,
        default=""
    )

    description_ukrainian = models.TextField(
        blank=True,
        default=""
    )

    order = models.PositiveIntegerField(
        default=0
    )

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"{self.position_english} - {self.company}"


class Education(models.Model):
    degree_english = models.CharField(
        max_length=200
    )

    degree_german = models.CharField(
        max_length=200
    )

    degree_ukrainian = models.CharField(
        max_length=200
    )

    institution = models.CharField(
        max_length=200
    )

    period = models.CharField(
        max_length=100
    )

    description_english = models.TextField(
        blank=True,
        default=""
    )

    description_german = models.TextField(
        blank=True,
        default=""
    )

    description_ukrainian = models.TextField(
        blank=True,
        default=""
    )

    order = models.PositiveIntegerField(
        default=0
    )

    class Meta:
        ordering = ["order"]

    def __str__(self):
        return f"{self.degree_english} - {self.institution}"


class Painting(models.Model):
    title_english = models.CharField(
        max_length=200,
        blank=True,
        default=""
    )

    title_german = models.CharField(
        max_length=200,
        blank=True,
        default=""
    )

    title_ukrainian = models.CharField(
        max_length=200,
        blank=True,
        default=""
    )

    description_english = models.TextField(
        blank=True,
        default=""
    )

    description_german = models.TextField(
        blank=True,
        default=""
    )

    description_ukrainian = models.TextField(
        blank=True,
        default=""
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
        return self.title_english or "Without name"