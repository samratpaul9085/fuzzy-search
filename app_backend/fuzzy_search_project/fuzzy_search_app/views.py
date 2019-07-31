from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from .models import Word
import csv
from django.http import JsonResponse


# get word suggestion api
@csrf_exempt
def get_words(request):
    job_list = []
    for item in  Word.objects.all():
        dic={}
        dic['label'] = item.word
        dic['value'] = item.usage_frequency
        job_list.append(dic)
    return JsonResponse(job_list, safe=False)
   

# save data from tsv to db
def save_data_from_tsv():
    with open('word_search.tsv','rt') as tsvin, open('new.csv','wb') as csvout:
        tsvin = csv.reader(tsvin, delimiter='\t')
        for row in tsnin:
            word_obj =  Word()
            word.word = row[0]
            word.usage_frequency = row[1]
            word.save()
