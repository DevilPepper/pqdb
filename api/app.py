from flask import Flask

app = Flask(__name__)

@app.route("/", methods=['POST','GET'])
def hello():
    return "hi"

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True, threaded=True)
