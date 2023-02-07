## Push Demo App

Simple react native app that receives push notification from the Delivery Node.  

**Prerequisites**

- [React Native Setup](https://reactnative.dev/docs/environment-setup)
- [Google FCM Account Setup](https://firebase.google.com/docs/cloud-messaging)
- [Push Delivery Node Setup](https://github.com/ethereum-push-notification-service/push-delivery-node#push-delivery-node)

Steps:

- Clone the demo app repo
    
    ```solidity
    git clone https://github.com/ethereum-push-notification-service/demo-push-mobile-app
    ```
    
- Install the packages `yarn install`
- Firebase Project Setup
    - Android
        - create a firebase android app [https://firebase.google.com/docs/android/setup](https://firebase.google.com/docs/android/setup)
        - download the `google-services.json` file from the Firebase Console and place it in the `android/app` directory of your project
        - run the app `yarn android`
    - Ios
        - create a firebase ios app [https://firebase.google.com/docs/ios/setup](https://firebase.google.com/docs/ios/setup)
        - download the `GoogleService-Info.plist` from the Firebase Console and place it in the `ios` directory of your project
        - run the app `yarn ios`