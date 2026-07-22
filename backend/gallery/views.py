from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Painting
from .serializers import PaintingSerializer


class PaintingListAPIView(generics.ListAPIView):
    queryset = Painting.objects.all()
    serializer_class = PaintingSerializer