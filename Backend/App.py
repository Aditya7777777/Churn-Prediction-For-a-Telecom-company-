from flask import Flask, request, jsonify
import joblib 
import pandas as pd
import warnings 
from flask_cors import CORS

# Ignore common warnings (like version warnings from scikit-learn/pandas)
warnings.filterwarnings("ignore") 

app = Flask(__name__)
# 1. CORS FIX: This line ensures the preflight (OPTIONS) request gets a 200 OK response.
CORS(app) 

# --- Model Loading (Place this block before the routes) ---
try:
    # Attempt to load the model file
    with open("sklearn_churn_model_6_features.joblib","rb") as file:
        model = joblib.load(file)
except FileNotFoundError:
    print("Error: Model file 'sklearn_churn_model_6_features.joblib' not found.")
    # 2. SYNTAX FIX: Using 'None' (capital N) prevents server crash.
    model = None
# -----------------------------------------------------------


# Route made to check backend connectivity 
@app.route('/api/ping',methods=['GET'])
def ping():
    return jsonify({
        "status":"success",
        "message":"Flask backend is working and connected"
    }),200

# Routes
@app.route('/predict',methods=['POST'])
def predict() :
    # Checks if the model failed to load during startup
    if model is None:
        return jsonify({'error':'Model not loaded'}),500
    
    try:
        data = request.get_json(force = True)
        
        # 3. FIXES APPLIED: 'features' is now correctly assigned and 'tenure' casing matches frontend.
        # Defining the exact features your model expects
        features = ["Contract", "tenure", "InternetService", "MonthlyCharges", "OnlineSecurity", "TechSupport"]

        # Creating a dictionary with just the required features
        # The key names in the JSON (now including 'tenure') must exactly match this list.
        input_dict = {key:data.get(key) for key in features}

        # Creating a pandas frame from the input dictionary
        input_data = pd.DataFrame([input_dict])

        # Ensure the order of the columns matches with the model's training order
        input_data = input_data[features] 

        # Make the prediction
        prediction = model.predict(input_data)
        probability = model.predict_proba(input_data) 

        # Convert the prediction to a readable format
        result = 'Churn' if prediction[0] == 1 else 'No Churn'
        
        # Enhancement: Print the prediction to the Flask console
        print(f"--- PREDICTION MADE ---")
        print(f"Input Data: {input_dict}")
        print(f"Prediction: {result}")
        print(f"Churn Probability: {probability[0][1]:.4f}")
        print(f"-----------------------\n")

        return jsonify({
            'prediction':result,
            'probability':float(probability[0][1]) # Extract churn probability
        })
    
    except Exception as e:
        # Log error to console for debugging
        print(f"--- ERROR IN /predict ROUTE ---")
        print(f"Exception: {str(e)}")
        print(f"-------------------------------\n")
        
        # Return a 400 Bad Request if the error is due to bad input data
        return jsonify({'error':str(e)}),400
    
if __name__ == '__main__':
    # Run Flask on port 5000
    app.run(debug=True, port = 5000)