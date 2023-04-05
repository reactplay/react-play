# Object Detector

Build a play for detect objects using AI model.

![cover](https://user-images.githubusercontent.com/52546856/221181440-f29d987f-5151-4baa-9441-94dfd9765b40.png)

#### What is Object Detection?

Object detection is a computer vision task in machine learning that involves identifying and localizing objects within an image or a video. Object detection is a crucial task for many applications, such as autonomous driving, surveillance systems, and medical imaging.

There are several popular object detection algorithms, including YOLO (You Only Look Once), Faster R-CNN (Region-based Convolutional Neural Network), and SSD (Single Shot Detector). These algorithms have different strengths and weaknesses, and the choice of algorithm depends on the specific requirements of the application.

#### How I build this object detector?

Obvously this is a react play, means javascript project. So I use TensorFlow.js library. Tenseflow.js is a library for develop ML models in JavaScript, and use ML directly in the browser or in Node.js. There are already trained ML models. So here I use one ([@tensorflow-models/coco-ssd](https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd)) of them to detect the objects using video of the object.

## Play Demographic

- Language: js
- Level: Advanced

## Creator Information

- User: senali-d
- Gihub Link: https://github.com/senali-d
- Blog: https://senali.hashnode.dev/how-to-develop-object-detector-using-ai-model
- Video: https://www.stack-stream.com/v/object-detector-with-tenserflowjs

## Implementation Details

Detect Objects using pre-trained ML model.

## Consideration

- @tensorflow/tfjs
  - Used to train and deploy machine learning models using JavaScript, making it easier to develop and deploy machine learning applications that run entirely in the browser.
- @tensorflow-models/coco-ssd
  - pre-trained object detection model that can be used with TensorFlow.js. It is based on the Single Shot Multibox Detector (SSD) architecture and is trained on the Microsoft Common Objects in Context (COCO) dataset, which contains over 330,000 images with more than 2.5 million object instances labeled across 80 different object categories.
- react-webcam
  - Popular open-source library for integrating webcam capture capabilities into React.js applications.

## Resources

- [Tenserflow.js](https://www.tensorflow.org/js)
- [Pre-trained Models](https://www.tensorflow.org/js/models)
