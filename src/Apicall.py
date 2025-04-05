import sys
import logging
import requests
import argparse

logging.basicConfig(level=logging.INFO, stream=sys.stdout)

def test_endpoint(endpoint, prompt):
    
    req = requests.post(
        url = endpoint,
        headers = {"Content-Type": "application/json"},
        json = {'prompt': prompt},
    )
    
    logging.info(f'Status Code: {req.status_code}')
    logging.info(f'Response:    {req.text}')


if __name__ == "__main__":
    
    parser = argparse.ArgumentParser(description="")
    parser.add_argument("--endpoint", required=True, help="LLM Endpoint with route, such as http://localhost:7777/my_test_route")
    parser.add_argument("--prompt", required=True, help="LLM Prompt")
    args = parser.parse_args()
    
    test_endpoint(endpoint=args.endpoint, prompt=args.prompt)
