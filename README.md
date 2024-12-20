# 3D Model Viewer Web Application

This web application allows users to upload 3D models, save them in a MariaDB database, and generate QR codes for seamless access. Scanning the QR code opens a Babylon.js-based 3D model viewer, enabling zoom, rotation, and exploration of the model. Built with Django, React, and Babylon.js, this project combines powerful backend, frontend, and 3D visualization technologies.

## Features
- **User Model Upload**: Upload 3D models through an intuitive interface.
- **MariaDB Integration**: Save and manage user-uploaded models in a secure database.
- **QR Code Generation**: Automatically generate a QR code for each uploaded model.
- **Babylon.js 3D Viewer**: Explore models with zoom, rotate, and pan functionality.
- **React Frontend**: Responsive and interactive UI for a seamless user experience.
- **Django Backend**: Robust backend for managing APIs and user requests.

## Tech Stack

### Frontend
- **React.js**: Dynamic and interactive UI.
- **Babylon.js**: 3D rendering and model interaction.

### Backend
- **Django**: Framework for managing the server and APIs.
- **MariaDB**: Relational database for storing 3D model metadata.

### Other Tools
- **QR Code Generator**: Python library for creating QR codes.
- **RESTful APIs**: To connect the backend with the frontend.

## Usage
1. Upload a 3D model via the web interface.
2. The model is saved in the MariaDB database, and a QR code is generated.
3. Scan the QR code with any device to open the 3D model viewer.
4. Interact with the model using the Babylon.js-powered viewer.

## Project Overview

This project is a web-based application designed to streamline the management and visualization of 3D models. It allows users to upload their 3D models, which are securely stored in a MariaDB database. For easy access, the application generates a QR code for each uploaded model. Scanning the QR code takes the user directly to a Babylon.js-powered 3D viewer, where the model can be explored interactively with features like zooming, rotation, and panning.

The application leverages the power of Django for a robust backend, React for a dynamic frontend, and Babylon.js for immersive 3D rendering. It demonstrates a seamless integration of multiple technologies, offering an efficient solution for managing and interacting with 3D content. The project is ideal for developers and businesses looking to integrate modern web frameworks with 3D visualization capabilities.
