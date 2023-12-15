import os
BASE_DIR = os.path.dirname(os.path.dirname(__file__))

SECRET_KEY = 'django-insecure-h5_o63*@we^zldtyq%m-q#o2_1ao4h37e1l-u+97b*+c!ypzu@' 

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

DEBUG = True