from django.contrib import admin
from .models import *


# Register your models here.
admin.site.register(Question)
admin.site.register(Slave)
admin.site.register(AnswerCheck)
admin.site.register(SlaveAnswer)
