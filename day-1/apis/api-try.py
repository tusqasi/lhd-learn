import requests
from pprint import pprint as print

joke_url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&format=txt"
translate_url = "https://api.funtranslations.com/translate/gungan.json"
joke = requests.get(joke_url).text
print(joke.strip("'"))
params_translate= {
        "text":joke
        }
translated = requests.get(translate_url,params=params_translate)

print(translated)
