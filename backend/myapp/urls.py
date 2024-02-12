from django.urls import path
from myapp import views as myapp_views

urlpatterns = [
    path('prayer/', myapp_views.PrayerView.as_view(), name='prayer'),
    path('random/', myapp_views.RandomImgView.as_view(), name='random'),
    path('intention/', myapp_views.IntentionView.as_view(), name='intention'),
    path('rubrique/', myapp_views.RubriqueView.as_view(), name='rubrique'),
    path('audio/', myapp_views.AudioView.as_view(), name='audio'),
    path('email/', myapp_views.EmailReceptionView.as_view(), name='emailReception'),
]
