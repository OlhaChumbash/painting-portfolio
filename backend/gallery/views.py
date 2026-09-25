from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Painting, PageContent
from .serializers import PaintingSerializer


class PaintingListAPIView(generics.ListAPIView):
    queryset = Painting.objects.all()
    serializer_class = PaintingSerializer


class PaintingDetailAPIView(generics.RetrieveAPIView):
    queryset = Painting.objects.all()
    serializer_class = PaintingSerializer


class HomePageContentAPIView(APIView):
    def get(self, request):
        try:
            content = PageContent.objects.select_related("page").get(
                page__slug="home"
            )
        except PageContent.DoesNotExist:
            return Response(
                {
                    "detail": "Home page content not found."
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        return Response({
            "page": {
                "name": content.page.name,
                "slug": content.page.slug,
            },

            "hero_name_english": content.hero_name_english,
            "hero_name_german": content.hero_name_german,
            "hero_name_ukrainian": content.hero_name_ukrainian,

            "hero_title_english": content.hero_title_english,
            "hero_title_german": content.hero_title_german,
            "hero_title_ukrainian": content.hero_title_ukrainian,

            "hero_description_english": content.hero_description_english,
            "hero_description_german": content.hero_description_german,
            "hero_description_ukrainian": content.hero_description_ukrainian,

            "resume_button_english": content.resume_button_english,
            "resume_button_german": content.resume_button_german,
            "resume_button_ukrainian": content.resume_button_ukrainian,

            "contact_button_english": content.contact_button_english,
            "contact_button_german": content.contact_button_german,
            "contact_button_ukrainian": content.contact_button_ukrainian,
        })