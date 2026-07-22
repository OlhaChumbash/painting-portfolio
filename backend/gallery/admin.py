from django.contrib import admin
from .models import Painting


@admin.register(Painting)
class PaintingAdmin(admin.ModelAdmin):
    list_display = (
        "title",
        "created_at",
        "updated_at",
    )

    search_fields = (
        "title",
        "description",
    )