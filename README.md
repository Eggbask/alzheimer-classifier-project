# Alzheimer's Detection through MRI Classification

This project is a web application that allows the user to upload a top-down MRI scan and receive a prediction of whether their scan shows early signs of Alzheimers. It consists of a FastAPI backend server running a trained Pytorch CNN model and a Next.js web app for user interaction.

## Dependencies

### Backend
Ensure that you have Python 3.8+ installed. The backend requires the following packages to be installed:

* `fastapi` - API framework
* `uvicorn` - ASGI Server
* `torch` - Pytorch
* `torchvision` - Image transformations
* `PIL`(from `Pillow`) - Image processing
* `python-multipart` - Dependency for fastapi

You can install these using the following command:
    
    pip install fastapi uvicorn torch torchvision pillow python-multipart

*Depending on the version of python installed, the pip command may be pip3*

---

### Frontend
Ensure you have Node.js 18+ and npm (or yarn) installed. The frontend requires:

* `next` - React/frontend framework
* `react` - UI Library
* `tailwindCSS` - Styling

You can install these dependencies using the following command:

    cd frontend
    npm install

## Running the app

Once this repository has been cloned, navigate to it in your terminal or VSC, then execute the following commands:

    cd backend
    python server.py

*Depending on your python installation, the python command may be python3*

You can access the API at *http://localhost:8000/docs* and submit an image through the API interface and get a result.

You can also open another terminal and navigate to the frontend folder and run:

    npm run dev

You will be able to interact with the app more cleanly and easily through this UI at *http://localhost:3000*