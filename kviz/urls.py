from django.conf.urls import url
from . import views
from django.views.generic import TemplateView

# /quiz/...
urlpatterns = [
    url(r'^login/$', TemplateView.as_view(template_name='index.html')),
    url(r'^questions/all/$', views.QuestionList.as_view(), name='all_questions'),
    # url(r'^questions/(?P<pk>\d+)/$', views.QuestionList.as_view(), name='all_questions'),
    url(r'^result/$', views.SlaveScore.as_view(), name='new_score'),
]
