from flask import Flask, url_for, jsonify, request
from flask_cors import CORS, cross_origin
import psycopg2 as pg
from psycopg2.extras import DictCursor
import json

app = Flask(__name__)
app.config["APPLICATION_ROOT"] = "/todos"
CORS(app, resources={r"/*": {"origins":"*"}})

@app.route("/")
def index():
    return "The URL for this page is {}".format(url_for("index"))

@app.route("/todos", methods=["POST", "GET", "PUT"])
def todos():
    if request.method == "POST":
        params = request.form
        return add_todo(params)

    elif request.method == "GET":
        params = request.args.get("done", False)
        return get_todos(params)
    
    else: # PUT
        params = request.form
        return update_todos(params)

@app.route("/top/<int:n>")
def top_todos(n):
    return "Will get {} todos".format(n)









@app.route("/hi", methods=["POST","GET"])
def hello():
    conn = pg.connect(database="postgres", user="postgres", host="db", password="docker")
    db = conn.cursor(cursor_factory=DictCursor)

    db.execute("SELECT * from TODOS")
    rows = [dict(record) for record in db] #db.fetchall()

    conn.close()
    return jsonify(rows)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=80, debug=True, threaded=True)
