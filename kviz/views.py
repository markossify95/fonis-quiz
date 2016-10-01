from .serializer import *
from rest_framework.response import Response
from .models import *
from rest_framework.views import APIView
from django.http import HttpResponse
from django.core import serializers



class QuestionList(APIView):
    def get(self, request):
        questions = Question.objects.all()
        data = serializers.serialize('json', questions)

        return HttpResponse(data, content_type='application/json')

class SlaveScore(APIView):
    def post(self, request):
        slave = {
            'name': request.data['name'],
            'surname': request.data['surname'],
            'score': request.data['score'],
        }
        serializer = SlaveSerializer(data=slave)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse("<h1>Pusi kurac</h1>")
