from . import views
from django.urls import path

urlpatterns = [
    path('', views.PrayerView.as_view(), name='prayer'),   
    path('contact/', views.contact_view, name='contact'),
    path('about/', views.about_view, name='about'),  
]