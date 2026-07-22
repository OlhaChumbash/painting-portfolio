from django.test import TestCase

from .models import Painting


class PaintingModelTest(TestCase):

    def test_create_painting(self):
        painting = Painting.objects.create(
            title="Test painting",
            description="Test description"
        )

        self.assertEqual(
            painting.title,
            "Test painting"
        )

        self.assertEqual(
            str(painting),
            "Test painting"
        )