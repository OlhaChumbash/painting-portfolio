from django.db import migrations


def create_home_content(apps, schema_editor):
    Page = apps.get_model("gallery", "Page")
    PageContent = apps.get_model("gallery", "PageContent")

    home, created = Page.objects.get_or_create(
        slug="home",
        defaults={
            "name": "Home",
        },
    )

    contents = [
        {
            "key": "hero_name",
            "english": "Dmytro",
            "german": "Dmytro",
            "ukrainian": "Дмитро",
        },
        {
            "key": "hero_title",
            "english": "Turning Vision Into Art.",
            "german": "Vision in Kunst verwandeln.",
            "ukrainian": "Перетворюючи бачення на мистецтво.",
        },
        {
            "key": "hero_description",
            "english": (
                "Dmytro is a Ukrainian painter whose work explores "
                "emotion, identity, and the beauty of the world through color "
                "and artistic expression."
            ),
            "german": (
                "Dmytro ist ein ukrainischer Maler, dessen Werke sich mit "
                "Emotionen, Identität und der Schönheit der Welt durch Farbe "
                "und künstlerischen Ausdruck beschäftigen."
            ),
            "ukrainian": (
                "Дмитро — український художник, у чиїх роботах через колір "
                "і художню виразність розкриваються емоції, ідентичність "
                "та краса навколишнього світу."
            ),
        },
        {
            "key": "resume_button",
            "english": "View Resume",
            "german": "Lebenslauf ansehen",
            "ukrainian": "Переглянути резюме",
        },
        {
            "key": "contact_button",
            "english": "Contact",
            "german": "Kontakt",
            "ukrainian": "Зв'язатися",
        },
    ]

    for content in contents:
        PageContent.objects.update_or_create(
            page=home,
            key=content["key"],
            defaults={
                "english": content["english"],
                "german": content["german"],
                "ukrainian": content["ukrainian"],
            },
        )


def remove_home_content(apps, schema_editor):
    Page = apps.get_model("gallery", "Page")
    PageContent = apps.get_model("gallery", "PageContent")

    try:
        home = Page.objects.get(slug="home")
        PageContent.objects.filter(page=home).delete()
    except Page.DoesNotExist:
        pass


class Migration(migrations.Migration):

    dependencies = [
        ("gallery", "0002_page_pagecontent"),
    ]

    operations = [
        migrations.RunPython(
            create_home_content,
            remove_home_content,
        ),
    ]