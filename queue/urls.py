from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.renderQueue, name='queue'),
    url(r'^progress/$', views.renderProgress, name='progress'),
]


