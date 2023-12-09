from django import forms
from .models import Comment
class SearchForm(forms.Form):
    word = forms.CharField(max_length=100)
    
class CommentForm(forms.ModelForm):
    content = forms.CharField(
        widget=forms.Textarea(attrs={'rows': 5, 'cols': 40}),  # rowsとcolsはサイズを設定
    )
    class Meta:
        model = Comment
        fields = ('content',)