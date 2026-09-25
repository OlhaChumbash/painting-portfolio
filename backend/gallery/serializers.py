from rest_framework import serializers
from .models import Painting


class PaintingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Painting
        fields = [
            'id',
            'title_english',
            'title_german',
            'title_ukrainian',
            'description_english',
            'description_german',
            'description_ukrainian',
            'image',
            'created_at',
            'updated_at',
        ]
