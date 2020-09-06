from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import WordSerializer
from .models import Word

@api_view(['GET'])
def index(request):
    api_urls = {
		'List':'/word-list/',
		'Create':'/test-create/',
	}
    return Response(api_urls)

@api_view(['GET'])
def wordList(request):
	words = Word.objects.all().order_by('title')
	serializer = WordSerializer(words, many=True)
	return Response(serializer.data)
