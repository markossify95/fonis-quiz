from .serializer import *
from rest_framework.response import Response
from .models import *
from rest_framework.views import APIView
from django.http import HttpResponse
from django.core import serializers


class QuestionList(APIView):
    def get(self, request):
        questions = Question.objects.order_by('?')[:5]
        data = serializers.serialize('json', questions)

        return HttpResponse(data, content_type='application/json')


class SubordinateScore(APIView):
    def post(self, request):
        subordinate = {
            'name': request.data['name'],
            'surname': request.data['surname'],
            'score': request.data['score'],
            'email': request.data['email'],
        }
        serializer = SubordinateSerializer(data=subordinate)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=501)
