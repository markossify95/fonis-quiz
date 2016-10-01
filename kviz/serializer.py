from rest_framework import serializers
from .models import *

class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class SlaveSerializer(serializers.ModelSerializer):
    class Meta:
        model = Slave
        fields = '__all__'
