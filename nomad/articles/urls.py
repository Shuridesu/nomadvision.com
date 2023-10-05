from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.Index.as_view(), name = 'index'),
    path('detail/<pk>/', views.Detail.as_view(), name = 'detail'),
    path('about/', views.About.as_view(), name = 'about'),
    path('privacy_policy/', views.Privacy.as_view(), name = 'privacy'),
    path('terms&condition/', views.Terms.as_view(), name = 'terms'),
    path('search/', views.search_view, name = 'search'),
    path('search/<str:search_term>/',views.search_results,name = 'search_results')
    
]



if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)