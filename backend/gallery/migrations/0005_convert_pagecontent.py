from django.db import migrations, models
import django.db.models.deletion


def convert_page_content(apps, schema_editor):
    Page = apps.get_model("gallery", "Page")
    PageContent = apps.get_model("gallery", "PageContent")

    for page in Page.objects.all():
        contents = PageContent.objects.filter(page=page)

        if not contents.exists():
            continue

        # Take the first existing row and turn it into
        # the single PageContent row for this page.
        target = contents.first()

        for content in contents:
            if content.key == "hero_name":
                target.hero_name_english = content.english or ""
                target.hero_name_german = content.german or ""
                target.hero_name_ukrainian = content.ukrainian or ""

            elif content.key == "hero_title":
                target.hero_title_english = content.english or ""
                target.hero_title_german = content.german or ""
                target.hero_title_ukrainian = content.ukrainian or ""

            elif content.key == "hero_description":
                target.hero_description_english = content.english or ""
                target.hero_description_german = content.german or ""
                target.hero_description_ukrainian = content.ukrainian or ""

            elif content.key == "resume_button":
                target.resume_button_english = content.english or ""
                target.resume_button_german = content.german or ""
                target.resume_button_ukrainian = content.ukrainian or ""

            elif content.key == "contact_button":
                target.contact_button_english = content.english or ""
                target.contact_button_german = content.german or ""
                target.contact_button_ukrainian = content.ukrainian or ""

        target.save()

        # Delete the other old rows because the new model
        # has OneToOneField(page).
        contents.exclude(pk=target.pk).delete()


class Migration(migrations.Migration):

    dependencies = [
        ("gallery", "0003_add_home_page_content"),
    ]

    operations = [
        migrations.AddField(
            model_name="pagecontent",
            name="hero_name_english",
            field=models.CharField(
                max_length=200,
                blank=True,
                default="",
            ),
        ),
        migrations.AddField(
            model_name="pagecontent",
            name="hero_name_german",
            field=models.CharField(
                max_length=200,
                blank=True,
                default="",
            ),
        ),
        migrations.AddField(
            model_name="pagecontent",
            name="hero_name_ukrainian",
            field=models.CharField(
                max_length=200,
                blank=True,
                default="",
            ),
        ),

        migrations.AddField(
            model_name="pagecontent",
            name="hero_title_english",
            field=models.CharField(
                max_length=300,
                blank=True,
                default="",
            ),
        ),
        migrations.AddField(
            model_name="pagecontent",
            name="hero_title_german",
            field=models.CharField(
                max_length=300,
                blank=True,
                default="",
            ),
        ),
        migrations.AddField(
            model_name="pagecontent",
            name="hero_title_ukrainian",
            field=models.CharField(
                max_length=300,
                blank=True,
                default="",
            ),
        ),

        migrations.AddField(
            model_name="pagecontent",
            name="hero_description_english",
            field=models.TextField(
                blank=True,
                default="",
            ),
        ),
        migrations.AddField(
            model_name="pagecontent",
            name="hero_description_german",
            field=models.TextField(
                blank=True,
                default="",
            ),
        ),
        migrations.AddField(
            model_name="pagecontent",
            name="hero_description_ukrainian",
            field=models.TextField(
                blank=True,
                default="",
            ),
        ),

        migrations.AddField(
            model_name="pagecontent",
            name="resume_button_english",
            field=models.CharField(
                max_length=100,
                blank=True,
                default="",
            ),
        ),
        migrations.AddField(
            model_name="pagecontent",
            name="resume_button_german",
            field=models.CharField(
                max_length=100,
                blank=True,
                default="",
            ),
        ),
        migrations.AddField(
            model_name="pagecontent",
            name="resume_button_ukrainian",
            field=models.CharField(
                max_length=100,
                blank=True,
                default="",
            ),
        ),

        migrations.AddField(
            model_name="pagecontent",
            name="contact_button_english",
            field=models.CharField(
                max_length=100,
                blank=True,
                default="",
            ),
        ),
        migrations.AddField(
            model_name="pagecontent",
            name="contact_button_german",
            field=models.CharField(
                max_length=100,
                blank=True,
                default="",
            ),
        ),
        migrations.AddField(
            model_name="pagecontent",
            name="contact_button_ukrainian",
            field=models.CharField(
                max_length=100,
                blank=True,
                default="",
            ),
        ),

        migrations.RunPython(
            convert_page_content,
            migrations.RunPython.noop,
        ),

        migrations.AlterField(
            model_name="pagecontent",
            name="page",
            field=models.OneToOneField(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="content",
                to="gallery.page",
            ),
        ),

        migrations.RemoveField(
            model_name="pagecontent",
            name="key",
        ),
        migrations.RemoveField(
            model_name="pagecontent",
            name="english",
        ),
        migrations.RemoveField(
            model_name="pagecontent",
            name="german",
        ),
        migrations.RemoveField(
            model_name="pagecontent",
            name="ukrainian",
        ),
    ]

