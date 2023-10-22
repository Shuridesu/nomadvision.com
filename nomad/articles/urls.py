from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', views.Index.as_view(), name = 'index'),
    path('about/', views.About.as_view(), name = 'about'),
    path('privacy_policy/', views.Privacy.as_view(), name = 'privacy'),
    path('terms&condition/', views.Terms.as_view(), name = 'terms'),
    path('search/', views.SearchResultsView.as_view(), name='search_results'),
    path('comment/<slug:slug>/', views.CommentView.as_view(), name='comment'),
    path('trends/ai/',views.AiTrendsView.as_view(),name = 'ai_trends'),
    path('trends/data/',views.DataTrendsView.as_view(),name = 'data_trends'),
    path('analytics/industry_insights',views.IndustryInsightsView.as_view(),name = 'industry_insights'),
    path('tool&resources/ai_software/',views.AiSoftwareView.as_view(),name = 'ai_software'),
    path('comment/<int:pk>/delete/', views.CommentDeleteView.as_view(), name='comment_delete'),
    path('comment/<int:pk>/edit/', views.CommentEditView.as_view(), name='comment_edit'),
    path('category/<slug:category_slug>/', views.CategoryListView.as_view(), name='category_list'),
    path('<slug:slug>/', views.Detail.as_view(), name = 'detail'),
]



if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)