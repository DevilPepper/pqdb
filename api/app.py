from flask import Flask, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins":"*"}})

#@cross_origin(allow_headers=['Content-Type'], origins="*")
#@cross_origin()
@app.route("/", methods=['POST','GET'])
def hello():
    return jsonify("hi")

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80, debug=True, threaded=True)
