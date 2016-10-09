from django.db import models
from datetime import datetime


class Question(models.Model):
    text = models.CharField(max_length=200, blank=False)
    question_type = models.IntegerField(default=0)  # 0 if it is checkBox type of Q, 1 if it is textBox type

    def __str__(self):
        return self.text + " type: " + str(self.question_type)

    def as_dict(self):
        return {
            "id": self.id,
            "text": self.text,
            "question_type": self.question_type
        }


class AnswerCheck(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    ans1 = models.CharField(max_length=50, blank=False)
    valid1 = models.BooleanField(default=False)
    ans2 = models.CharField(max_length=50, blank=False)
    valid2 = models.BooleanField(default=False)
    ans3 = models.CharField(max_length=50, blank=False)
    valid3 = models.BooleanField(default=False)
    ans4 = models.CharField(max_length=50, blank=False)
    valid4 = models.BooleanField(default=False)

    def __str__(self):
        return "Created answer with id: " + str(self.id)

    def as_dict(self):
        return {
            "id": self.id,
            "question_id": self.question,
            "ans1": self.ans1,
            "valid1": self.valid1,
            "ans2": self.ans2,
            "valid2": self.valid2,
            "ans3": self.ans3,
            "valid3": self.valid3,
            "ans4": self.ans4,
            "valid4": self.valid4,
        }


class Slave(models.Model):
    first_name = models.CharField(max_length=20, blank=False)
    last_name = models.CharField(max_length=20, blank=False)
    birth_date = models.DateField(blank=True, default=datetime.now)
    phone_number = models.CharField(max_length=20, default="/")
    year_of_study = models.IntegerField(default=None)
    email = models.EmailField(max_length=70, blank=False, default=None)

    def __str__(self):
        return "First name: " + self.first_name + " Last name: " + self.last_name


class SlaveAnswer(models.Model):
    slave = models.ForeignKey(Slave, on_delete=models.CASCADE)
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    slave_answer_text = models.TextField(max_length=200, blank=True, default=None)
    correct = models.BooleanField(default=False)

    def __str__(self):
        return "Answer by: " + self.slave.first_name + " on question " + self.question.text
