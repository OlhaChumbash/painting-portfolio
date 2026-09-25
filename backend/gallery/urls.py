from django.urls import path

from .views import (
    PaintingListAPIView,
    PaintingDetailAPIView,
    HomePageContentAPIView,
)


urlpatterns = [
    path(
        "paintings/",
        PaintingListAPIView.as_view(),
        name="painting-list",
    ),

    path(
        "paintings/<int:pk>/",
        PaintingDetailAPIView.as_view(),
        name="painting-detail",
    ),

    path(
        "pages/home/",
        HomePageContentAPIView.as_view(),
        name="home-page-content",
    ),
]