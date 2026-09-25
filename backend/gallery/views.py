from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import (
    Painting,
    PageContent,
    AboutStatistic,
    Skill,
    Experience,
    Education,
)
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


class AboutPageContentAPIView(APIView):
    def get(self, request):
        try:
            content = PageContent.objects.select_related("page").get(
                page__slug="about"
            )
        except PageContent.DoesNotExist:
            return Response(
                {
                    "detail": "About page content not found."
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        statistics = AboutStatistic.objects.all()
        skills = Skill.objects.all()
        experiences = Experience.objects.all()
        education = Education.objects.all()

        return Response({
            "page": {
                "name": content.page.name,
                "slug": content.page.slug,
            },

            "title_english": content.about_title_english,
            "title_german": content.about_title_german,
            "title_ukrainian": content.about_title_ukrainian,

            "biography_english": content.about_biography_english,
            "biography_german": content.about_biography_german,
            "biography_ukrainian": content.about_biography_ukrainian,

            "paragraph_2_english": content.about_paragraph_2_english,
            "paragraph_2_german": content.about_paragraph_2_german,
            "paragraph_2_ukrainian": content.about_paragraph_2_ukrainian,

            "paragraph_3_english": content.about_paragraph_3_english,
            "paragraph_3_german": content.about_paragraph_3_german,
            "paragraph_3_ukrainian": content.about_paragraph_3_ukrainian,

            "statistics": [
                {
                    "value": item.value,
                    "label_english": item.label_english,
                    "label_german": item.label_german,
                    "label_ukrainian": item.label_ukrainian,
                }
                for item in statistics
            ],
            "profile_image": (
                request.build_absolute_uri(content.profile_image.url)
                if content.profile_image
                else None
            ),
            "skills": [
                {
                    "name": item.name,
                    "category": item.category,
                }
                for item in skills
            ],

            "experience": [
                {
                    "position_english": item.position_english,
                    "position_german": item.position_german,
                    "position_ukrainian": item.position_ukrainian,
                    "company": item.company,
                    "period": item.period,
                    "location": item.location,
                    "description_english": item.description_english,
                    "description_german": item.description_german,
                    "description_ukrainian": item.description_ukrainian,
                }
                for item in experiences
            ],

            "education": [
                {
                    "degree_english": item.degree_english,
                    "degree_german": item.degree_german,
                    "degree_ukrainian": item.degree_ukrainian,
                    "institution": item.institution,
                    "period": item.period,
                    "description_english": item.description_english,
                    "description_german": item.description_german,
                    "description_ukrainian": item.description_ukrainian,
                }
                for item in education
            ],
        })