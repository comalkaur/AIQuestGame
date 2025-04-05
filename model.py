import gymnasium as gym
from stable_baselines3 import PPO
import numpy as np

class QuizEnv(gym.Env):
    def __init__(self):
        super(QuizEnv, self).__init__()
        self.action_space = gym.spaces.Discrete(10)  
        self.observation_space = gym.spaces.Box(low=0, high=100, shape=(1,), dtype=np.float32)
        self.state = np.array([50])

    def step(self, action):
        reward = np.random.randint(0, 10)  
        self.state = np.array([self.state[0] + reward])
        done = self.state[0] >= 100
        info = {}
        return self.state, reward, done, False, info

    def reset(self, seed=None, options=None):
        super().reset(seed=seed)  # Ensure Gymnasium's reset works properly
        self.state = np.array([50])
        info = {}
        return self.state, info  # Gymnasium requires returning (state, info)

env = QuizEnv()
model = PPO("MlpPolicy", env, verbose=1)
model.learn(total_timesteps=10000)
