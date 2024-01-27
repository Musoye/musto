#!/usr/bin/python3
import requests
from pprint import pprint

def get_definition(word):
    url = f"https://api.dictionaryapi.dev/api/v2/entries/en/{word}"
    response = requests.get(url)

    if response.status_code == 200:
        data = response.json()
        res = data[0].get('meanings')[0].get('definitions')[0].get('definition')
        print(res)
        return res
    else:
        return "Error: Unable to fetch definition."

# Example usage
word_to_define = "example"
definition = get_definition(word_to_define)
print(f"Definition of {word_to_define}: {definition}")
