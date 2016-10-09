from .serializer import *
from rest_framework.response import Response
from .models import *
from rest_framework.views import APIView
from django.http import HttpResponse
from django.core import serializers
import json

"""
class QuestionList(APIView):
    def get(self, request):
        questions = Question.objects.order_by('?')[:5]
        data = serializers.serialize('json', questions)

        return HttpResponse(data, content_type='application/json')


"""


class SlaveScore(APIView):
    def post(self, request):
        slave = {
            'name': request.data['name'],
            'surname': request.data['surname'],
            'score': request.data['score'],
            'email': request.data['email'],
        }
        serializer = SlaveSerializer(data=slave)
        if serializer.is_valid():
            serializer.save()
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=501)


class QuestionList(APIView):
    def get(self, request):  # U REQUEST-U POSLATI ZELJENI BROJ PITANJA
        questions = Question.objects.order_by('?')
        answers = []
        for q in questions:
            if q.question_type == 0:
                answers.append(AnswerCheck.objects.get(question=q.id))

        all_objects = list(questions) + answers
        finish = serializers.serialize('json', all_objects, indent=4)

        return HttpResponse(finish, content_type='application/json')
