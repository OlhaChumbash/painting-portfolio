from rest_framework import serializers
from .models import Painting


class PaintingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Painting
        fields = [
            "id",
            "title",
            "description",
            "image",
            "created_at",
            "updated_at",
        ]