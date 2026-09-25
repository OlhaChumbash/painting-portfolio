from django.contrib import admin
from .models import Page, PageContent, Painting


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
    )

    fields = (
        "page",

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
    )

@admin.register(Painting)
class PaintingAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "description",
        "created_at",
        "updated_at",
    )

    list_display_links = (
        "title",
    )

    search_fields = (
        "title",
        "description",
    )

    fields = (
        "title",
        "description",
        "image",
        "created_at",
        "updated_at",
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )