from django.shortcuts import render,redirect
from typing import Any
from django.db.models.query import QuerySet
from django.views.generic import ListView,DetailView,TemplateView
from django.views.generic.edit import FormView
from .models import Post
from .forms import SearchForm

class Index(ListView):
    context_object_name = 'posts'
    queryset = Post.objects.all()
    
    def get_context_data(self,**kwargs):
       context = super().get_context_data(**kwargs)
       context['recommended_posts'] = Post.objects.filter(is_recommended = True)
       context['best_posts'] = Post.objects.filter(is_best=True)
       return context   
    
class Detail(DetailView):
    model = Post
    
class About(TemplateView):
    template_name = "articles/about_us.html"
    
class Privacy(TemplateView):
    template_name = "articles/privacy_policy.html"
    
class Terms(TemplateView):
    template_name = "articles/terms_condition.html"
    
from django.shortcuts import redirect

def search_view(request):
    if request.method == 'POST':
        form = SearchForm(request.POST)
        if form.is_valid():
            # フォームが有効な場合、フォームからデータを取得
            search_term = form.cleaned_data['word']
            # ここで適切なビュー関数に遷移させる
            return redirect('search_results', search_term=search_term)
    else:
        form = SearchForm()

    return render(request, 'articles/search.html', {'form': form})

from django.shortcuts import render
from .models import Post  # あなたのプロジェクトに合わせてモデルをインポートする

def search_results(request, search_term):
    # データベースから検索結果を取得
    search_results = Post.objects.filter(title__icontains=search_term)

    # 取得した検索結果をコンテキストに追加
    context = {
        'search_term': search_term,
        'search_results': search_results,
    }

    return render(request, 'articles/search_results.html', context)