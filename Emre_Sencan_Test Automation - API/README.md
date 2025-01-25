# **Test Automation - API (PetStore API)**

## 📌 **Project Description**
This project is designed to test **CRUD (Create, Read, Update, Delete)** operations using the **PetStore API**. The tests are automated using **Rest Assured**, **Java HttpClient** and **Java**.

## 🛠 **Technologies Used**
- **Java 11+** *(Ensure Java 11 or later is installed for smooth execution.)*
- **Rest Assured** *(For API testing)*
- **Java HttpClient** *(For making HTTP requests in API testing)*
- **TestNG** *(As the test framework)*
- **Maven** *(For dependency management)*
- **Allure Report** *(For generating test reports)*

---
## ⚙️ **Setup & Execution**
### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/emresencan/QAEngineer-SeleniumTask3.git
```

### **2️⃣ Install Dependencies**
```sh
mvn clean install
```

### **3️⃣ Run Tests**
```sh
mvn test
```

### **4️⃣ View Allure Report**
```sh
allure serve target/allure-results
```

---
## 🔥 **Test Scenarios**
### **✅ Positive Scenarios**
- **Case1:** Create a new pet → `200 OK`
- **Case2:** Retrieve an existing pet by ID → `200 OK`
- **Case4:** Update an existing pet → `200 OK`
- **Case6:** Delete an existing pet → `200 OK`

### **❌ Negative Scenarios**
- **Case3:** Retrieve a non-existent pet by ID (`404 Not Found` expected)
- **Case5:** Update a pet with an invalid ID (`404 Not Found` expected)
- **Case7:** Delete a non-existent pet (`404 Not Found` expected)

---

## 📩 Contact
- **GitHub:** [GitHub](https://github.com/emresencan)
- **Email:** y.emresencan@hotmail.com
- **LinkedIn:** [LinkedIn](https://www.linkedin.com/in/emre-sencan-890b043b)


