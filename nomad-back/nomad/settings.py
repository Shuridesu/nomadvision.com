

from pathlib import Path
import os
# Build paths inside the project like this: BASE_DIR / 'subdir'.
BASE_DIR = Path(__file__).resolve().parent.parent


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/4.2/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!


# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = ['127.0.0.1' ,'herokuapp.com']


# Application definition

INSTALLED_APPS = [
    'django_bootstrap_icons',
    'crispy_forms',
    'crispy_bootstrap5',
    'articles',
    'registration',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'django_bootstrap5',
    'django.contrib.sites', # 追加
    'allauth', # 追加
    'allauth.account', # 追加
    'allauth.socialaccount',
    'rest_framework',
    
]



SITE_ID = 1

AUTH_USER_MODEL = 'registration.CustomUser'

MIDDLEWARE = [
    'django.middleware.security.SecurityMiddleware',
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'allauth.account.middleware.AccountMiddleware',
]

ROOT_URLCONF = 'nomad.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [
            os.path.join(BASE_DIR, 'registration','templates', 'allauth'),
            os.path.join(BASE_DIR, 'templates', 'allauth'),
            ],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'nomad.wsgi.application'


# Database
# https://docs.djangoproject.com/en/4.2/ref/settings/#databases

import dj_database_url
from dotenv import (
    find_dotenv,
    load_dotenv,
)
load_dotenv(find_dotenv())
DATABASES = {
    'default': dj_database_url.config(conn_max_age=600),
}


# Password validation
# https://docs.djangoproject.com/en/4.2/ref/settings/#auth-password-validators

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


# Internationalization
# https://docs.djangoproject.com/en/4.2/topics/i18n/

LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/4.2/howto/static-files/

STATIC_URL = '/static/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')  # メディアファイルの保存場所
MEDIA_URL = '/media/'
# Default primary key field type
# https://docs.djangoproject.com/en/4.2/ref/settings/#default-auto-field

DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'

AUTHENTICATION_BACKENDS = (
    'django.contrib.auth.backends.ModelBackend', #デフォルトの認証基盤 
    'allauth.account.auth_backends.AuthenticationBackend' # メールアドレスとパスワードの両方を用いて認証するために必要
)

ACCOUNT_AUTHENTICATION_METHOD = 'email' # メールアドレス（とパスワードで）認証する
ACCOUNT_USERNAME_REQUIRED = True # サインアップ（ユーザー登録）の時にユーザーネームを尋ねる
ACCOUNT_EMAIL_REQUIRED = True # サインアップ（ユーザー登録）の時にメールアドレスを尋ねる
ACCOUNT_EMAIL_VERIFICATION = 'mandatory' # メール検証を必須とする

LOGIN_URL = '/account/login/' # ログインURLの設定
LOGIN_REDIRECT_URL = '/' # ログイン後のリダイレクト先
ACCOUNT_LOGOUT_REDIRECT_URL = '/account/login/' #　ログアウト後のリダイレクト先

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'

CRISPY_TEMPLATE_PACK = 'bootstrap5'

import dj_database_url
db_from_env = dj_database_url.config()
DATABASES['default'].update(db_from_env)

db_from_env = dj_database_url.config(conn_max_age=600, ssl_require=True)
DATABASES['default'].update(db_from_env)

try:
    from .local_settings import *
except ImportError:
    pass

if not DEBUG:
    SECRET_KEY = 'django-insecure-h5_o63*@we^zldtyq%m-q#o2_1ao4h37e1l-u+97b*+c!ypzu@'   // 削除したSECRET_KEYをコピペします
    import django_heroku
    django_heroku.settings(locals())