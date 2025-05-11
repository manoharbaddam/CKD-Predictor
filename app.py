from flask import Flask, render_template, request
import numpy as np
import pickle

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/predict", methods=["GET", "POST"])
def predict():
    if request.method == "POST":
        # Parse and convert form inputs
        sg    = float(request.form["sg"])
        hemo  = float(request.form["hemo"])
        rc    = float(request.form["rc"])
        pc    = int(request.form["pc"])
        htn   = int(request.form["htn"])
        dm    = int(request.form["dm"])
        al    = int(request.form["al"])
        appet = int(request.form["appet"])
        model = request.form["model"]

        data = np.array([[sg, htn, hemo, dm, al, appet, rc, pc]])

        # Load models
        with open("models/tunned_kidney_Cancer_model.pkl", "rb") as f:
            model_tunned_rf = pickle.load(f)
        with open("models/AdaBoost_model.pkl", "rb") as f:
            model_adb = pickle.load(f)
        with open("models/GradientBoosting_model.pkl", "rb") as f:
            model_gb = pickle.load(f)

        # Select and predict
        if model == "RandomForest":
            result = model_tunned_rf.predict(data)[0]
        elif model == "AdaBoost":
            result = model_adb.predict(data)[0]
        elif model == "GradientBoosting":
            result = model_gb.predict(data)[0]
        else:
            result = None

        # Render result page
        return render_template("result.html",
            pred=result,
            form_data={
              "sg": sg,
              "hemo": hemo,
              "rc": rc,
              "pc": "Normal" if pc == 0 else "Abnormal",
              "htn": "No"     if htn == 0 else "Yes",
              "dm":  "No"     if dm  == 0 else "Yes",
              "al": al,
              "appet": "Poor" if appet == 0 else "Good",
              "model": model
            }
        )

    return render_template("predict.html")

if __name__ == "__main__":
    app.run(debug=True)
