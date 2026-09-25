from django.contrib import admin

from .models import (
    Page,
    PageContent,
    AboutStatistic,
    Skill,
    Experience,
    Education,
    Painting,
)


@admin.register(Page)
class PageAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "slug",
    )

    search_fields = (
        "name",
        "slug",
    )

    prepopulated_fields = {
        "slug": ("name",),
    }


@admin.register(PageContent)
class PageContentAdmin(admin.ModelAdmin):
    list_display = (
        "page",
        "hero_name_english",
        "hero_title_english",
    )

    list_filter = (
        "page",
    )

    search_fields = (
        "page__name",
        "page__slug",

        "hero_name_english",
        "hero_name_german",
        "hero_name_ukrainian",

        "hero_title_english",
        "hero_title_german",
        "hero_title_ukrainian",

        "about_title_english",
        "about_title_german",
        "about_title_ukrainian",
    )

    fields = (
        "page",

        # HOME
        "hero_name_english",
        "hero_name_german",
        "hero_name_ukrainian",

        "hero_title_english",
        "hero_title_german",
        "hero_title_ukrainian",

        "hero_description_english",
        "hero_description_german",
        "hero_description_ukrainian",

        "resume_button_english",
        "resume_button_german",
        "resume_button_ukrainian",

        "contact_button_english",
        "contact_button_german",
        "contact_button_ukrainian",

        # ABOUT
        "about_title_english",
        "about_title_german",
        "about_title_ukrainian",

        "about_biography_english",
        "about_biography_german",
        "about_biography_ukrainian",

        "about_paragraph_2_english",
        "about_paragraph_2_german",
        "about_paragraph_2_ukrainian",

        "about_paragraph_3_english",
        "about_paragraph_3_german",
        "about_paragraph_3_ukrainian",
    )


@admin.register(AboutStatistic)
class AboutStatisticAdmin(admin.ModelAdmin):
    list_display = (
        "value",
        "label_english",
        "order",
    )

    list_display_links = (
        "value",
    )

    search_fields = (
        "value",
        "label_english",
        "label_german",
        "label_ukrainian",
    )

    list_editable = (
        "order",
    )


@admin.register(Skill)
class SkillAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "category",
        "order",
    )

    search_fields = (
        "name",
        "category",
    )

    list_editable = (
        "order",
    )


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = (
        "position_english",
        "company",
        "period",
        "order",
    )

    search_fields = (
        "position_english",
        "position_german",
        "position_ukrainian",
        "company",
    )

    list_editable = (
        "order",
    )


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = (
        "degree_english",
        "institution",
        "period",
        "order",
    )

    search_fields = (
        "degree_english",
        "degree_german",
        "degree_ukrainian",
        "institution",
    )

    list_editable = (
        "order",
    )


@admin.register(Painting)
class PaintingAdmin(admin.ModelAdmin):
    list_display = (
        "title_english",
        "title_german",
        "title_ukrainian",
        "created_at",
        "updated_at",
    )

    list_display_links = (
        "title_english",
    )

    search_fields = (
        "title_english",
        "title_german",
        "title_ukrainian",
        "description_english",
        "description_german",
        "description_ukrainian",
    )

    fields = (
        "title_english",
        "title_german",
        "title_ukrainian",

        "description_english",
        "description_german",
        "description_ukrainian",

        "image",

        "created_at",
        "updated_at",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )