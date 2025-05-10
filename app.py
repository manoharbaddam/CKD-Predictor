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
        # Example: collect input from form
        sg = request.form.get("sg")
        hemo = request.form.get("hemo")
        rc = request.form.get("rc")
        pc = request.form.get("pc")
        htn = request.form.get("htn")
        dm = request.form.get("dm")
        al = request.form.get("al")
        appet = request.form.get("appet")
        model = request.form.get("model")
        data = np.array([[sg, htn, hemo, dm, al, appet, rc, pc]])
        
        with open("Models/tunned_kidney_Cancer_model.pkl", "rb") as file:
            model_tunned_rf = pickle.load(file)
        with open("Models/AdaBoost_model.pkl", "rb") as file:
            model_adb = pickle.load(file)
        with open("Models/GradientBoosting_model.pkl", "rb") as file:
            model_gb = pickle.load(file)
        
        if model== "RandomForest":
            result = model_tunned_rf.predict(data)[0]
        elif model== "AdaBoost":
            result = model_adb.predict(data)[0]
        elif model == "GradientBoosting" :
            result = model_gb.predict(data)[0]
        else:
            result = None
            
        if result is not None:
            if result == 1:
                prediction = f"⚠️ High Risk of CKD {model}  {data} {result}"
            else :
                prediction = f"The person is not likely to have CKD."
            
        return render_template("predict.html", prediction=prediction)

    return render_template("predict.html")

if __name__ == "__main__":
    app.run(debug=True)

