# Customer Churn Prediction Application

🔗 Live Demo: https://churn-prediction-for-a-telecom-company-o5v2.onrender.com

Note: Backend connectivity may take a few seconds during initial load. 

## Project Overview
Customer churn refers to the situation where a customer stops using a company’s services. Retaining existing customers is crucial for businesses, as acquiring new customers is often more expensive than keeping current ones.

This project is a **Machine Learning–based Churn Prediction Application** that predicts whether a customer is likely to **churn or not churn** based on **six important parameters**. The prediction helps organizations identify high-risk customers and take proactive measures to retain them.

The model is trained using the **Random Forest Algorithm** and is integrated into a user-friendly application interface where users can input customer details and get churn predictions in real time.

The model training was performed in Jupyter Notebook, and relevant screenshots are included for reference.

---

##  Objective
- To predict customer churn using historical customer data  
- To analyze how contract type, tenure, services, and charges affect churn  
- To provide an intuitive interface for churn prediction  
- To visualize churn probability using a percentage bar  

---

##  Features Used for Prediction
The model predicts churn based on the following **6 parameters**:

### 1️. Contract Type
- **Month-to-Month**
- **One Year**
- **Two Year**

 *Longer contract duration results in lower chances of churn.*

---

### 2️. Tenure
- Represents the number of days a customer has been associated with the company  

 *Lower tenure → Higher churn probability*  
 *Higher tenure → Lower churn probability*

---

### 3️. Internet Service
- **DSL** – Lower churn (cheaper service)
- **Fiber Optic** – Higher churn (more expensive)
- **No Internet Service** – Very high churn probability

---

### 4️. Monthly Charges
- High monthly charges → Higher chance of churn  
- Low monthly charges → Lower chance of churn  

---

### 5️. Online Security
- **Yes** – Lower churn probability  
- **No** – Higher churn probability  

---

### 6️. Tech Support
- **Yes** – Lower churn probability  
- **No** – Higher churn probability  

---

##  Application Workflow
1. User enters customer details using input fields
2. Clicks on the **Predict** button
3. The trained Random Forest model analyzes the inputs
4. Output is displayed as a **percentage probability bar**
5. Final decision:
   - **> 50%** → Customer will churn
   - **≤ 50%** → Customer will not churn

---

##  Model Training Details
- Algorithm Used: **Random Forest Classifier**
- Training Environment: **Jupyter Notebook**
- Dataset Size: **7,044 rows**
- Number of Features: **6**

---

##  Model Performance Metrics

### Overall Performance
- **Overall Accuracy:** 0.77  
- **Macro Average F1-Score:** 0.69  
- **Weighted Average F1-Score:** 0.76  

---

### Class-wise Performance

#### Class 0 (Non-Churn / Majority Class)
- Precision: 0.82  
- Recall: 0.87  
- F1-Score: 0.84  
- Support: 1549  

#### Class 1 (Churn / Minority Class)
- Precision: 0.57  
- Recall: 0.49  
- F1-Score: 0.53  
- Support: 561  

---

##  Prediction Output
- Prediction is visualized using a **percentage bar**
- Helps users clearly understand churn risk
- Improves interpretability of the model output

---

##  Technologies Used
- **Python**
- **Jupyter Notebook**
- **Pandas**
- **NumPy**
- **Scikit-learn**
- **Random Forest Algorithm**
- **Frontend Interface (React)**

---

##  Training & Application Screenshots

 ### Dataset exploration
   #### Data Shapes and Features Included 
 <img width="1198" height="743" alt="Screenshot 2026-01-03 164429" src="https://github.com/user-attachments/assets/970df221-038c-4393-a149-6b3ea327b2a8" />
 
  #### Training Set Size Testing Set Size 
  <img width="1201" height="559" alt="Screenshot 2026-01-03 164501" src="https://github.com/user-attachments/assets/d40d510d-c23b-45a3-89e8-f6b8fbce4117" />

---
 ### Model training
  #### Random Forest Model Training 
  <img width="664" height="334" alt="Screenshot 2026-01-03 165031" src="https://github.com/user-attachments/assets/dcce9bd8-8d81-4bd8-b88e-7566fe9837a9" />  
  
  #### Accuracy and evaluation metrics 
 <img width="725" height="676" alt="Screenshot 2026-01-03 165309" src="https://github.com/user-attachments/assets/516578a0-e0ea-4542-815c-135b7799b8c0" />

---
 ### Application UI and prediction output
   #### Interface/UI
  <img width="1919" height="870" alt="Screenshot 2026-01-03 165653" src="https://github.com/user-attachments/assets/daff3c3d-5594-4990-9624-e0b27310aa6c" />
  
   #### Prediction
  <img width="1919" height="861" alt="Screenshot 2026-01-03 170346" src="https://github.com/user-attachments/assets/80458b74-39ad-4776-86dd-03d5a5a1a259" />
  
   #### Parameters of model
  <img width="1904" height="874" alt="Screenshot 2026-01-03 170406" src="https://github.com/user-attachments/assets/ba025bb4-5c62-48cb-a678-f8d63fd9a350" /> 


---

##  Conclusion
This churn prediction system effectively identifies customers who are likely to leave the service based on critical usage and service parameters. The application provides a practical example of applying machine learning techniques to solve real-world business problems.

---
