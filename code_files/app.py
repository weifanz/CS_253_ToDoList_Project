from flask import Flask
from flask import request, render_template, redirect, url_for

import random

app = Flask(__name__, template_folder='', static_folder='')

@app.route('/',methods=['GET', 'POST'])
def home():
    return render_template('index.html')

# Run the server
if __name__ == "__main__":
    app.run(
    host='0.0.0.0',
    port=random.randint(2000, 9000)
)