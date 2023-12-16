from . import views
from django.urls import path

urlpatterns = [
    path('prayer/', views.PrayerView.as_view(), name='prayer'),   
    path('random/', views.RandomImgView.as_view(), name='random'),
    path('intention/', views.IntentionView.as_view(), name='intention'),
    path('contact/', views.contact_get_view, name='contact_get'),
    path('about/', views.about_view, name='about'),  
]


