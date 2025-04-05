#from dataset import Dataset
#import json 

#class battle(Dataset):
 #   def __init__(self, path:str,tokenizer):
  #      self.data=json.loads(open(path,"r"))
   #
    #    self.X=[]
     #   for i in self.data:
      #      for j in i['name']:
       #       self.X.append(j['text'])
#
 #       for index, i in enumerate(self.X):
  #          try:
   #             self.X[index]="<startofstring> "<i>" <bot>: "+self.X[index+1]
    #        except:
     #               break
#
 #       self.X=self.X[:-1]
#
 ##
   #     self.X_encoded=tokenizer(self.X, truncation=True, padding=True )
    #    self.input_ids=self.X_encode['input_ids']
     #   self.attention_mask=self.X_encoded['attention_mask']   
#
 #   def __len__(self):
  #       pass
   # def __getitem__(self, index):
    #    pass
# battle.py

# Import necessary modules or classes
# Make sure you have the correct Dataset import pat
#   # Example if it's in a subfolder  # Example if it's in a subfolder  # or the correct path if it's from another modul

#import json

#try:
   # with open('battle.json') as json_file:
       # data = json.load(json_file)
        # You can now use 'data' as needed
#except FileNotFoundError as e:
  #  print(f"Error loading JSON file: {e}")

#class Character:
    #def __init__(self, name, health, attack):
       # self.name = name
       # self.health = health
      #  self.attack = attack

    #def is_alive(self):
      #  return self.health > 0

    #def attack_character(self, other):
       # print(f"{self.name} attacks {other.name} for {self.attack} damage!")
        #other.health -= self.attack
        #if not other.is_alive():
         #   print(f"{other.name} has been defeated!")

#def battle(character_a, character_b):
    #turn = 0
    #while character_a.is_alive() and character_b.is_alive():
      #  if turn % 2 == 0:
       #     character_a.attack_character(character_b)
       # else:
       #     character_b.attack_character(character_a)
     #   turn += 1
   # winner = character_a if character_a.is_alive() else character_b
   ## print(f"The winner is {winner.name}!")

#if __name__ == "__main__":
    # Example characters
   # hero = Character("Hero", 100, 20)
   # monster = Character("Monster", 80, 25)

    # Start the battle
    #battle(hero, monster)#

from transformers import pipeline
generator = pipeline('text-generation', model='gpt2')
dataset = ["sample question 1", "sample question 2"]
def get_dataset():
    return ["sample question 1", "sample question 2"]


prompt = "Generate a multiple-choice question on physics for a 10th-grade student: What is the SI unit of force?"
result = generator(prompt, max_length=50, num_return_sequences=1)
print(result)