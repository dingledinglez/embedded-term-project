# Dingle-Dingle: A Relaxing Night with Dingle
<img width="1515" alt="스크린샷 2025-06-19 오후 11 14 05" src="https://github.com/user-attachments/assets/e1dca51b-b70b-4849-b335-1a4d33b54322" />

## 📚 Introduction
Dingle-Dingle is an AI-powered smart baby monitoring application designed to keep infants safe and give parents peace of mind during the night. By combining CNN-based cry analysis and real-time pose estimation, the system detects different types of baby cries and monitors posture to prevent choking and falls.

## 🔎 Key Features
- **Real-time Cry Analysis**: Classifies baby cries into categories such as hunger, discomfort, burping, pain, and fatigue.  
- **Real-time Pose Estimation**: Uses pose detection to identify risky positions and alert caregivers to potential choking or fall hazards.  
- **Daily Statistics**: Provides parents with visual summaries and analytics of their baby's crying patterns and posture data over time.  

## 📢 System Architecture
<img width="1109" alt="스크린샷 2025-06-19 오후 11 15 32" src="https://github.com/user-attachments/assets/66dbcd39-de29-4048-b56a-ab567567f238" />

## 💻 Development Tech Stack
### **Frontend**
- React : Base UI Library 
- TypeScript : Type-safe Langauge
- Vite : Fast and light weight build tools
- TailwindCSS : Opensource CSS Framework
- lucide-react : React icon componenet library
- zustand : React state management 
### **Backend** 
- Spring Boot, Java : Used for api server framework
- NestJS, TypeScript : Used for SSE gateway
### **Database**
- MySQL : Relational Database System
- Redis : Used as Cache
### **AI** 
- Python
- Fastapi
- TensorFlow, PyTorch
- OpenCV
### **Infra**
- Docker
- Docker Compose
- AWS EC2, S3, RDS, CodeDeploy, CloudFront

## 🏗 Project Structure
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
## 🏛️ DB ERD
![db](https://github.com/user-attachments/assets/61d1adfb-783f-49f4-bcc8-da462f435103)


## 🎞️ Demo Video
Watch the live demonstration here: [Video](https://youtu.be/YCgK8OtZoHo)

## 📊 Training Data Source
- **Cry Analysis Dataset**: [Baby Cry Classification](https://www.kaggle.com/datasets/bhoomikavalani/donateacrycorpusfeaturesdataset) – 5 000 labeled audio clips spanning five cry types *(hunger, discomfort, burping, pain, fatigue).*  
- **Pose Estimation Dataset**: [COCO Keypoints](https://cocodataset.org/#download) plus 2 000 self-annotated infant images for improved detection accuracy in low-light nursery conditions.  

## 👥 Team Members

|               | 성영준 | 윤종우 | 오현택 |
|---------------|:------:|:------:|:------:|
| **Roles**     | AI / FE / BE | AI / FE / BE | AI / FE / BE |
| **Profile**   | <img src="https://avatars.githubusercontent.com/yxun20" width="110" /> | <img src="https://avatars.githubusercontent.com/JJ0ngu" width="110" /> | <img src="https://avatars.githubusercontent.com/HyunTaek5" width="110" /> |
| **GitHub**    | [@yxun20](https://github.com/yxun20) | [@JJ0ngu](https://github.com/JJ0ngu) | [@HyunTaek5](https://github.com/HyunTaek5) |

