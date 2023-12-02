from . import views
from django.urls import path

urlpatterns = [
    path('prayer/', views.PrayerView.as_view(), name='prayer'),   
    path('random/', views.RandomImgView.as_view(), name='random'),
    path('contact/', views.contact_view, name='contact'),
    path('about/', views.about_view, name='about'),  
]

