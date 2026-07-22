from django.urls import path
from .views import PaintingListAPIView


urlpatterns = [
    path(
        "paintings/",
        PaintingListAPIView.as_view(),
        name="painting-list"
    ),
]