# Dingle-Dingle: A Relaxing Night with Dingle
![App Screenshot](https://github.com/user-attachments/assets/0c798f0d-7176-435d-9cf2-7d7d0b1b3515)

## 📚 Introduction
Dingle-Dingle is an AI-powered smart baby monitoring application designed to keep infants safe and give parents peace of mind during the night. By combining CNN-based cry analysis and real-time pose estimation, the system detects different types of baby cries and monitors posture to prevent choking and falls.

## 🔎 Key Features
- **Real-time Cry Analysis**: Classifies baby cries into categories such as hunger, discomfort, burping, pain, and fatigue.  
- **Real-time Pose Estimation**: Uses pose detection to identify risky positions and alert caregivers to potential choking or fall hazards.  
- **Daily Statistics**: Provides parents with visual summaries and analytics of their baby's crying patterns and posture data over time.  

## 📢 System Architecture
![Architecture Diagram](https://github.com/user-attachments/assets/ac590bf7-5c3f-4df1-a14d-40f7176704bd)

## 💻 Development Tech Stack
### **Frontend**
- React 
- TypeScript
- Vite
### **Backend** 
- Spring Boot, Java
- NestJS, TypeScript
### **Database**
- MySQL
- Redis
### **AI** 
- Python
- Fastapi
- TensorFlow, PyTorch
- OpenCV
### **Infra**
- Docker
- Docker Compose
- AWS EC2, S3, RDS, CodeDeploy, CloudFront

## Project Structure
```text
.
├── README.md
├── api
│   ├── Dockerfile
│   ├── README.md
│   ├── build.gradle
│   ├── docker-compose.yml
│   ├── fastapp
│   │   ├── Dockerfile
│   │   ├── app.py
│   │   ├── models
│   │   ├── requirements.txt
│   │   ├── static
│   │   ├── utils
│   │   └── yolov8n.pt
│   ├── gradle
│   │   └── wrapper
│   ├── gradlew
│   ├── gradlew.bat
│   ├── models
│   │   ├── cnn_model.h5
│   │   ├── seg_best.pt
│   │   ├── yolov8n-pose.pt
│   │   └── yolov8n-seg.pt
│   ├── settings.gradle
│   └── src
│       ├── main
│       └── test
├── frontend
│   ├── README.md
│   ├── components.json
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── postcss.config.js
│   ├── public
│   │   ├── fonts
│   │   └── vite.svg
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── index.css
│   │   ├── lib
│   │   ├── main.tsx
│   │   ├── pages
│   │   ├── services
│   │   ├── store
│   │   └── vite-env.d.ts
│   ├── tailwind.config.js
│   ├── tsconfig.app.json
│   ├── tsconfig.json
│   ├── tsconfig.node.json
│   └── vite.config.ts
└── ws-gateway
    ├── README.md
    ├── apps
    │   ├── domain
    │   └── gateway
    ├── db
    │   └── kysely
    ├── nest-cli.json
    ├── package-lock.json
    ├── package.json
    ├── tsconfig.build.json
    └── tsconfig.json
```

## 🎞️ Demo Video
Watch the live demonstration here: [Demo Video](https://github.com/user-attachments/assets/10213c31-4f4d-4e96-b0c9-1e4329925902)

## 📊 Training Data Source
- **Cry Analysis Dataset**: [Baby Cry Classification](https://www.kaggle.com/datasets/bhoomikavalani/donateacrycorpusfeaturesdataset) – 5 000 labeled audio clips spanning five cry types *(hunger, discomfort, burping, pain, fatigue).*  
- **Pose Estimation Dataset**: [COCO Keypoints](https://cocodataset.org/#download) plus 2 000 self-annotated infant images for improved detection accuracy in low-light nursery conditions.  

## 👥 Team Members

|               | 성영준 | 윤종우 | 오현택 |
|---------------|:------:|:------:|:------:|
| **Roles**     | AI / FE / BE | AI / FE / BE | AI / FE / BE |
| **Profile**   | <img src="https://avatars.githubusercontent.com/yxun20" width="110" /> | <img src="https://avatars.githubusercontent.com/JJ0ngu" width="110" /> | <img src="https://avatars.githubusercontent.com/HyunTaek5" width="110" /> |
| **GitHub**    | [@yxun20](https://github.com/yxun20) | [@JJ0ngu](https://github.com/JJ0ngu) | [@HyunTaek5](https://github.com/HyunTaek5) |

